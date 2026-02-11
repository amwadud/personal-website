import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WorkSection } from "@/components/work-section"
import { VoiceSection } from "@/components/voice-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { Marquee } from "@/components/marquee"

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <Marquee
          items={[
            "Developer",
            "Voice Actor",
            "AI Enthusiast",
            "42 Network",
            "C / C++",
            "Python",
            "Machine Learning",
            "Economics",
            "Paris",
          ]}
          separator="+"
        />
        <AboutSection />
        <WorkSection />
        <Marquee
          items={[
            "Character Voice",
            "Commercial VO",
            "Narration",
            "Audio Production",
            "Creative Expression",
          ]}
          speed="slow"
          separator="/"
        />
        <VoiceSection />
        <ContactSection />
        <SiteFooter />
      </main>
    </>
  )
}
