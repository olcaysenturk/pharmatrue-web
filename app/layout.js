import "./globals.css";
import { CsPreloader } from "./components/CsPreloader";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollUpButton } from "./components/ScrollUpButton";
import { messages } from "./locales/messages";


export const metadata = {
  title: messages.tr.metadata.title,
  description: messages.tr.metadata.description,
  alternates: {
    languages: {
      tr: "/",
      en: "/en",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={messages.tr.locale}>
      <body>
        <CsPreloader />
        <Header />
        {children}
        <Footer />
        <ScrollUpButton />
      </body>
    </html>
  );
}
