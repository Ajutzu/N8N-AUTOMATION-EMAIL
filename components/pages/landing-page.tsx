"use client"
import { Navbar } from "@/components/layouts/navbar"
import { HeroSection } from "@/components/layouts/hero-section"
import { ServiceSection } from "../layouts/service-section"
import { Footer } from "../layouts/footer"
import { ContactSection } from "../layouts/contact-section"

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default LandingPage