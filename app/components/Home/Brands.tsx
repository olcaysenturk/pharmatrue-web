"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useTranslations } from "../../locales/useTranslations";

import "swiper/css";
import "swiper/css/pagination";

const BRANDS = [
  { name: "B-GOOD", image: "/assets/images/b-good.png" },
  { name: "PROTEXUS", image: "/assets/images/protexus.jpg" },
  { name: "B-GOOD CARE", image: "/assets/images/care.png" },
];

export function Brands() {
  const { t } = useTranslations();

  return (
    <section className="cs_slider cs_style_1 cs_slider_gap_30">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_left">
            <h2 className="cs_section_title cs_fs_48 mb-0 font-bold text-[#060077]!">
              {t.brands.heading}
            </h2>
          </div>
        </div>
        <div className="cs_height_50 cs_height_lg_40" />
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="cs_slider_wrapper"
        >
          {BRANDS.map((brand) => (
            <SwiperSlide key={brand.name} className="cs_slide">
                <div className="cs_card cs_style_1 cs_radius_10">
                  <div className="cs_card_thumbnail cs_radius_10 relative block aspect-[3/2] overflow-hidden">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
                <div className="cs_card_bio">
                  <h3 className="cs_card_title cs_fs_24 cs_bold">
                    <a href="#">{brand.name}</a>
                  </h3>
                  <hr />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="cs_height_50 cs_height_lg_40" />
      </div>
      <style jsx global>{`
        .cs_slider .swiper-pagination-bullet {
          background: #d4d9e2;
          opacity: 1;
        }
        .cs_slider .swiper-pagination-bullet-active {
          background: var(--accent-color);
        }
        .cs_slider .swiper-pagination {
          position: relative;
          margin-top: 8px;
        }
      `}</style>
    </section>
  );
}
