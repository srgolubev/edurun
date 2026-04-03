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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Забег Московского Образования 2026",
  description:
    "Первый в истории Забег Московского Образования. Присоединяйтесь к тысячам участников школьных спортивных клубов на главном беговом событии.",
  startDate: "2026-05-17T09:00:00+03:00",
  endDate: "2026-05-17T14:00:00+03:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Садовое кольцо, парк Музеон",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Москва",
      addressCountry: "RU",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Департамент образования и науки города Москвы",
  },
  image: "https://забегмосковскогообразования.рф/og-image.jpg",
  url: "https://забегмосковскогообразования.рф",
  isAccessibleForFree: true,
  maximumAttendeeCapacity: 10000,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
