import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Забег Московского Образования 2026",
  description:
    "Первый в истории Забег Московского Образования. 17 мая 2026 года. Садовое кольцо. 10 000 участников.",
  keywords:
    "забег, москва, образование, бег, спорт, 2026, садовое кольцо, школьные спортивные клубы",
  alternates: {
    canonical: "https://забегмосковскогообразования.рф",
  },
  openGraph: {
    title: "Забег Московского Образования 2026",
    description:
      "Первый в истории Забег Московского Образования. 17 мая 2026 года. Садовое кольцо. 10 000 участников.",
    url: "https://забегмосковскогообразования.рф",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://забегмосковскогообразования.рф/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Забег Московского Образования 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Забег Московского Образования 2026",
    description:
      "Первый в истории Забег Московского Образования. 17 мая 2026 года. Садовое кольцо.",
    images: ["https://забегмосковскогообразования.рф/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="relative min-h-full flex flex-col bg-bg">
        {children}
      </body>
    </html>
  );
}
