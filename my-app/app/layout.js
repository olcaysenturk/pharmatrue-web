import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Script from 'next/script';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pharmatrue",
  description: "Pharmatrue resmi sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="cs_site_header cs_style_1 cs_sticky_header cs_heading_font">
          <div className="cs_main_header">
            <div className="container-fluid">
              <div className="cs_main_header_in">
                <div className="cs_main_header_left">
                  <Link className="cs_site_branding" href="/">
                    {/* Logo dosyanızı public/img altında tutun */}
                    <Image src="/img/logo.png" alt="Logo" width={120} height={32} />
                  </Link>
                  <nav className="cs_nav cs_fs_18 cs_semibold">
                    <div className="cs_nav_list_wrap">
                      <ul className="cs_nav_list">
                        <li className="cs_mega_menu">
                          <Link href="/about">KURUMSAL</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="/shop">ÜRÜNLER</Link>
                          <ul>
                            <li>
                              <Link href="/shop#cat=consumer" data-cat-link="consumer">Tüketici Sağlığı</Link>
                            </li>
                            <li>
                              <Link href="/shop#cat=device" data-cat-link="device">Tıbbi Cihaz Ürünleri</Link>
                            </li>
                            <li>
                              <Link href="/shop#cat=rx" data-cat-link="rx">Reçeteli Ürünler</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/contact">İLETİŞİM</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="cs_main_header_right"></div>
              </div>
            </div>
          </div>
        </header>


        {children}

        <footer className="cs_footer cs_style_1 cs_heading_bg">
          <div className="container cs_white_color">
            <div className="cs_footer_row">
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <div className="cs_footer_text_widget">
                    <Image src="/img/logo.png" alt="Logo" width={120} height={30} />
                  </div>
                  <div className="cs_social_btns cs_style_1">
                    <a href="#" className="cs_center">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className="cs_center">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#" className="cs_center">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" className="cs_center">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_32 cs_white_color cs_bold">Hızlı Erişim</h2>
                  <ul className="cs_footer_widget_menu">
                    <li><Link href="/about">Kurumsal</Link></li>
                    <li><Link href="/shop">Ürünler</Link></li>
                    <li><Link href="/contact">İletişim</Link></li>
                  </ul>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_32 cs_white_color cs_bold">Yasal</h2>
                  <ul className="cs_footer_widget_menu">
                    <li><a href="#">Aydınlatma Metni</a></li>
                    <li><a href="#">Gizlilik Bildirimi</a></li>
                    <li><a href="#">Bilgi Toplumu Hizmetleri</a></li>
                  </ul>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_32 cs_white_color cs_bold">Ofis</h2>
                  <ul className="cs_footer_widget_menu cs_address">
                    <li>Merkez Yassıören Mah. Ağaçkakan Sok. No:15/A Arnavutköy / İstanbul / Türkiye</li>
                    <li className="cs_fs_32 cs_bold cs_phone_number">
                      <div className="cs_height_20 cs_height_lg_20"></div>
                      <a href="tel:+444547800112">444 8 717</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_footer_bottom cs_white_color">
            <div className="container">
              <div className="cs_footer_bottom_in">
                <p className="cs_copyright mb-0">Pharmatrue 2025. Tüm hakları saklıdır.</p>
                <p style={{ color: "red" }}>
                  Bu sitede yer alan bilgiler, hekim ve eczacıya danışmanın yerine geçmez.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
