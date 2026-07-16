"use client";

import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section py-40">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[48px] border border-white/10 bg-[#08101f] p-12 lg:p-20"
      >
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <span className="gradient-text text-sm font-semibold uppercase tracking-[6px]">
            Let's Build Together
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
            Ready To Grow
            <br />
            Your Business?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-white/60">
            Whether you need a premium website, branding, software,
            AI solutions or digital marketing, BrandIT is ready to
            help you dominate your market.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <button className="gradient-bg flex items-center gap-3 rounded-full px-8 py-4 font-semibold text-white transition hover:scale-105">

              Start Your Project

              <ArrowRight size={18} />

            </button>

            <button className="glass rounded-full px-8 py-4 font-semibold transition hover:bg-white/10">
              View Portfolio
            </button>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <div className="glass rounded-3xl p-6">

              <MessageCircle
                className="mx-auto mb-5 text-orange-400"
                size={34}
              />

              <h3 className="font-bold">
                WhatsApp
              </h3>

              <p className="mt-3 text-white/60">
                Chat with our team instantly.
              </p>

            </div>

            <div className="glass rounded-3xl p-6">

              <Mail
                className="mx-auto mb-5 text-orange-400"
                size={34}
              />

              <h3 className="font-bold">
                Email
              </h3>

              <p className="mt-3 text-white/60">
                hello@brandit.africa
              </p>

            </div>

            <div className="glass rounded-3xl p-6">

              <Phone
                className="mx-auto mb-5 text-orange-400"
                size={34}
              />

              <h3 className="font-bold">
                Call Us
              </h3>

              <p className="mt-3 text-white/60">
                +225 05 45 86 28 70
              </p>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}