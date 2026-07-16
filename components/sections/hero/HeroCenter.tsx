"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import Button from "@/components/ui/Button";
import FloatingCard from "./FloatingCard";
import TechSphere from "./TechSphere";

export default function HeroCenter() {
  const t = useTranslations("Hero");

  return (
    <div className="relative">

     <FloatingCard
title="Website"
className="-left-28 top-8 hidden 2xl:flex"
/>

<FloatingCard
title="AI"
className="-right-24 top-0 hidden 2xl:flex"
/>

<FloatingCard
title="Marketing"
className="-left-20 bottom-0 hidden 2xl:flex"
/>

<FloatingCard
title="Cloud"
className="-right-16 bottom-12 hidden 2xl:flex"
/>

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="mx-auto max-w-5xl text-center"
      >
        <span className="gradient-text text-sm font-semibold uppercase tracking-[8px]">
          {t("badge")}
        </span>

        <h1 className="mt-8 text-6xl font-black leading-none lg:text-8xl xl:text-[110px]">

        Technology.

<br />

<span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
  Branding.
</span>

<br />

<span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
  Marketing.
</span>

        </h1>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-white/70">

          {t("description")}

        </p>
        <TechSphere />
        <div className="mt-16 flex flex-wrap justify-center gap-6">

          <Button>

            <span className="flex items-center gap-3">

              {t("cta")}

              <ArrowRight size={18} />

            </span>

          </Button>

          <Button variant="secondary">

            {t("portfolio")}

          </Button>

        </div>

      </motion.div>

    </div>
  );
}