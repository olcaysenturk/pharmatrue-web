"use client";

import React from "react";

type PageHeadingProps = {
  title: string;
  background?: string;
};

export function PageHeading({
  title,
  background = "/assets/images/page_heading_bg.jpg",
}: PageHeadingProps) {
  const displayTitle = title ? title.charAt(0).toUpperCase() + title.slice(1) : title;

  return (
    <section
      className="cs_page_heading cs_center cs_bg_filed"
      style={{ backgroundImage: `url('${background}')` }}
    >
      <div className="container">
        <div className="cs_page_heading_in">
          <h1 className="cs_page_heading_title cs_fs_20 cs_white_color">
            {displayTitle}
          </h1>
        </div>
      </div>
    </section>
  );
}
