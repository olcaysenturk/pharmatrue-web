"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "../../locales/useTranslations";

const HIGHLIGHT_ICONS = [
  "/assets/images/icons/department_icon_1.svg",
  "/assets/images/icons/department_icon_5.svg",
  "/assets/images/icons/department_icon_7.svg",
];

export function WhyPharmatrue() {
  const { t } = useTranslations();
  const highlights = t.why.highlights.map((item, index) => ({
    ...item,
    icon: HIGHLIGHT_ICONS[index],
  }));

  return (
    <section id="about" className="cs_department cs_style_1">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="cs_section_heading cs_style_1 cs_text_center">
          <p className="cs_section_subtitle cs_accent_color cs_fs_18 cs_semibold cs_heading_font">
            {t.why.subtitle}
          </p>
          <h2 className="cs_section_title cs_fs_48 mb-0">
            {t.why.title}
          </h2>
          {t.why.body ? (
            <p className="mt-3 text-center" style={{ maxWidth: 820, marginInline: "auto" }}>
              {t.why.body}
            </p>
          ) : null}
        </div>
        <div className="cs_height_50 cs_height_lg_40" />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
          {highlights.map((item) => (
            <a
              key={item.title}
              href="#"
              className="cs_iconbox cs_style_1 cs_radius_10 position-relative w-full"
            >
              <div className="cs_iconbox_header">
                <div className="cs_iconbox_icon cs_center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={70}
                    height={70}
                  />
                </div>
                <h3 className="cs_iconbox_title cs_fs_20 cs_bold mb-0">
                  {item.title}
                  <br />
                </h3>
              </div>
              <div className="cs_iconbox_shape position-absolute" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
