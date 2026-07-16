"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";

export default function Newsletter() {
  const t = useTranslations("Blog");

  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert(t("subscribeSuccess"));

    setEmail("");
  }

  return (
    <Section>

      <Container>

        <GlassCard className="mx-auto max-w-5xl rounded-[36px] p-12 text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500">

            <Mail className="text-white" size={36} />

          </div>

          <h2 className="mt-8 text-4xl font-black">

            {t("newsletterTitle")}

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-white/60">

            {t("newsletterDescription")}

          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-2xl flex-col gap-5 md:flex-row"
          >

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailPlaceholder")}
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-4 outline-none transition focus:border-orange-500"
            />

            <button
              className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 px-8 py-4 font-semibold transition hover:scale-105"
            >
              {t("subscribe")}
            </button>

          </form>

        </GlassCard>

      </Container>

    </Section>
  );
}