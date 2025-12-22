import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeading } from "../../../components/PageHeading";
import { PRODUCTS, shapeProductForLocale } from "../data";
import { HcpNotice } from "../HcpNotice";
import { getMessages } from "../../../locales/messages";

const LOCALES = ["tr", "en"];
export const dynamicParams = false;

export function generateStaticParams() {
  const params = [];
  for (const locale of LOCALES) {
    for (const product of PRODUCTS) {
      params.push({ locale, slug: product.slug });
      if (product.legacySlug) {
        params.push({ locale, slug: product.legacySlug });
      }
    }
  }
  return params;
}

function getProduct(slugOrId) {
  return PRODUCTS.find(
    (item) =>
      item.slug === slugOrId || item.id === slugOrId || item.legacySlug === slugOrId,
  );
}

export default function ProductDetailPage({ params }) {
  const { slug, locale } = params;
  const messages = getMessages(locale);
  const productBase = getProduct(slug);
  const product = productBase ? shapeProductForLocale(productBase, locale) : null;
  const isConsumer = product?.category === "consumer";
  const kubPendingLabel = locale === "en" ? "Coming soon" : "Yakında";

  if (!product) {
    notFound();
  }

  return (
    <main>
      <PageHeading title={product.name} />
      {!isConsumer ? (
        <HcpNotice copy={messages.hcp} homeHref={locale === "en" ? "/en" : "/"} />
      ) : null}
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row gy-4 align-items-start">
          <div className="col-lg-6">
            <div className="cs_single_product_thumb">
              <div
                className="cs_single_product_thumb_item cs_radius_10"
                style={{
                  border: "1px solid #ededed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_single_product_details">
              <h2>
                {product.name ? product.name.charAt(0).toUpperCase() + product.name.slice(1) : product.name}
              </h2>

              {product.description ? (
                <div className="cs_single_product_details_text cs_mb_35">
                  <p>{product.description}</p>
                </div>
              ) : null}

              {isConsumer ? (
                <div className="cs_single_product_info cs_fs_18" style={{ marginTop: 20 }}>
                  {product.size ? (
                    <p>
                      <b>{messages.product.detail.size} </b>
                      {product.size}
                    </p>
                  ) : null}
                  {product.ctaUrl ? (
                    <p style={{ marginTop: 16 }}>
                      <a
                        href={product.ctaUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="cs_btn cs_style_1 cs_fs_16 cs_semibold cs_accent_bg cs_radius_5"
                      >
                        {messages.product.detail.learnMore}
                      </a>
                    </p>
                  ) : null}
                </div>
              ) : (
                <ul
                  className="cs_single_product_info cs_fs_18"
                  style={{ marginTop: 20 }}
                >
                  {product.activeIngredient ? (
                    <li>
                      <b>{messages.product.detail.active} </b>
                      {product.activeIngredient}
                    </li>
                  ) : null}
                  <li>
                    <b>{messages.product.detail.kub} </b>
                    {product.kubUrl ? (
                      <a href={product.kubUrl} target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-file-pdf" aria-hidden="true" /> PDF
                      </a>
                    ) : (
                      kubPendingLabel
                    )}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </main>
  );
}
