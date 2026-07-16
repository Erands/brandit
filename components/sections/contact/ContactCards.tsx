"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";

export default function ContactCards() {
  const t = useTranslations("Contact");

  const cards = [
    {
      icon: MapPin,
      title: t("officeTitle"),
      value: t("officeValue"),
      description: t("officeDescription"),
    },
    {
      icon: Phone,
      title: t("phoneTitle"),
      value: "+225 05 45 86 28 70",
      description: t("phoneDescription"),
    },
    {
      icon: Mail,
      title: t("emailTitle"),
      value: "hello@branditafrica.com",
      description: t("emailDescription"),
    },
    {
      icon: MessageCircle,
      title: t("whatsappTitle"),
      value: "+225 05 45 86 28 70",
      description: t("whatsappDescription"),
    },
  ];

  return (
    <Section>
      <Container>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full rounded-[30px] p-8 text-center">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500">

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {card.title}
                  </h3>

                  <p className="mt-5 font-semibold text-orange-400 break-words">
                    {card.value}
                  </p>

                  <p className="mt-4 leading-8 text-white/60">
                    {card.description}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}