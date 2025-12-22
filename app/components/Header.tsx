"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Menu, Search, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import { LocaleSwitcher } from "./LocaleSwitcher";
import { useTranslations } from "../locales/useTranslations";
import { PRODUCTS, shapeProductForLocale } from "../[locale]/product/data";

const MAX_SEARCH_RESULTS = 8;

export function Header() {
  const { locale, t } = useTranslations();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const localePrefix = locale === "en" ? "/en" : "/tr";
  const buildHref = (path: string) => {
    if (path.startsWith("http")) return path;
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${localePrefix}${normalized}`;
  };
  const localizedProducts = useMemo(
    () => PRODUCTS.map((product) => shapeProductForLocale(product, locale)),
    [locale],
  );
  const searchResults = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    const base =
      term.length === 0
        ? localizedProducts
        : localizedProducts.filter(
            (product) =>
              product.name.toLowerCase().includes(term) ||
              (product.description || "").toLowerCase().includes(term),
          );
    return base.slice(0, MAX_SEARCH_RESULTS);
  }, [localizedProducts, searchTerm]);

  const links = useMemo(
    () => ({
      home: buildHref(""),
      about: buildHref("/about"),
      product: buildHref("/product"),
      contact: buildHref("/contact"),
      brand: {
        bgood: `${buildHref("/product")}#cat=consumer&brand=bgood`,
        protexus: `${buildHref("/product")}#cat=consumer&brand=protexus`,
      },
    }),
    [buildHref],
  );

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = searchTerm.trim();
    const destination =
      trimmed.length > 0
        ? `${links.product}?search=${encodeURIComponent(trimmed)}`
        : links.product;
    router.push(destination);
    setIsSearchOpen(false);
  };

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSearch();
        closeMenu();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (isSearchOpen || isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen, isSearchOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky w-full top-0 z-40 backdrop-blur -mb-[65px] transition-colors ${
          isScrolled ? "bg-[#132573]/90 shadow-lg active" : "bg-transparent"
        }`}
      >
        <div className="container-fluid">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-4 justify-between lg:justify-around w-full">
              <Link className="flex-shrink-0" href={links.home} aria-label="Pharmatrue">
                <Image src="/assets/images/logo.png" alt="Logo" width={158} height={40} priority />
              </Link>
              <div className="hidden flex-1 items-center ml-7 gap-2 text-white lg:flex">
                <NavigationMenu className="flex-1 justify-start" viewport={false}>
                  <NavigationMenuList className="gap-4">
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={`${navigationMenuTriggerStyle()} bg-transparent px-0 text-base font-semibold text-white hover:bg-transparent hover:text-white/70 focus:bg-transparent focus:text-white`}
                      >
                        <Link href={links.about}>{t.header.nav.about}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="gap-2 bg-transparent px-0 text-base font-semibold text-white hover:bg-transparent hover:text-white/70 focus:bg-transparent focus:text-white">
                        {t.header.nav.products}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="absolute left-0 top-full z-50 mt-3 bg-white shadow-md md:w-[340px]">
                        <div className="grid gap-1 p-2">
                          <NavigationMenuLink asChild>
                            <Link
                              className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-gray-50"
                              href={`${links.product}#cat=consumer`}
                            >
                              {t.header.nav.consumer}
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-gray-50"
                              href={`${links.product}#cat=rx`}
                            >
                              {t.header.nav.rx}
                            </Link>
                          </NavigationMenuLink>
                          <div className="mt-1 border-t pt-2 text-xs font-semibold uppercase text-gray-500">
                            {t.header.nav.brandsTitle}
                          </div>
                          <NavigationMenuLink asChild>
                            <Link
                              className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-gray-50"
                              href={links.brand.bgood}
                            >
                              {t.header.nav.brands.bgood}
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-gray-50"
                              href={links.brand.protexus}
                            >
                              {t.header.nav.brands.protexus}
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={`${navigationMenuTriggerStyle()} bg-transparent px-0 text-base font-semibold text-white hover:bg-transparent hover:text-white/70 focus:bg-transparent focus:text-white`}
                      >
                        <Link href={links.contact}>{t.header.nav.contact}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            <div className="flex items-center gap-2">
              <div className="hidden lg:block">
                <LocaleSwitcher />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="hidden lg:inline-flex bg-transparent text-white hover:bg-transparent focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none"
                aria-label={t.header.searchAria}
                onClick={openSearch}
              >
                <Search className="size-5 text-white" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="lg:hidden bg-transparent text-white hover:bg-transparent focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none"
                aria-label="Open menu"
                onClick={openMenu}
              >
                <Menu className="size-6 text-white" />
              </Button>
            </div>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/60" onClick={closeMenu} />
          <div
            className="relative w-full text-white shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(15,22,40,1) 0%, rgba(27,36,62,1) 50%, rgba(12,16,28,0.98) 100%)",
            }}
          >
            <div className="mx-auto flex max-w-xl flex-col gap-5 px-5 py-5">
              <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <Link href={links.home} onClick={closeMenu} aria-label="Pharmatrue">
                  <Image src="/assets/images/logo.png" alt="Logo" width={140} height={36} />
                </Link>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Close menu"
                  onClick={closeMenu}
                  className="bg-transparent hover:bg-white/10 focus:bg-transparent focus-visible:ring-0 focus-visible:outline-none"
                >
                  <X className="size-5 text-white" />
                </Button>
              </div>

              <button
                type="button"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left shadow-sm transition hover:border-white/30"
                onClick={() => {
                  closeMenu();
                  openSearch();
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-white/10">
                    <Search className="size-5 text-white" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-white/70">{t.header.searchAria}</div>
                    <div className="text-base font-semibold text-white">{t.header.searchPlaceholder}</div>
                  </div>
                </div>
                <span className="text-white/70">↵</span>
              </button>

              <nav className="flex flex-col gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5">
                  <Link
                    className="flex items-center justify-between px-4 py-3 text-base font-semibold hover:bg-white/10"
                    href={links.about}
                    onClick={closeMenu}
                  >
                    {t.header.nav.about}
                    <span aria-hidden className="text-white/60">→</span>
                  </Link>
                  <div className="border-t border-white/5 px-4 py-3">
                    <div className="text-xs font-semibold uppercase text-white/50">{t.header.nav.products}</div>
                    <div className="mt-2 flex flex-col">
                      <Link
                        className="flex items-center justify-between py-2 text-base font-semibold hover:text-white/80"
                        href={`${links.product}#cat=consumer`}
                        onClick={closeMenu}
                      >
                        {t.header.nav.consumer}
                        <span aria-hidden className="text-white/60">→</span>
                      </Link>
                      <Link
                        className="flex items-center justify-between py-2 text-base font-semibold hover:text-white/80"
                        href={`${links.product}#cat=rx`}
                        onClick={closeMenu}
                      >
                        {t.header.nav.rx}
                        <span aria-hidden className="text-white/60">→</span>
                      </Link>
                    </div>
                    <div className="mt-3 border-t border-white/10 pt-3 text-xs font-semibold uppercase text-white/50">
                      {t.header.nav.brandsTitle}
                    </div>
                    <div className="flex flex-col">
                      <Link
                        className="flex items-center justify-between py-2 text-base font-semibold hover:text-white/80"
                        href={links.brand.bgood}
                        onClick={closeMenu}
                      >
                        {t.header.nav.brands.bgood}
                        <span aria-hidden className="text-white/60">→</span>
                      </Link>
                      <Link
                        className="flex items-center justify-between py-2 text-base font-semibold hover:text-white/80"
                        href={links.brand.protexus}
                        onClick={closeMenu}
                      >
                        {t.header.nav.brands.protexus}
                        <span aria-hidden className="text-white/60">→</span>
                      </Link>
                    </div>
                  </div>
                  <Link
                    className="flex items-center justify-between px-4 py-3 text-base font-semibold hover:bg-white/10"
                    href={links.contact}
                    onClick={closeMenu}
                  >
                    {t.header.nav.contact}
                    <span aria-hidden className="text-white/60">→</span>
                  </Link>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="mb-2 text-xs font-semibold uppercase text-white/50">Dil / Language</div>
                  <LocaleSwitcher />
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}

      <div className={`cs_modal_search cs_center${isSearchOpen ? " active" : ""}`}>
        <div className="cs_search_overlay cs_header_overlay" onClick={closeSearch} />
        <form action="#" className="cs_modal_search_form" onSubmit={handleSearchSubmit}>
          <button
            className="cs_search_close"
            type="button"
            aria-label={t.header.searchClose}
            onClick={closeSearch}
            style={{ color: "#000" }}
          >
            ×
          </button>
          <input
            type="text"
            placeholder={t.header.searchPlaceholder}
            className="cs_fs_32 cs_modal_search_input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="d-flex justify-content-end mt-3">
            <button type="submit" className="cs_btn cs_style_1 cs_fs_16 cs_semibold cs_accent_bg cs_radius_5">
              <span className="cs_btn_text">{t.header.searchAria}</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
