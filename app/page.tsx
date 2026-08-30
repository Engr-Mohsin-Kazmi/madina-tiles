import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Gallery } from "@/components/gallery"
import { ServiceArea } from "@/components/service-area"
import { ContactCTA } from "@/components/contact-cta"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingContactButtons } from "@/components/floating-contact-buttons"
import { StructuredData } from "@/components/structured-data"

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main className="pb-14 md:pb-0">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <ServiceArea />
        <ContactCTA />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContactButtons />
    </>
  )
}
