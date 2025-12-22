import { getMessages } from "../locales/messages";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const localeMessages = getMessages(resolvedParams?.locale);
  return {
    title: localeMessages.metadata.title,
    description: localeMessages.metadata.description,
    alternates: {
      languages: {
        tr: "/",
        en: "/en",
      },
    },
  };
}

export default function LocaleLayout({ children }) {
  return <>{children}</>;
}
