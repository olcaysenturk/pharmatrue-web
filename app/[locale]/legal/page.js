import { LegalPageLayout } from "./LegalPageLayout";
import { LEGAL_CONTENT } from "./content";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }];
}

export default function LegalNoticePage({ params }) {
  const locale = params?.locale === "en" ? "en" : "tr";
  const content = LEGAL_CONTENT[locale].legalNotice;

  return <LegalPageLayout content={content} />;
}
