"use client";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  UtensilsCrossed,
  Hotel,
  Sofa,
  Building2,
  HeartPulse,
  Shirt,
  GraduationCap,
  Plane,
} from "lucide-react";

import { useTranslations } from "next-intl";

import GlassCard from "@/components/ui/GlassCard";
import GradientIcon from "@/components/ui/GradientIcon";

interface Props {
  title: string;
  description: string;
  icon: string;
}

export default function IndustryCard({
  title,
  description,
  icon,
}: Props) {

  const t = useTranslations("Industries");

  const icons = {
    restaurant: UtensilsCrossed,
    hotel: Hotel,
    furniture: Sofa,
    realestate: Building2,
    healthcare: HeartPulse,
    fashion: Shirt,
    education: GraduationCap,
    travel: Plane,
  };

  const Icon =
    icons[icon as keyof typeof icons] ?? Building2;

  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
    >
      <GlassCard className="group p-8 transition-all duration-500 hover:border-orange-500/30">

        <GradientIcon icon={Icon} />

        <h3 className="mt-8 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-white/60">
          {description}
        </p>

        <div className="mt-10 flex items-center justify-between">

          <span className="font-semibold text-orange-400">
            {t("discover")}
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10">

            <ArrowUpRight
              size={18}
              className="transition group-hover:rotate-45"
            />

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}