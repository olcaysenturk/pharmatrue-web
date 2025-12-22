"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "../locales/useTranslations";

export function ScrollUpButton() {
  const [show, setShow] = useState(false);
  const { t } = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <span
      className={`cs_scrollup${show ? " cs_scrollup_show" : ""}`}
      onClick={handleClick}
      role="button"
      aria-label={t.common.scrollTop}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleClick();
        }
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
