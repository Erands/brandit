"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import GlassCard from "@/components/ui/GlassCard";

interface Props {
  icon: React.ElementType;
  slug: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  slug,
  title,
  description,
}: Props) {
  const t = useTranslations("Services");

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="h-full"
    >
      <GlassCard className="group flex h-full flex-col rounded-[30px] border border-white/10 p-8 transition-all duration-300 hover:border-orange-500/30">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500">

          <Icon
            size={30}
            className="text-white"
          />

        </div>

        <h3 className="mt-8 text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-5 flex-1 leading-8 text-white/60">
          {description}
        </p>

        <Link
          href={`/services/${slug}`}
          className="mt-8 flex items-center gap-3 font-semibold text-orange-400 transition-all duration-300 group-hover:gap-5"
        >
          {t("learn")}

          <ArrowRight size={18} />
        </Link>

      </GlassCard>
    </motion.div>
  );
}