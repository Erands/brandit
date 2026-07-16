"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { useTranslations } from "next-intl";

import { services } from "@/data/services";

import Container from "@/components/ui/Container";

export default function Footer() {
  const t = useTranslations("Footer");

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
    },
    {
      icon: Youtube,
      href: "https://youtube.com",
    },
  ];

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10 bg-[#050816]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed20,transparent_60%)]" />

      <Container>

        <div className="relative py-24">

          {/* Premium CTA */}

          <div className="mb-24 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-blue-500/10 p-12 backdrop-blur-3xl">

            <div className="grid items-center gap-10 lg:grid-cols-[2fr_auto]">

              <div>

                <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-400">

                  BrandIT Africa

                </span>

                <h2 className="mt-8 text-4xl font-black leading-tight lg:text-5xl">

                  Let's Build Something Extraordinary.

                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-9 text-white/65">

                  We help ambitious businesses build premium brands,
                  modern websites, mobile applications,
                  enterprise software, SaaS platforms,
                  artificial intelligence solutions and digital
                  marketing systems that accelerate growth.

                </p>

              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 px-8 py-5 font-semibold transition hover:scale-105"
              >
                {t("cta")}

                <ArrowRight size={20} />

              </Link>

            </div>

          </div>

          {/* Main Footer */}

          <div className="grid gap-16 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">

            {/* Brand */}

            <div>

              <Image
                src="/logo/brandit-logo.png"
                alt="BrandIT Africa"
                width={200}
                height={60}
                className="w-auto"
              />

              <p className="mt-8 max-w-md leading-9 text-white/60">

                {t("description")}

              </p>

              <div className="mt-10 grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <h3 className="gradient-text text-3xl font-black">

                    13+

                  </h3>

                  <p className="mt-2 text-sm text-white/50">

                    Technology Services

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <h3 className="gradient-text text-3xl font-black">

                    24/7

                  </h3>

                  <p className="mt-2 text-sm text-white/50">

                    Technical Support

                  </p>

                </div>

              </div>

              <div className="mt-10 flex gap-4">

                {socialLinks.map(({ icon: Icon, href }, index) => (

                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500/10"
                  >

                    <Icon size={18} />

                  </a>

                ))}

              </div>

            </div>

                        {/* Services */}

            <div>

              <h4 className="mb-8 text-xl font-bold text-white">
                {t("services")}
              </h4>

              <div className="space-y-4">

                {services.slice(0, 6).map((service) => (

                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block text-white/60 transition duration-300 hover:translate-x-1 hover:text-orange-400"
                  >

                    {service.title}

                  </Link>

                ))}

              </div>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-400 transition hover:gap-3"
              >

                View All Services

                <ArrowRight size={16} />

              </Link>

            </div>

            {/* Company */}

            <div>

              <h4 className="mb-8 text-xl font-bold text-white">

                {t("company")}

              </h4>

              <div className="space-y-4">

                <Link
                  href="/about"
                  className="block text-white/60 transition hover:text-orange-400"
                >
                  {t("about")}
                </Link>

                <Link
                  href="/services"
                  className="block text-white/60 transition hover:text-orange-400"
                >
                  Services
                </Link>

                <Link
                  href="/contact"
                  className="block text-white/60 transition hover:text-orange-400"
                >
                  {t("contact")}
                </Link>

                <Link
                  href="/blog"
                  className="block text-white/60 transition hover:text-orange-400"
                >
                  Blog
                </Link>

              </div>

              <h4 className="mt-12 mb-8 text-xl font-bold text-white">

                Legal

              </h4>

              <div className="space-y-4">

                <Link
                  href="/privacy"
                  className="block text-white/60 transition hover:text-orange-400"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="block text-white/60 transition hover:text-orange-400"
                >
                  Terms & Conditions
                </Link>

                <Link
                  href="/cookies"
                  className="block text-white/60 transition hover:text-orange-400"
                >
                  Cookie Policy
                </Link>

              </div>

            </div>

            {/* Contact */}

            <div>

              <h4 className="mb-8 text-xl font-bold text-white">

                {t("contactTitle")}

              </h4>

              <div className="space-y-5">

                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">

                  <MapPin
                    size={20}
                    className="mt-1 text-orange-400"
                  />

                  <div>

                    <div className="font-semibold">

                      Office

                    </div>

                    <div className="mt-1 text-sm leading-7 text-white/60">

                      Cocody<br />

                      Abidjan, Côte d'Ivoire

                    </div>

                  </div>

                </div>

                <a
                  href="mailto:hello@brandit.africa"
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-orange-500"
                >

                  <Mail
                    size={20}
                    className="mt-1 text-orange-400"
                  />

                  <div>

                    <div className="font-semibold">

                      Email

                    </div>

                    <div className="mt-1 text-sm text-white/60">

                      hello@brandit.africa

                    </div>

                  </div>

                </a>

                <a
                  href="tel:+2250545862870"
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-orange-500"
                >

                  <Phone
                    size={20}
                    className="mt-1 text-orange-400"
                  />

                  <div>

                    <div className="font-semibold">

                      Phone

                    </div>

                    <div className="mt-1 text-sm text-white/60">

                      +225 05 45 86 28 70

                    </div>

                  </div>

                </a>

                <Link
                  href="/contact"
                  className="mt-3 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 px-6 py-4 font-semibold transition hover:scale-[1.02]"
                >

                  {t("cta")}

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          </div>

          {/* Bottom Bar */}

          <div className="mt-24 border-t border-white/10 pt-8">

            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

              <p className="text-center text-sm text-white/40">

                © {new Date().getFullYear()} BrandIT Africa.

                {" "}

                {t("rights")}

              </p>

              <div className="flex items-center gap-6 text-sm">

                <Link
                  href="/privacy"
                  className="text-white/50 transition hover:text-orange-400"
                >
                  Privacy
                </Link>

                <Link
                  href="/terms"
                  className="text-white/50 transition hover:text-orange-400"
                >
                  Terms
                </Link>

                <Link
                  href="/cookies"
                  className="text-white/50 transition hover:text-orange-400"
                >
                  Cookies
                </Link>

              </div>

              <p className="text-sm text-white/40">

                Designed & Developed by

                <span className="ml-2 gradient-text font-semibold">

                  BrandIT Africa

                </span>

              </p>

            </div>

          </div>

        </div>

      </Container>

    </footer>

  );
}