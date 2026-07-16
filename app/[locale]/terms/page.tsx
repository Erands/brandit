import TermsHero from "@/components/sections/legal/TermsHero";
import TermsContent from "@/components/sections/legal/TermsContent";

import CTA from "@/components/sections/cta/CTA";
import Footer from "@/components/sections/footer/Footer";

export default function TermsPage() {
  return (
    <main className="overflow-x-hidden bg-[#040816] text-white">

      <TermsHero />

      <TermsContent />

      <CTA />

      <Footer />

    </main>
  );
}