"use client";

import React, { useEffect, useMemo, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PageHeading } from "../../components/PageHeading";
import { PRODUCTS, shapeProductForLocale } from "./data";
import { HcpNotice } from "./HcpNotice";
import { useTranslations } from "../../locales/useTranslations";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

const PER_PAGE = 9;
const BRAND_TABS = [
  { id: "bgood", label: "B-good care" },
  { id: "protexus", label: "Protexus" },
];

function ProductPageInner() {
  const { locale, t } = useTranslations();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("all");
  const [brandFilter, setBrandFilter] = useState(null);
  const [page, setPage] = useState(1);

  const localePrefix = locale === "en" ? "/en" : "/tr";
  const searchTerm = (searchParams.get("search") || "").trim().toLowerCase();

  const tabs = useMemo(
    () => [
      { id: "all", label: t.product.tabs.all },
      { id: "consumer", label: t.product.tabs.consumer },
      { id: "rx", label: t.product.tabs.rx },
    ],
    [t.product.tabs],
  );

  const buildHref = (path) => {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${localePrefix}${normalized}`;
  };

  useEffect(() => {
    const applyHash = () => {
      const hashString = window.location.hash?.replace("#", "");
      const params = new URLSearchParams(hashString);
      const hashCat = params.get("cat");
      const hashBrand = params.get("brand");

      const validTab = tabs.find((tab) => tab.id === hashCat)?.id || "all";
      const validBrand =
        hashBrand && BRAND_TABS.some((b) => b.id === hashBrand) ? hashBrand : null;

      setActiveTab(validTab === "all" && validBrand ? "consumer" : validTab);
      setBrandFilter(validBrand);
      setPage(1);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [tabs]);

  const localizedProducts = useMemo(
    () => PRODUCTS.map((product) => shapeProductForLocale(product, locale)),
    [locale],
  );

  const filteredProducts = useMemo(() => {
    let base =
      activeTab === "all"
        ? localizedProducts
        : localizedProducts.filter((product) => product.category === activeTab);

    if (brandFilter) {
      base = base.filter((product) => product.brand === brandFilter);
    }

    if (searchTerm.length > 0) {
      base = base.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          (product.description || "").toLowerCase().includes(searchTerm),
      );
    }

    return base;
  }, [activeTab, brandFilter, localizedProducts, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  const updateHash = (tabId, brandId = null) => {
    const parts = [];
    if (tabId && tabId !== "all") parts.push(`cat=${tabId}`);
    if (brandId) parts.push(`brand=${brandId}`);
    const hash = parts.length ? `#${parts.join("&")}` : "";
    const newUrl = `${window.location.pathname}${hash}`;
    window.history.replaceState(null, "", newUrl);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setBrandFilter(null);
    setPage(1);
    updateHash(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBrandChange = (brandId) => {
    const nextBrand = brandFilter === brandId ? null : brandId;
    setBrandFilter(nextBrand);
    setActiveTab("consumer");
    setPage(1);
    updateHash("consumer", nextBrand || undefined);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <PageHeading title={t.product.pageTitle} />
      <HcpNotice copy={t.hcp} homeHref={locale === "en" ? "/en" : "/"} />
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="cs_notice_card" role="note" aria-label={t.product.noticeTitle}>
          <i
            className="fa-solid fa-circle-info cs_accent_color"
            aria-hidden="true"
          />
          <div>
            <p className="mb-0">
              <strong>{t.product.noticeTitle}</strong> {t.product.noticeBody}
            </p>
          </div>
        </div>
        <div className="cs_height_30 cs_height_lg_20" />

        <div
          id="productTabs"
          className="cs_tabbar"
          role="tablist"
          aria-label={t.product.pageTitle}
        >
          {tabs.map((tab) => (
            <a
              key={tab.id}
              className={`cs_tab_btn${activeTab === tab.id ? " active" : ""}`}
              data-tab={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleTabChange(tab.id);
              }}
            >
              {tab.label}
            </a>
          ))}
          {BRAND_TABS.map((brand) => (
            <a
              key={brand.id}
              className={`cs_tab_btn${brandFilter === brand.id ? " active" : ""}`}
              data-tab={brand.id}
              role="tab"
              aria-selected={brandFilter === brand.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleBrandChange(brand.id);
              }}
            >
              {brand.label}
            </a>
          ))}
        </div>

        <div className="cs_height_30 cs_height_lg_20" />

        <div className="cs_shop_filter_wrap" />
        {filteredProducts.length === 0 ? (
          <div id="noResults" className="cs_empty" style={{ display: "block" }}>
            {t.product.empty}
          </div>
        ) : null}
        <div className="cs_height_50 cs_height_lg_40" />

        <div id="productGrid" className="row cs_row_gap_30 cs_gap_y_30">
          {currentProducts.map((product) => (
            <div className="col-lg-4 col-sm-6" key={product.id}>
              <div className="cs_product_card cs_style_1 h-100">
                <div className="cs_product_thumbnail cs_center">
                  <Link
                    href={buildHref(`/product/${product.slug ?? product.id}`)}
                    className="d-block"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={320}
                      height={220}
                      className="w-full h-auto"
                      data-cat={product.category}
                    />
                  </Link>
                </div>
                <div className="cs_product_info text-center">
                  <h2 className="cs_product_title cs_fs_20 cs_semibold">
                    <Link href={buildHref(`/product/${product.slug ?? product.id}`)}>
                      {product.name}
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cs_height_50 cs_height_lg_40" />
        {filteredProducts.length > PER_PAGE ? (
          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  aria-label={t.product.pagination.prev}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(Math.max(1, currentPage - 1));
                  }}
                  className="gap-1 px-3 sm:px-4"
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                  {/* <span className="hidden sm:inline">{t.product.pagination.prev}</span> */}
                </PaginationLink>
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNumber = idx + 1;
                const isActive = pageNumber === currentPage;
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href="#"
                      isActive={isActive}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(pageNumber);
                      }}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              <PaginationItem>
                <PaginationLink
                  href="#"
                  aria-label={t.product.pagination.next}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(Math.min(totalPages, currentPage + 1));
                  }}
                  className="gap-1 px-3 sm:px-4 pl-2"
                >
                  {/* <span className="hidden sm:inline">{t.product.pagination.next}</span> */}
                  <ChevronRightIcon className="h-4 w-4" />
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        ) : null}
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </main>
  );
}

export default function ProductPage() {
  return (
    <Suspense fallback={null}>
      <ProductPageInner />
    </Suspense>
  );
}
