"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  category: string;
  image: string;
  size: string;
}

export default function PortfolioCard({
  title,
  category,
  image,
  size,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -12,
      }}
      transition={{
        duration: 0.35,
      }}
      className={`group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl ${
        size === "large"
          ? "min-h-[620px]"
          : "min-h-[460px]"
      }`}
    >
      <div className="absolute inset-0">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-[#040816]/50 to-transparent" />

      <div className="absolute top-8 left-8">

        <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
          {category}
        </span>

      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8">

        <div className="glass rounded-[28px] p-6">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-3xl font-bold text-white">
                {title}
              </h3>

              <p className="mt-3 text-white/60">
                BrandIT Africa
              </p>

            </div>

            <motion.div
              whileHover={{
                rotate: 45,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 via-pink-500 to-blue-600"
            >
              <ArrowUpRight
                size={22}
                className="text-white"
              />
            </motion.div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}