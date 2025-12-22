"use client";

import React from "react";
import { PageHeading } from "../../components/PageHeading";
import { useTranslations } from "../../locales/useTranslations";

export default function AboutPage() {
  const { t } = useTranslations();
  const about = t.about.sections;

  return (
    <main>
      <PageHeading title={t.about.pageTitle} />
      <div className="cs_height_60 cs_height_lg_60" />
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-4">
            <nav className="cs_sticky_nav" aria-label="İçindekiler">
              <ul className="cs_toc">
                {t.about.toc.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-8">
            <div className="cs_service_details">
              <h3 id="h-hakkimizda" className="section-anchor">
                {about.aboutTitle}
              </h3>
              {about.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <h3 id="h-misyon-2" className="section-anchor">
                {about.missionTitle}
              </h3>
              <p>{about.missionBody}</p>

              <h3 id="h-vizyon" className="section-anchor">
                {about.visionTitle}
              </h3>
              <p>{about.visionBody}</p>

              <h3 id="h-kalite" className="section-anchor">
                {about.qualityTitle}
              </h3>
              <p>{about.qualityBody}</p>

              <h3 id="h-prensipler" className="section-anchor">
                {about.principlesTitle}
              </h3>
              {about.principlesParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <h3 id="h-gelecek" className="section-anchor">
                {about.futureTitle}
              </h3>
              {about.futureParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </main>
  );
}
