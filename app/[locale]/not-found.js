"use client";

import Link from "next/link";
import { useTranslations } from "../locales/useTranslations";

export function NotFoundPage() {
  const { locale, t } = useTranslations();
  const homeHref = locale === "en" ? "/en" : "/";
  const contactHref = locale === "en" ? "/en/contact" : "/contact";

  const title = locale === "en" ? "Sayfa bulunamadı" : "Sayfa bulunamadı";
  const description =
    locale === "en"
      ? "The page you are looking for might have been removed, renamed, or is temporarily unavailable."
      : "Aradığınız sayfa taşınmış, silinmiş ya da geçici olarak kullanılamıyor olabilir.";

  return (
    <main className="min-h-screen bg-white text-[#0f1628]">
      <div className="container py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
          <div className="rounded-full border border-[#e5e7eb] bg-[#f8fafc] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f1628]/70">
            404
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
            <p className="mx-auto max-w-2xl text-lg text-[#0f1628]/70">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href={homeHref} className="cs_btn cs_style_1 cs_fs_16 cs_semibold cs_accent_bg cs_radius_5">
              <span className="cs_btn_text">{locale === "en" ? "Back to home" : "Anasayfaya dön"}</span>
            </Link>
            <Link
              href={contactHref}
              className="rounded-md border border-[#e5e7eb] px-5 py-3 text-sm font-semibold text-[#0f1628] transition hover:border-[#0f1628] hover:bg-[#0f1628]/5"
            >
              {locale === "en" ? "Contact us" : "İletişime geç"}
            </Link>
          </div>
          <div className="mt-10 grid w-full gap-4 rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] p-6 md:grid-cols-2">
            <div className="text-left">
              <p className="text-sm uppercase tracking-wide text-[#0f1628]/60">
                {locale === "en" ? "Try these" : "Bunları deneyin"}
              </p>
              <p className="mt-2 text-[#0f1628]/80">
                {locale === "en"
                  ? "Check the URL or use search to find the content you need."
                  : "Adresin doğruluğunu kontrol edin veya aramayı kullanarak aradığınız içeriği bulun."}
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 text-sm text-[#0f1628]/80 md:justify-center">
              <span className="rounded-full border border-[#e5e7eb] bg-white px-3 py-1">
                {locale === "en" ? "Products" : "Ürünler"}
              </span>
              <span className="rounded-full border border-[#e5e7eb] bg-white px-3 py-1">
                {locale === "en" ? "Brands" : "Markalar"}
              </span>
              <span className="rounded-full border border-[#e5e7eb] bg-white px-3 py-1">
                {locale === "en" ? "Support" : "Destek"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
