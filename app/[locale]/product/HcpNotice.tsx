"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export function HcpNotice({ copy, homeHref = "/" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(true);
      document.body.classList.add("overflow-hidden");
    }, 300);
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const close = () => {
    setOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const handleAccept = () => {
    close();
  };

  if (!open) {
    return null;
  }

  return (
    <div className="cs_modal_notice open" id="hcpNotice" aria-hidden={!open}>
      <div className="cs_modal_overlay" onClick={close} />
      <div
        className="cs_modal_box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hcpTitle"
        aria-describedby="hcpDesc"
      >
        <button className="cs_modal_close" aria-label={copy.close} onClick={close}>
          &times;
        </button>
        <h3 id="hcpTitle" className="cs_modal_title">
          {copy.title}
        </h3>
        <p id="hcpDesc" className="cs_modal_desc">
          {copy.body}
        </p>
        <div className="cs_modal_actions">
          <Link href={homeHref} className="btn btn-outline-secondary">
            {copy.backHome}
          </Link>
          <button className="btn btn-primary" id="btnHcpAccept" onClick={handleAccept}>
            {copy.continue}
          </button>
        </div>
      </div>
    </div>
  );
}
