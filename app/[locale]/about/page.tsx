import AboutHero from "@/components/sections/about/AboutHero";
import OurStory from "@/components/sections/about/OurStory";
import MissionVision from "@/components/sections/about/MissionVision";
import CoreValues from "@/components/sections/about/CoreValues";
import FAQ from "@/components/sections/about/FAQ";

import WhyBrandIT from "@/components/sections/why/WhyBrandIT";
import Process from "@/components/sections/process/Process";
import TechStack from "@/components/sections/tech/TechStack";
import Industries from "@/components/sections/industries/Industries";

import CTA from "@/components/sections/cta/CTA";
import Footer from "@/components/sections/footer/Footer";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-[#040816] text-white">

      <AboutHero />

      <OurStory />

      <MissionVision />

      <CoreValues />

      <WhyBrandIT />

      <Process />

      <TechStack />

      <Industries />

      <FAQ />

      <CTA />

      <Footer />

    </main>
  );
}