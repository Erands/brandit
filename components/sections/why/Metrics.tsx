"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "150+",
    label: "Projects Delivered",
  },
  {
    value: "12",
    label: "African Countries",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

export default function Metrics() {
  return (
    <section className="section pb-40">

      <div className="glass rounded-[40px] grid gap-10 p-12 lg:grid-cols-4">

        {metrics.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{
              opacity:0,
              y:40,
            }}
            whileInView={{
              opacity:1,
              y:0,
            }}
            viewport={{
              once:true,
            }}
            transition={{
              delay:index*.15,
            }}
            className="text-center"
          >
            <h3 className="gradient-text text-5xl font-black">
              {item.value}
            </h3>

            <p className="mt-3 text-white/60">
              {item.label}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}