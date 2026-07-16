import ContactHero from "@/components/sections/contact/ContactHero";
import ContactCards from "@/components/sections/contact/ContactCards";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactMap from "@/components/sections/contact/ContactMap";
import WhyChooseUs from "@/components/sections/contact/WhyChooseUs";

import CTA from "@/components/sections/cta/CTA";
import Footer from "@/components/sections/footer/Footer";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-[#040816] text-white">

      <ContactHero />

      <ContactCards />

      <ContactForm />

      <ContactMap />

      <WhyChooseUs />

      <CTA />

      <Footer />

    </main>
  );
}