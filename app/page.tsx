import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Distances from "@/components/Distances";
import Program from "@/components/Program";
import HowToParticipate from "@/components/HowToParticipate";
import Ambassadors from "@/components/Ambassadors";
import Merch from "@/components/Merch";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const SITE_URL = "https://zabegmosobr.ru";

const jsonLdSchemas = [
  // Event schema
  {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Забег Московского Образования 2026",
    description:
      "Первый в истории Забег Московского Образования. Грандиозный забег школьных спортивных клубов — 10 000 участников на Садовом кольце.",
    startDate: "2026-05-17T09:00:00+03:00",
    endDate: "2026-05-17T14:00:00+03:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Парк искусств «Музеон», Садовое кольцо",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Крымский Вал, 2",
        addressLocality: "Москва",
        addressRegion: "Москва",
        postalCode: "119049",
        addressCountry: "RU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 55.7352,
        longitude: 37.6068,
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Департамент образования и науки города Москвы",
      url: "https://www.mos.ru/donm/",
    },
    performer: [
      { "@type": "Person", name: "Никита Нагорный", description: "Олимпийский чемпион по спортивной гимнастике" },
      { "@type": "Person", name: "Евгения Медведева", description: "Двукратная чемпионка мира по фигурному катанию" },
      { "@type": "Person", name: "Алан Дзагоев", description: "Российский футболист, заслуженный мастер спорта" },
      { "@type": "Person", name: "Роман Костомаров", description: "Олимпийский чемпион по фигурному катанию" },
      { "@type": "Person", name: "Никита Крюков", description: "Олимпийский чемпион по лыжным гонкам" },
      { "@type": "Person", name: "Алексей Смертин", description: "Обладатель Кубка России по футболу" },
      { "@type": "Person", name: "Василий Артемьев", description: "Профессиональный регбист, телеведущий" },
      { "@type": "Person", name: "Дмитрий Неделин", description: "Чемпион России по марафону" },
      { "@type": "Person", name: "Анастасия Тукмачева", description: "Спортивный блогер, триатлет" },
      { "@type": "Person", name: "Александр Степанов", description: "Рэп-исполнитель, автор Гимна школьного спорта" },
    ],
    image: `${SITE_URL}/og-image.jpg`,
    url: SITE_URL,
    isAccessibleForFree: true,
    maximumAttendeeCapacity: 10000,
    sport: "Running",
    inLanguage: "ru",
    typicalAgeRange: "6-",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      url: SITE_URL,
    },
    subEvent: [
      { "@type": "SportsEvent", name: "Забег 1 КМ", description: "Дети до 10 лет и семейный забег", maximumAttendeeCapacity: 1000, url: `${SITE_URL}#distance-1km` },
      { "@type": "SportsEvent", name: "Забег 3 КМ", description: "Подростки 11–14 лет", maximumAttendeeCapacity: 3000, url: `${SITE_URL}#distance-3km` },
      { "@type": "SportsEvent", name: "Забег 5 КМ", description: "Без возрастных ограничений", maximumAttendeeCapacity: 4000, url: `${SITE_URL}#distance-5km` },
      { "@type": "SportsEvent", name: "Забег 10 КМ", description: "Без возрастных ограничений", maximumAttendeeCapacity: 2000, url: `${SITE_URL}#distance-10km` },
    ],
    potentialAction: {
      "@type": "RegisterAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: SITE_URL,
        actionPlatform: "https://schema.org/DesktopWebPlatform",
      },
    },
  },
  // Organization schema
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Московское образование",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-main/mosobr.png`,
    sameAs: ["https://vk.com/mcvp_schsport"],
  },
  // WebPage schema
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Забег Московского Образования 2026",
    description: "Официальный сайт первого в истории Забега Московского Образования. 17 мая 2026 года, Садовое кольцо.",
    url: SITE_URL,
    inLanguage: "ru",
    isPartOf: {
      "@type": "WebSite",
      name: "Забег Московского Образования",
      url: SITE_URL,
    },
  },
  // BreadcrumbList
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: SITE_URL,
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      {jsonLdSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />
      <main>
        <Hero />
        <Stats />
        <Distances />
        <Program />
        <HowToParticipate />
        <Ambassadors />
        <Merch />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
