export type LegalSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalPageContent = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export const LEGAL_CONTENT: Record<
  "tr" | "en",
  {
    legalNotice: LegalPageContent;
    privacyNotice: LegalPageContent;
    privacyPolicy: LegalPageContent;
    infoSociety: LegalPageContent;
  }
> = {
  tr: {
    legalNotice: {
      title: "Yasal Bilgiler",
      updated: "20.01.2025",
      intro:
        "Bu internet sitesi Pharmatrue Sağlık Malzemeleri A.Ş.’ye aittir. Siteyi kullanarak aşağıdaki yasal bilgilendirmeleri kabul etmiş sayılırsınız.",
      sections: [
        {
          title: "Site Sahibi ve İletişim",
          list: [
            "Unvan: Pharmatrue Sağlık Malzemeleri A.Ş.",
            "Adres: Yassıören Mah. Ağaçkakan Sok. No:15/A Arnavutköy / İstanbul / Türkiye",
            "Telefon: 444 8 717",
            "E-posta: info@pharmatrue.com.tr",
            "Web: www.pharmatrue.com.tr",
          ],
        },
        {
          title: "Kullanım Koşulları",
          paragraphs: [
            "Sitede yer alan bilgi ve materyaller güncel ve doğru tutulmaya çalışılsa da yalnızca genel bilgilendirme amaçlıdır. İçerikler önceden bildirim yapılmaksızın güncellenebilir veya değiştirilebilir.",
          ],
        },
        {
          title: "Tıbbi Bilgilendirme",
          paragraphs: [
            "Sitede yer alan ürün ve sağlık içerikleri, sağlık profesyonellerine destek amacı taşır ve tanı veya tedavi yerine geçmez. Kişisel sağlık kararlarınız için mutlaka hekiminize veya eczacınıza danışın.",
          ],
        },
        {
          title: "Fikri ve Sınai Haklar",
          paragraphs: [
            "Sitedeki tüm marka, logo, görsel, metin ve diğer içerikler Pharmatrue veya yetkilendirdiği hak sahiplerine aittir. Yazılı izin olmadan kopyalanamaz, çoğaltılamaz veya ticari amaçla kullanılamaz.",
          ],
        },
        {
          title: "Sorumluluk Sınırı",
          paragraphs: [
            "Siteye erişim, kullanım veya içeriklerden kaynaklanan doğrudan veya dolaylı zararlardan Pharmatrue sorumlu değildir. Üçüncü taraf sitelere verilen bağlantılar yalnızca kolaylık sağlamak içindir; içerikleri üzerinde kontrolümüz bulunmaz.",
          ],
        },
        {
          title: "Güncellemeler ve İletişim",
          paragraphs: [
            "Yasal bilgilendirmeler gerekli görüldüğünde güncellenir. Sorularınız için info@pharmatrue.com.tr adresinden bize ulaşabilirsiniz.",
          ],
        },
      ],
    },
    privacyNotice: {
      title: "Aydınlatma Metni",
      updated: "20.01.2025",
      intro:
        "6698 sayılı KVK Kanunu kapsamında, kişisel verileriniz Pharmatrue Sağlık Malzemeleri A.Ş. tarafından aşağıda belirtilen amaçlar ve hukuki sebepler doğrultusunda işlenmektedir.",
      sections: [
        {
          title: "Veri Sorumlusu ve İletişim",
          paragraphs: [
            "Veri sorumlusu: Pharmatrue Sağlık Malzemeleri A.Ş.",
            "Adres: Yassıören Mah. Ağaçkakan Sok. No:15/A Arnavutköy / İstanbul / Türkiye",
            "E-posta: info@pharmatrue.com.tr | Telefon: 444 8 717",
          ],
        },
        {
          title: "İşlenen Veri Kategorileri",
          list: [
            "Kimlik ve iletişim bilgileri (ad, soyad, e-posta, telefon)",
            "İşlem/mesaj içerikleri (iletişim formları, geri bildirimler)",
            "İnternet trafiği ve teknik veriler (çerezler, IP, cihaz bilgisi)",
          ],
        },
        {
          title: "İşleme Amaçları",
          list: [
            "Talep ve şikayetlerin yanıtlanması, iletişimin sağlanması",
            "Ürün ve hizmetler hakkında bilgilendirme ve destek",
            "Site güvenliğinin, kullanım deneyiminin ve performansının iyileştirilmesi",
            "Mevzuata uyum ve yetkili mercilere bildirim yükümlülüklerinin yerine getirilmesi",
          ],
        },
        {
          title: "Toplama Yöntemi ve Hukuki Sebep",
          paragraphs: [
            "Verileriniz; web formları, çerezler, e-posta ve benzeri dijital kanallar aracılığıyla otomatik veya kısmen otomatik yollarla toplanır.",
          ],
          list: [
            "Kanunlarda açıkça öngörülmesi ve meşru menfaatlerimizin korunması (KVKK m.5/2)",
            "Bir hakkın tesisi, kullanılması veya korunması için zorunlu olması",
            "Açık rızanızın gerektiği durumlarda açık rızanın alınması",
          ],
        },
        {
          title: "Aktarım",
          paragraphs: [
            "İşlenen veriler; destek aldığımız BT, güvenlik, hukuk ve müşteri destek sağlayıcıları ile mevzuat gereği yetkili kamu kurumları ve yargı mercilerine, gerekli güvenlik tedbirleri alınarak aktarılabilir.",
          ],
        },
        {
          title: "Haklarınız",
          list: [
            "Kişisel verilerinizin işlenip işlenmediğini öğrenme,",
            "Eksik veya yanlış işlenen verilerin düzeltilmesini isteme,",
            "İşleme amacına uygun kullanılıp kullanılmadığını öğrenme,",
            "Silme/yok etme, aktarılan üçüncü kişilere bildirilmesini talep etme,",
            "İtiraz etme ve zararın giderilmesini talep etme (KVKK m.11).",
          ],
          paragraphs: [
            "Taleplerinizi info@pharmatrue.com.tr adresine iletebilirsiniz.",
          ],
        },
      ],
    },
    privacyPolicy: {
      title: "Gizlilik Politikası",
      updated: "20.01.2025",
      intro:
        "Pharmatrue olarak gizliliğinizi önemsiyoruz. Bu politika, sitede toplanan kişisel verilerin nasıl korunduğunu ve kullanıldığını açıklar.",
      sections: [
        {
          title: "Güvenlik Tedbirleri",
          paragraphs: [
            "Verileriniz aktarım sırasında şifreleme ve erişim kontrolü gibi idari ve teknik tedbirlerle korunur. Bilgiler yalnızca görev tanımı gerektiren yetkililer tarafından erişilebilir.",
          ],
        },
        {
          title: "Çerezler",
          paragraphs: [
            "Site deneyimini geliştirmek ve anonim istatistik üretmek için zorunlu ve tercihe bağlı çerezler kullanabiliriz. Tarayıcınız üzerinden çerez tercihlerinizi yönetebilir, dilerseniz devre dışı bırakabilirsiniz.",
          ],
        },
        {
          title: "Saklama Süreleri",
          paragraphs: [
            "Kişisel veriler, işleme amacı için gerekli süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı/saklama süreleri kadar muhafaza edilir; sonrasında güvenli şekilde silinir, yok edilir veya anonimleştirilir.",
          ],
        },
        {
          title: "Üçüncü Taraf Hizmetleri",
          paragraphs: [
            "Barındırma, e-posta, analitik ve güvenlik gibi hizmetler için çalıştığımız sağlayıcılar, verilerinize yalnızca hizmet sunumu için gerekli olduğu ölçüde ve sözleşmesel güvenlik taahhütleri altında erişebilir.",
          ],
        },
        {
          title: "Güncellemeler",
          paragraphs: [
            "Gizlilik politikamız iş ihtiyaçları ve mevzuat değişikliklerine bağlı olarak güncellenebilir. Güncel sürüm bu sayfada yayımlanır.",
          ],
        },
        {
          title: "İletişim",
          paragraphs: [
            "Gizlilikle ilgili sorularınız için info@pharmatrue.com.tr adresine ulaşabilirsiniz.",
          ],
        },
      ],
    },
    infoSociety: {
      title: "Bilgi Toplumu Hizmetleri",
      updated: "20.01.2025",
      intro:
        "6102 sayılı Türk Ticaret Kanunu’nun 1524. maddesi uyarınca Pharmatrue Sağlık Malzemeleri A.Ş.’ye ilişkin temel bilgilere aşağıdan ulaşabilirsiniz.",
      sections: [
        {
          title: "Kurumsal Bilgiler",
          list: [
            "Ticaret Unvanı: Pharmatrue Sağlık Malzemeleri A.Ş.",
            "Ticaret Sicil Müdürlüğü: İstanbul",
            "MERSİS / Sicil No: Güncelleme aşamasında",
            "Merkez: Yassıören Mah. Ağaçkakan Sok. No:15/A Arnavutköy / İstanbul / Türkiye",
            "Telefon: 444 8 717",
            "E-posta: info@pharmatrue.com.tr",
            "İnternet Sitesi: www.pharmatrue.com.tr",
          ],
        },
        {
          title: "Elektronik Tebligat ve Bildirim",
          paragraphs: [
            "Şirketimize yönelik tebligat ve bildirimler için info@pharmatrue.com.tr adresini kullanabilirsiniz. Resmî bildirimler ilgili mevzuat çerçevesinde kayıt altına alınır.",
          ],
        },
        {
          title: "Yönetim ve İletişim",
          paragraphs: [
            "Genel merkezimizde mesai saatleri içinde (09:00-18:00) yazılı veya sözlü iletişim kurabilirsiniz. Talepleriniz ilgili birimlere yönlendirilir.",
          ],
        },
        {
          title: "Güncelleme",
          paragraphs: [
            "Bu sayfadaki bilgiler kurumsal değişiklikler doğrultusunda düzenli olarak güncellenir.",
          ],
        },
      ],
    },
  },
  en: {
    legalNotice: {
      title: "Legal Notice",
      updated: "20.01.2025",
      intro:
        "This website is owned by Pharmatrue Sağlık Malzemeleri A.Ş. By using the site, you accept the legal notes below.",
      sections: [
        {
          title: "Site Owner & Contact",
          list: [
            "Company: Pharmatrue Sağlık Malzemeleri A.Ş.",
            "Address: Yassıören Mah. Ağaçkakan Sok. No:15/A Arnavutköy / İstanbul / Türkiye",
            "Phone: 444 8 717",
            "E-mail: info@pharmatrue.com.tr",
            "Website: www.pharmatrue.com.tr",
          ],
        },
        {
          title: "Terms of Use",
          paragraphs: [
            "All information on this site is for general information only and may be updated or changed without prior notice.",
          ],
        },
        {
          title: "Medical Disclaimer",
          paragraphs: [
            "Product and health-related content is for healthcare professionals and does not replace medical diagnosis or treatment. Always consult your physician or pharmacist for personal health decisions.",
          ],
        },
        {
          title: "Intellectual Property",
          paragraphs: [
            "All trademarks, logos, visuals, texts and other materials belong to Pharmatrue or its licensors. They may not be copied, reproduced or used commercially without written permission.",
          ],
        },
        {
          title: "Limitation of Liability",
          paragraphs: [
            "Pharmatrue is not liable for direct or indirect damages arising from access to, use of, or reliance on the site content. Links to third-party sites are provided for convenience and are outside our control.",
          ],
        },
        {
          title: "Updates & Contact",
          paragraphs: [
            "Legal notes may be updated when necessary. For questions, contact info@pharmatrue.com.tr.",
          ],
        },
      ],
    },
    privacyNotice: {
      title: "Information Notice",
      updated: "20.01.2025",
      intro:
        "Under the Turkish Personal Data Protection Law, your personal data is processed by Pharmatrue Sağlık Malzemeleri A.Ş. for the purposes and legal bases set out below.",
      sections: [
        {
          title: "Data Controller & Contact",
          paragraphs: [
            "Data controller: Pharmatrue Sağlık Malzemeleri A.Ş.",
            "Address: Yassıören Mah. Ağaçkakan Sok. No:15/A Arnavutköy / İstanbul / Türkiye",
            "E-mail: info@pharmatrue.com.tr | Phone: 444 8 717",
          ],
        },
        {
          title: "Categories of Data",
          list: [
            "Identity and contact data (name, surname, e-mail, phone)",
            "Transaction/message content (contact forms, feedback)",
            "Internet traffic and technical data (cookies, IP, device info)",
          ],
        },
        {
          title: "Purposes of Processing",
          list: [
            "Responding to requests and providing communication",
            "Informing about products and services and providing support",
            "Improving site security, user experience and performance",
            "Fulfilling legal obligations and notifications to authorities",
          ],
        },
        {
          title: "Method & Legal Basis",
          paragraphs: [
            "Data is collected through web forms, cookies, e-mail and similar digital channels by automated or partially automated means.",
          ],
          list: [
            "Explicitly provided for by law and protection of our legitimate interests",
            "Necessity for the establishment, exercise or protection of a right",
            "Your explicit consent where required",
          ],
        },
        {
          title: "Data Sharing",
          paragraphs: [
            "Data may be shared with our IT, security, legal and customer support providers and, where legally required, with public authorities and courts, with appropriate safeguards.",
          ],
        },
        {
          title: "Your Rights",
          list: [
            "To learn whether your data is processed",
            "To request correction of incomplete or inaccurate data",
            "To learn whether data is used in line with its purpose",
            "To request deletion/destruction and notification to third parties",
            "To object and request compensation for damages",
          ],
          paragraphs: ["You can submit your requests to info@pharmatrue.com.tr."],
        },
      ],
    },
    privacyPolicy: {
      title: "Privacy Policy",
      updated: "20.01.2025",
      intro:
        "We care about your privacy. This policy explains how we protect and use personal data collected on our site.",
      sections: [
        {
          title: "Security Measures",
          paragraphs: [
            "We protect data with encryption in transit, access controls and other administrative and technical safeguards. Only authorized personnel with a business need can access it.",
          ],
        },
        {
          title: "Cookies",
          paragraphs: [
            "We may use necessary and optional cookies to improve user experience and produce anonymous statistics. You can manage or disable cookies through your browser settings.",
          ],
        },
        {
          title: "Retention",
          paragraphs: [
            "Personal data is retained only for as long as necessary for the stated purposes and for statutory limitation/retention periods, then securely deleted, destroyed or anonymized.",
          ],
        },
        {
          title: "Third-Party Services",
          paragraphs: [
            "Service providers for hosting, e-mail, analytics and security may access data only as needed to provide services and under contractual security commitments.",
          ],
        },
        {
          title: "Updates",
          paragraphs: [
            "We may update this policy due to business or legal requirements. The current version is published on this page.",
          ],
        },
        {
          title: "Contact",
          paragraphs: ["For privacy questions, contact info@pharmatrue.com.tr."],
        },
      ],
    },
    infoSociety: {
      title: "Information Society Services",
      updated: "20.01.2025",
      intro:
        "In line with Article 1524 of the Turkish Commercial Code, key corporate details of Pharmatrue Sağlık Malzemeleri A.Ş. are listed below.",
      sections: [
        {
          title: "Corporate Details",
          list: [
            "Trade Name: Pharmatrue Sağlık Malzemeleri A.Ş.",
            "Trade Registry Office: İstanbul",
            "MERSİS / Registry No: To be updated",
            "Registered Address: Yassıören Mah. Ağaçkakan Sok. No:15/A Arnavutköy / İstanbul / Türkiye",
            "Phone: 444 8 717",
            "E-mail: info@pharmatrue.com.tr",
            "Website: www.pharmatrue.com.tr",
          ],
        },
        {
          title: "Electronic Notices",
          paragraphs: [
            "For official notices and communications, please use info@pharmatrue.com.tr. Formal notifications are recorded in line with applicable legislation.",
          ],
        },
        {
          title: "Management & Contact",
          paragraphs: [
            "You may reach our head office during business hours (09:00-18:00). Requests are routed to the relevant teams.",
          ],
        },
        {
          title: "Updates",
          paragraphs: [
            "Information on this page is reviewed regularly and updated as corporate details change.",
          ],
        },
      ],
    },
  },
};
