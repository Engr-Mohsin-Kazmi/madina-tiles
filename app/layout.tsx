import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Manrope, IBM_Plex_Sans_Arabic } from "next/font/google"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
})

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
})

const SITE_URL = "https://madina-tiles-work.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "معلم بلاط وسيراميك في المدينة المنورة | Madina Tile Works",
    template: "%s | Madina Tile Works",
  },
  description:
    "معلم بلاط وسيراميك بالمدينة المنورة، متخصص في تركيب البلاط والسيراميك والبورسلان والرخام. Professional tile, ceramic, porcelain and marble installation in Madinah, Saudi Arabia.",
  applicationName: "Madina Tile Works",
  keywords: [
    "معلم بلاط بالمدينة المنورة",
    "معلم تركيب بلاط بالمدينة المنورة",
    "معلم سيراميك بالمدينة المنورة",
    "معلم تركيب سيراميك بالمدينة المنورة",
    "مبلط بالمدينة المنورة",
    "تركيب بلاط بالمدينة المنورة",
    "تركيب سيراميك بالمدينة المنورة",
    "معلم بورسلان بالمدينة المنورة",
    "معلم رخام وبلاط بالمدينة المنورة",
    "tile installation Madinah",
    "ceramic installation Madinah",
    "Madina Tile Works",
  ],
  alternates: {
    canonical: "/",
    languages: {
      ar: "/",
      ur: "/",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Madina Tile Works",
    title: "معلم بلاط وسيراميك في المدينة المنورة | Madina Tile Works",
    description:
      "تركيب احترافي للبلاط والسيراميك والبورسلان والرخام في المدينة المنورة. Professional tile and ceramic installation in Madinah.",
    locale: "ar_SA",
    alternateLocale: ["en_US", "ur_PK"],
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luxury tiled interior by Madina Tile Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile & Ceramic Installation in Madinah | Madina Tile Works",
    description:
      "Professional tile, ceramic, porcelain and marble installation in Madinah, Saudi Arabia.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#2b2724",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ur"
      dir="rtl"
      className={`light bg-background ${manrope.variable} ${plexArabic.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
