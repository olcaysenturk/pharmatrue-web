"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { useTranslations } from "../locales/useTranslations";

export function Footer() {
  const { locale, t } = useTranslations();

  const localePrefix = locale === "en" ? "/en" : "/tr";

  const links = useMemo(
    () => ({
      about: `${localePrefix}/about`,
      product: `${localePrefix}/product`,
      contact: `${localePrefix}/contact`,
      legal: `${localePrefix}/legal`,
      privacyNotice: `${localePrefix}/legal/information-notice`,
      privacyPolicy: `${localePrefix}/legal/privacy-policy`,
      infoSociety: `${localePrefix}/legal/info-society-services`,
    }),
    [localePrefix],
  );

  return (
    <footer className="cs_footer cs_style_1 cs_heading_bg">
      <div className="container cs_white_color">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <div className="cs_footer_text_widget">
                <Image
                  src="/assets/images/logo.png"
                  alt="Pharmatrue"
                  width={158}
                  height={30}
                  priority
                />
              </div>
              <div className="cs_social_btns cs_style_1">
                <a href="#" className="cs_center" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title cs_fs_32 cs_white_color cs_bold">
                {t.footer.quickLinks}
              </h2>
              <ul className="cs_footer_widget_menu">
                <li>
                  <Link href={links.about}>{t.footer.corporate}</Link>
                </li>
                <li>
                  <Link href={links.product}>{t.footer.products}</Link>
                </li>
                <li>
                  <Link href={links.contact}>{t.footer.contact}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title cs_fs_32 cs_white_color cs_bold">
                {t.footer.legal}
              </h2>
              <ul className="cs_footer_widget_menu">
                <li>
                  <Link href={links.legal}>{t.footer.legal}</Link>
                </li>
                <li>
                  <Link href={links.privacyNotice}>{t.footer.disclosure}</Link>
                </li>
                <li>
                  <Link href={links.privacyPolicy}>{t.footer.privacyPolicy}</Link>
                </li>
                <li>
                  <Link href={links.infoSociety}>{t.footer.infoSociety}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title cs_fs_32 cs_white_color cs_bold">
                {t.footer.office}
              </h2>
              <ul className="cs_footer_widget_menu cs_address">
                <li>
                  {t.footer.address}
                </li>
                <li className="cs_fs_32 cs_bold cs_phone_number">
                  <div className="cs_height_20 cs_height_lg_20" />
                  <a href="tel:+444547800112">{t.footer.phoneLabel}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_white_color">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <p className="cs_copyright mb-0">{t.footer.copyright}</p>
            <p style={{ color: "red" }}>{t.footer.disclaimer}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
