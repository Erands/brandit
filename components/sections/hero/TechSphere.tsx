"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BrainCircuit,
  Cloud,
  Globe,
  Megaphone,
  Smartphone,
  Code2,
} from "lucide-react";

const orbit = [
  {
    Icon: Globe,
    x: 0,
    y: -190,
    color: "from-blue-500 to-cyan-400",
  },
  {
    Icon: BrainCircuit,
    x: 170,
    y: -80,
    color: "from-pink-500 to-purple-500",
  },
  {
    Icon: Cloud,
    x: 170,
    y: 80,
    color: "from-blue-500 to-indigo-500",
  },
  {
    Icon: Megaphone,
    x: 0,
    y: 190,
    color: "from-orange-500 to-pink-500",
  },
  {
    Icon: Smartphone,
    x: -170,
    y: 80,
    color: "from-purple-500 to-blue-500",
  },
  {
    Icon: Code2,
    x: -170,
    y: -80,
    color: "from-orange-500 to-red-500",
  },
];

export default function TechSphere() {
  return (
    <div className="relative mx-auto mt-24 h-[560px] w-[560px]">

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        {orbit.map(({ Icon, x, y, color }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              marginLeft: x,
              marginTop: y,
            }}
          >
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${color} shadow-2xl`}
            >
              <Icon
                size={34}
                className="text-white"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/20" />

      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-500/20" />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-500 via-pink-500 to-blue-600 p-[3px]"
      >
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#050816]">

          <Image
            src="/logo/brandit-logo.png"
            alt="BrandIT"
            width={110}
            height={110}
            priority
          />

        </div>
      </motion.div>

    </div>
  );
}