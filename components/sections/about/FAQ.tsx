"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";

export default function FAQ() {
  const t = useTranslations("About");

  const faqs = [
    {
      question: t("faq1Question"),
      answer: t("faq1Answer"),
    },
    {
      question: t("faq2Question"),
      answer: t("faq2Answer"),
    },
    {
      question: t("faq3Question"),
      answer: t("faq3Answer"),
    },
    {
      question: t("faq4Question"),
      answer: t("faq4Answer"),
    },
    {
      question: t("faq5Question"),
      answer: t("faq5Answer"),
    },
    {
      question: t("faq6Question"),
      answer: t("faq6Answer"),
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section>
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
            {t("faqBadge")}
          </span>

          <h2 className="mt-8 text-4xl font-black lg:text-5xl">
            {t("faqTitle")}
          </h2>

          <p className="mt-6 text-lg leading-9 text-white/65">
            {t("faqDescription")}
          </p>

        </div>

        <div className="mx-auto max-w-4xl space-y-6">

          {faqs.map((faq, index) => (
            <GlassCard
              key={index}
              className="overflow-hidden rounded-[24px]"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-xl font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>

                {open === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-8 pb-8 leading-9 text-white/60">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}

              </AnimatePresence>

            </GlassCard>
          ))}

        </div>

      </Container>
    </Section>
  );
}