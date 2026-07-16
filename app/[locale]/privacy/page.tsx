import PrivacyHero from "@/components/sections/legal/PrivacyHero";
import PrivacyContent from "@/components/sections/legal/PrivacyContent";

import CTA from "@/components/sections/cta/CTA";
import Footer from "@/components/sections/footer/Footer";

export default function PrivacyPage() {
  return (
    <main className="overflow-x-hidden bg-[#040816] text-white">

      <PrivacyHero />

      <PrivacyContent />

      <CTA />

      <Footer />

    </main>
  );
}