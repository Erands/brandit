"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";

export default function ContactForm() {
  const t = useTranslations("Contact");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    // Backend integration later

    setTimeout(() => {
      alert(t("success"));
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1200);
  }

  return (
    <Section>
      <Container>

        <div className="mx-auto max-w-5xl">

          <GlassCard className="rounded-[36px] p-10 md:p-14">

            <div className="mb-12 text-center">

              <h2 className="text-4xl font-black">

                {t("formTitle")}

              </h2>

              <p className="mt-5 text-white/60">

                {t("formDescription")}

              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="grid gap-6 md:grid-cols-2"
            >

              <input
                required
                placeholder={t("name")}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none transition focus:border-orange-500"
              />

              <input
                placeholder={t("company")}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none transition focus:border-orange-500"
              />

              <input
                type="email"
                required
                placeholder={t("email")}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none transition focus:border-orange-500"
              />

              <input
                placeholder={t("phone")}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none transition focus:border-orange-500"
              />

              <select
                className="rounded-2xl border border-white/10 bg-[#0B1020] px-6 py-4 outline-none"
              >
                <option>{t("service")}</option>

                <option>Software Development</option>
                <option>SaaS Platform</option>
                <option>Website Development</option>
                <option>Mobile App</option>
                <option>Artificial Intelligence</option>
                <option>Cloud Services</option>
                <option>Branding</option>
                <option>Digital Marketing</option>
                <option>IT Consulting</option>

              </select>

              <select
                className="rounded-2xl border border-white/10 bg-[#0B1020] px-6 py-4 outline-none"
              >
                <option>{t("budget")}</option>

                <option>Below 500,000 CFA</option>
                <option>500k - 1M CFA</option>
                <option>1M - 3M CFA</option>
                <option>3M - 10M CFA</option>
                <option>10M+ CFA</option>

              </select>

              <textarea
                rows={7}
                placeholder={t("message")}
                className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none transition focus:border-orange-500"
              />

              <button
                disabled={loading}
                className="md:col-span-2 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 px-8 py-5 text-lg font-semibold transition hover:scale-[1.02]"
              >

                <Send size={20} />

                {loading ? t("sending") : t("send")}

              </button>

            </form>

          </GlassCard>

        </div>

      </Container>
    </Section>
  );
}