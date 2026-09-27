const SITE_URL = "https://madina-tiles-work.vercel.app"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Madina Tile Works",
  alternateName: "معلم بلاط وسيراميك بالمدينة المنورة",
  description:
    "معلم بلاط وسيراميك بالمدينة المنورة، متخصص في تركيب البلاط والسيراميك والبورسلان والرخام. Professional tile, ceramic, porcelain and marble installation in Madinah, Saudi Arabia.",
  url: SITE_URL,
  telephone: "+966599082520",
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/og-image.png`,
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Madinah",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madinah",
    addressRegion: "Al Madinah Province",
    addressCountry: "SA",
  },
  knowsLanguage: ["ar", "ur", "en"],
  makesOffer: [
    "تركيب البلاط",
    "تركيب السيراميك",
    "تركيب البورسلان",
    "تركيب الرخام",
    "تركيب بلاط الحمامات",
    "تركيب بلاط المطابخ",
    "تركيب بلاط الأرضيات والجدران",
    "أعمال التشطيبات",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
