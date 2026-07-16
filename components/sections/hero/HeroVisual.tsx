"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code2,
  Megaphone,
  Brain,
  Cloud,
} from "lucide-react";

const services = [
  {
    title: "Web",
    icon: Globe,
    top: "6%",
    left: "10%",
  },
  {
    title: "Apps",
    icon: Smartphone,
    top: "18%",
    right: "5%",
  },
  {
    title: "Software",
    icon: Code2,
    bottom: "18%",
    left: "6%",
  },
  {
    title: "Marketing",
    icon: Megaphone,
    bottom: "8%",
    right: "8%",
  },
  {
    title: "AI",
    icon: Brain,
    top: "50%",
    left: "-4%",
  },
  {
    title: "Cloud",
    icon: Cloud,
    top: "55%",
    right: "-2%",
  },
];

export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[520px] w-[520px] rounded-full border border-white/10"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[400px] w-[400px] rounded-full border border-white/5"
      />

      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={service.title}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
            }}
            style={{
              top: service.top,
              left: service.left,
              right: service.right,
              bottom: service.bottom,
            }}
            className="absolute"
          >
            <div className="glass flex w-32 flex-col items-center rounded-3xl p-4">

              <Icon
                className="mb-3 text-orange-400"
                size={30}
              />

              <span className="text-sm font-medium">
                {service.title}
              </span>

            </div>
          </motion.div>
        );
      })}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="glass relative z-10 flex h-72 w-72 items-center justify-center rounded-full"
      >
        <img
          src="/logo/brandit-logo.png"
          alt="BrandIT"
          className="w-36"
        />
      </motion.div>
    </div>
  );
}