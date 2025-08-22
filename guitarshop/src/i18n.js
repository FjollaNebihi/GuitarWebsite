import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hero_title: "Browse top quality <1>Guitars</1> online",
      hero_subtitle: "Explore 50k+ latest collections of branded guitars online with VibeStrings.",
      section_title: "Featuring the <1>Best Brands</1>",
      section_subtitle: "Select your preferred brand and explore our exquisite collection.",
      why_try_title: "Why try <1>VibeStrings?</1>",
      service_smooth_browsing: "SMOOTH BROWSING",
      service_easy_delivery: "EASY DELIVERY",
      service_swift_payments: "SWIFT PAYMENTS",
      service_placeholder: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      mobile_app_title: "Browse and buy your <1>favorite guitars</1> with VibeStrings.",
      download_google: "Get it on <br /> Google Play",
      download_apple: "Download on the app store",
      pages: "PAGES",
      store: "Store",
      collections: "Collections",
      support: "Support",
      product: "PRODUCT",
      terms: "Terms",
      privacy_policy: "Privacy Policy",
      copyright: "Copyright",
      follow_us: "FOLLOW US",
      email: "Enquiry@VibeStrings.com",
      location: "San Francisco",
      copyright_text: "© 2022 Copyright.VibeStrings",
      language_en: "English",
      language_mk: "Macedonian",
      language_sq: "Albanian"
    }
  },
  mk: {
    translation: {
      hero_title: "Пребарајте ги најквалитетните <1>Гитари</1> онлајн",
      hero_subtitle: "Истражете 50k+ најнови колекции на брендирани гитари онлајн со VibeStrings.",
      section_title: "Со <1>најдобрите брендови</1>",
      section_subtitle: "Изберете го вашиот омилен бренд и истражете ја нашата извонредна колекција.",
      why_try_title: "Зошто да пробате <1>VibeStrings?</1>",
      service_smooth_browsing: "ЛЕСНО ПРЕБАРУВАЊЕ",
      service_easy_delivery: "ЛЕСНА ДОСТАВА",
      service_swift_payments: "БРЗО ПЛАЌАЊЕ",
      service_placeholder: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      mobile_app_title: "Прелистајте и купувајте ги вашите <1>омилени гитари</1> со VibeStrings.",
      download_google: "Преземете на <br /> Google Play",
      download_apple: "Преземете од App Store",
      pages: "СТРАНИЦИ",
      store: "Продавница",
      collections: "Колекции",
      support: "Поддршка",
      product: "ПРОИЗВОД",
      terms: "Услови",
      privacy_policy: "Политика за приватност",
      copyright: "Авторски права",
      follow_us: "СЛЕДЕТЕ НЕ",
      email: "Enquiry@VibeStrings.com",
      location: "Сан Франциско",
      copyright_text: "© 2022 Авторски права.VibeStrings",
      language_en: "Англиски",
      language_mk: "Македонски",
      language_sq: "Албански"
    }
  },
  sq: {
    translation: {
      hero_title: "Shfletoni <1>Gitarat</1> me cilësi të lartë në internet",
      hero_subtitle: "Eksploroni 50k+ koleksione të reja të kitarave të markave në internet me VibeStrings.",
      section_title: "Me <1>Markat më të mira</1>",
      section_subtitle: "Zgjidhni markën tuaj të preferuar dhe eksploroni koleksionin tonë të hollë.",
      why_try_title: "Pse të provoni <1>VibeStrings?</1>",
      service_smooth_browsing: "SHFLETIM I BUTË",
      service_easy_delivery: "DËRGIM I LEHTË",
      service_swift_payments: "PAGESA TË SHPEJTA",
      service_placeholder: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
      mobile_app_title: "Shfletoni dhe blini <1>kitarat tuaja të preferuara</1> me VibeStrings.",
      download_google: "Merrni në <br /> Google Play",
      download_apple: "Shkarkoni në App Store",
      pages: "FAQE",
      store: "Dyqan",
      collections: "Koleksione",
      support: "Mbështetje",
      product: "PRODUKT",
      terms: "Kushtet",
      privacy_policy: "Politika e Privatësisë",
      copyright: "E drejta e autorit",
      follow_us: "NA NDIQNI",
      email: "Enquiry@VibeStrings.com",
      location: "San Francisco",
      copyright_text: "© 2022 E drejta e autorit.VibeStrings",
      language_en: "Anglisht",
      language_mk: "Maqedonisht",
      language_sq: "Shqip"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already protects from xss
    }
  });

export default i18n;
