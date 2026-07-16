import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { services } from "@/data/services";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import CTA from "@/components/sections/cta/CTA";
import Footer from "@/components/sections/footer/Footer";

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function ServicePage({
  params,
}: Props) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="overflow-x-hidden bg-[#040816] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden pt-44 pb-24">

        <Container>

          <div className="grid items-center gap-20 lg:grid-cols-2">

            <div>

              <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm text-orange-400">
                BrandIT Service
              </span>

              <h1 className="mt-8 text-5xl font-black lg:text-7xl">
                {service.title}
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-white/60">
                {service.description}
              </p>

              <div className="mt-10">

                <span className="text-white/40">
                  Starting Price
                </span>

                <h3 className="mt-3 text-4xl font-bold gradient-text">
                  {service.price}
                </h3>

              </div>

              <Link
                href="/contact"
                className="mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 px-8 py-5 font-semibold transition hover:scale-105"
              >

                Start This Project

                <ArrowRight size={20} />

              </Link>

            </div>

            <GlassCard className="flex items-center justify-center p-20">

              <Icon
                size={150}
                className="text-orange-400"
              />

            </GlassCard>

          </div>

        </Container>

      </section>

      {/* CONTENT */}

      <Section>

        <Container>

          <div className="grid gap-8 lg:grid-cols-3">

            <GlassCard className="p-8">

              <h3 className="mb-6 text-2xl font-bold">
                What's Included
              </h3>

              <div className="space-y-5">

                {[
                  "Consultation",
                  "UI / UX Design",
                  "Development",
                  "Testing",
                  "Deployment",
                  "Technical Support",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex gap-3"
                  >

                    <CheckCircle2 className="text-orange-400" />

                    {item}

                  </div>

                ))}

              </div>

            </GlassCard>

            <GlassCard className="p-8 lg:col-span-2">

              <h3 className="text-2xl font-bold">

                Why Choose BrandIT?

              </h3>

              <p className="mt-6 leading-9 text-white/60">

                Every solution we build is designed around measurable business
                growth, scalability and long-term success.

                <br /><br />

                Our multidisciplinary team combines software engineering,
                branding, cloud infrastructure, artificial intelligence and
                digital marketing into one complete technology ecosystem.

                <br /><br />

                Whether you're a startup, SME or enterprise, we create
                solutions that help you attract customers, automate operations
                and grow faster.

              </p>

            </GlassCard>

          </div>

        </Container>

      </Section>

      <CTA />

      <Footer />

    </main>
  );
}