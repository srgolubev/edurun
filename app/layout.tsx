import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://zabegmosobr.ru";

export const viewport: Viewport = {
  themeColor: "#c82e3e",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Забег Московского Образования 2026",
  description:
    "Первый в истории Забег Московского Образования. 17 мая 2026 года. Садовое кольцо. 10 000 участников.",
  keywords:
    "забег, москва, образование, бег, спорт, 2026, садовое кольцо, школьные спортивные клубы",
  authors: [{ name: "Департамент образования и науки города Москвы" }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Забег Московского Образования 2026",
    description:
      "Первый в истории Забег Московского Образования. 17 мая 2026 года. Садовое кольцо. 10 000 участников.",
    url: SITE_URL,
    siteName: "Забег Московского Образования",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 3840,
        height: 1920,
        alt: "Забег Московского Образования 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Забег Московского Образования 2026",
    description:
      "Первый в истории Забег Московского Образования. 17 мая 2026 года. Садовое кольцо.",
    images: [`${SITE_URL}/og-image.png`],
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
