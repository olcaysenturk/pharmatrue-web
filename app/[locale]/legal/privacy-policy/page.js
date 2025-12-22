import { LegalPageLayout } from "../LegalPageLayout";
import { LEGAL_CONTENT } from "../content";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }];
}

export default function PrivacyPolicyPage({ params }) {
  const locale = params?.locale === "en" ? "en" : "tr";
  const content = LEGAL_CONTENT[locale].privacyPolicy;

  return <LegalPageLayout content={content} />;
}
