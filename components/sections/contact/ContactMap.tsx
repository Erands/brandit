"use client";

import { Clock, Globe, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Section from "@/components/ui/Section";

export default function ContactMap() {
  const t = useTranslations("Contact");

  return (
    <Section>
      <Container>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">

          {/* Google Map */}

          <div className="overflow-hidden rounded-[32px] border border-white/10">

            <iframe
              title="BrandIT Office"
              src="https://maps.google.com/maps?q=Abidjan&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="h-[500px] w-full"
              loading="lazy"
            />

          </div>

          {/* Office Information */}

          <GlassCard className="rounded-[32px] p-10">

            <h2 className="text-3xl font-bold">
              {t("visitTitle")}
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              {t("visitDescription")}
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex gap-4">

                <MapPin className="mt-1 text-orange-400" />

                <div>

                  <h4 className="font-semibold">
                    {t("addressTitle")}
                  </h4>

                  <p className="mt-2 text-white/60">
                    Cocody
                    <br />
                    Abidjan
                    <br />
                    Côte d'Ivoire
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Clock className="mt-1 text-orange-400" />

                <div>

                  <h4 className="font-semibold">
                    {t("hoursTitle")}
                  </h4>

                  <p className="mt-2 text-white/60">
                    Monday – Friday
                    <br />
                    8:00 AM – 6:00 PM
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Globe className="mt-1 text-orange-400" />

                <div>

                  <h4 className="font-semibold">
                    {t("coverageTitle")}
                  </h4>

                  <p className="mt-2 text-white/60">
                    {t("coverageDescription")}
                  </p>

                </div>

              </div>

            </div>

          </GlassCard>

        </div>

      </Container>
    </Section>
  );
}