"use client";

import React from "react";
import { useTranslations } from "../../locales/useTranslations";

export function Hero() {
  const { t } = useTranslations();

  return (
    <section
      className="cs_hero cs_style_1 cs_bg_filed position-relative"
      style={{ backgroundImage: "url('/assets/images/hero_bg_1.jpeg')" }}
    >
      <div className="cs_hero_overlay position-absolute" />
      <div className="container">
        <div className="cs_hero_content_wrapper">
        <div className="cs_hero_content">
          <h3 className="cs_hero_title_mini cs_fs_18 cs_white_color cs_semibold">
            {t.hero.eyebrow}
          </h3>
          <h1 className="cs_hero_title cs_fs_48 cs_white_color">
            {t.hero.title}
          </h1>
          {t.hero.body ? (
            <p className="cs_white_color cs_fs_18 cs_mt_20" style={{ maxWidth: 640 }}>
              {t.hero.body}
            </p>
          ) : null}
        </div>
      </div>
      </div>

      <a
        href="#about"
        className="cs_scroll_more_btn cs_fs_20 cs_white_color cs_medium position-absolute"
      >
        <span className="cs_scroll_more_btn_in">
          <i className="fa-solid fa-arrow-left-long" /> {t.hero.cta}
        </span>
      </a>
    </section>
  );
}
