import Hero from "@/components/sections/hero/Hero";
import TechStack from "@/components/sections/tech/TechStack";
import Solutions from "@/components/sections/solutions/Solutions";
import Industries from "@/components/sections/industries/Industries";
import Portfolio from "@/components/sections/portfolio/Portfolio";
import WhyBrandIT from "@/components/sections/why/WhyBrandIT";
import Process from "@/components/sections/process/Process";
import Testimonials from "@/components/sections/testimonials/Testimonials";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-[#040816] text-white">
      <Hero />

      <TechStack />

      <Solutions />

      <Industries />

      <Portfolio />

      <WhyBrandIT />

      <Process />

      <Testimonials />
    </main>
  );
}