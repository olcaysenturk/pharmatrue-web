"use client";

import React, { useState } from "react";
import { PageHeading } from "../../components/PageHeading";
import { useTranslations } from "../../locales/useTranslations";

export default function ContactPage() {
  const { t, locale } = useTranslations();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (key) => (e) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) return;
    const subject = "İletişim Talebi";
    const body = `Ad Soyad: ${name}\nE-posta: ${email}\nMesaj: ${message}`;
    const mailto = `mailto:info@pharmatrue.com.tr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const nameLabel = locale === "en" ? "Full Name*" : "Ad Soyad*";

  return (
    <main>
      <PageHeading title={t.contact.pageTitle} />
      <section className="py-5 py-md-6" style={{ background: "#f6f7fb" }}>
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-6">
              <div className="p-4 p-md-5 rounded-4 shadow-sm bg-white">
                <div className="mb-4">
                  <h2 className="mb-2 cs_fs_36">{t.contact.formTitle}</h2>
                  <p className="mb-0 text-muted">{t.contact.formSubtitle}</p>
                </div>
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-12">
                    <label className="form-label small text-muted mb-1">{nameLabel}</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder={nameLabel}
                      value={formData.name}
                      onChange={handleChange("name")}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small text-muted mb-1">{t.contact.placeholders.email}</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder={t.contact.placeholders.email}
                      value={formData.email}
                      onChange={handleChange("email")}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small text-muted mb-1">{t.contact.placeholders.message}</label>
                    <textarea
                      name="message"
                      rows={5}
                      className="form-control"
                      placeholder={t.contact.placeholders.message}
                      value={formData.message}
                      onChange={handleChange("message")}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="cs_btn cs_style_1 cs_fs_18 cs_semibold cs_accent_bg cs_radius_5 w-100"
                    >
                      <span className="cs_btn_text">{t.contact.submit}</span>
                      <span className="cs_btn_text">
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4 p-md-5 rounded-4 shadow-sm bg-white d-flex flex-column gap-4">
                <div>
                  <h2 className="mb-2 cs_fs_36">{t.contact.needHelpTitle}</h2>
                  <p className="mb-0 text-muted">{t.contact.needHelpSubtitle}</p>
                </div>
                <div className="d-flex flex-column gap-3">
                  <a
                    href="tel:+4448717"
                    className="d-flex align-items-center gap-3 text-decoration-none py-3 px-3 rounded-3 border"
                    style={{ borderColor: "#e9ecef" }}
                  >
                    <span className="cs_iconbox_icon cs_center cs_radius_50 cs_accent_bg cs_white_color" style={{ width: 44, height: 44 }}>
                      <i className="fa-solid fa-phone" />
                    </span>
                    <div>
                      <div className="fw-semibold">{t.contact.phone}</div>
                      <div className="small text-muted">{t.contact.hoursNote}</div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@pharmatrue.com.tr"
                    className="d-flex align-items-center gap-3 text-decoration-none py-3 px-3 rounded-3 border"
                    style={{ borderColor: "#e9ecef" }}
                  >
                    <span className="cs_iconbox_icon cs_center cs_radius_50 cs_accent_bg cs_white_color" style={{ width: 44, height: 44 }}>
                      <i className="fa-regular fa-envelope" />
                    </span>
                    <div>
                      <div className="fw-semibold">{t.contact.email}</div>
                      <div className="small text-muted">{t.contact.emailNote}</div>
                    </div>
                  </a>
                  <div
                    className="d-flex align-items-start gap-3 py-3 px-3 rounded-3 border"
                    style={{ borderColor: "#e9ecef" }}
                  >
                    <span className="cs_iconbox_icon cs_center cs_radius_50 cs_accent_bg cs_white_color" style={{ width: 44, height: 44 }}>
                      <i className="fa-solid fa-location-dot" />
                    </span>
                    <div>
                      <div className="fw-semibold mb-1">{t.contact.addressLabel}</div>
                      <div className="text-muted">{t.contact.address}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 py-md-5" style={{ background: "#f6f7fb" }}>
        <div className="container">
          <div className="rounded-4 overflow-hidden border" style={{ borderColor: "#e9ecef" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.0146944755415!2d28.92327287616271!3d41.00305157135129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbb69294a39f%3A0xba10e707ee923bf8!2zWWFzc8Sxw7ZyZW4gTWFoLCBBxJ9hw6drYWthbiBTay4gTm86MTUvQSwgMzQxMDcgQXJuYXZ1dGvDtnkvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1760911504693!5m2!1str!2str"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pharmatrue lokasyon haritası"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
