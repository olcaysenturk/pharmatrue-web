"use client";

import React from "react";
import { useTranslations } from "../../locales/useTranslations";

export function Hero() {
  const { t } = useTranslations();

  return (
    <section
      className="cs_hero cs_style_1 cs_bg_filed position-relative"
      style={{ backgroundImage: "url('/assets/images/slider-1.jpg')" }}
    >
      
      <div className="container">
        <div className="cs_hero_content_wrapper">
          <div className="cs_hero_content">
            <h1 className="text-white  text-2xl md:text-6xl">{t.hero.eyebrow}</h1>
            <h2 className="text-white cs_fs_36 italic">
              {t.hero.tagline}
            </h2>
            <h3
              className="cs_hero_title text-white text-2xl md:text-6xl mt-5"
              dangerouslySetInnerHTML={{ __html: t.hero.title }}
            />
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
