"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { services } from "@/data/services";

import Button from "@/components/ui/Button";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-5 lg:px-8">

      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-[#0B1020]/70
          px-6
          backdrop-blur-3xl
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        "
      >

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center"
        >

          <Image
            src="/logo/brandit-logo.png"
            alt="BrandIT Africa"
            width={52}
            height={52}
            priority
            className="h-14 w-auto"
          />

        </Link>

        {/* ==========================
            Desktop Navigation
        =========================== */}

        <nav className="hidden items-center gap-10 xl:flex">

          <Link
            href="/"
            className="font-medium transition hover:text-orange-400"
          >
            {t("home")}
          </Link>

          {/* Mega Menu */}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >

            <button className="flex items-center gap-2 font-medium transition hover:text-orange-400">

              {t("solutions")}

              <ChevronDown
                size={16}
                className={`transition ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />

            </button>

            {servicesOpen && (

              <div
                className="
                  absolute
                  left-1/2
                  top-12
                  w-[760px]
                  -translate-x-1/2
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#0B1020]/95
                  backdrop-blur-3xl
                  shadow-2xl
                "
              >

                <div className="border-b border-white/10 p-8">

                  <h3 className="text-2xl font-bold">

                    Technology Solutions

                  </h3>

                  <p className="mt-2 text-white/60">

                    Everything your business needs under one technology partner.

                  </p>

                </div>

                <div className="grid grid-cols-2 gap-2 p-6">

                  {services.map((service) => {

                    const Icon = service.icon;

                    return (

                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="
                          rounded-2xl
                          border
                          border-transparent
                          p-5
                          transition
                          hover:border-orange-500/20
                          hover:bg-white/5
                        "
                      >

                        <div className="flex items-start gap-4">

                          <div
                            className="
                              rounded-xl
                              bg-orange-500/10
                              p-3
                            "
                          >

                            <Icon
                              size={24}
                              className="text-orange-400"
                            />

                          </div>

                          <div>

                            <h4 className="font-semibold">

                              {service.title}

                            </h4>

                            <p className="mt-2 text-sm leading-6 text-white/50">

                              {service.shortDescription}

                            </p>

                          </div>

                        </div>

                      </Link>

                    );

                  })}

                </div>

                <div className="flex items-center justify-between border-t border-white/10 p-6">

                  <p className="text-sm text-white/50">

                    Looking for something custom?

                  </p>

                  <Link href="/contact">

                    <Button>

                      Let's Talk

                      <ArrowRight
                        size={18}
                        className="ml-2"
                      />

                    </Button>

                  </Link>

                </div>

              </div>

            )}

          </div>

          <Link
            href="/services"
            className="font-medium transition hover:text-orange-400"
          >
            Services
          </Link>

          <Link
            href="/about"
            className="font-medium transition hover:text-orange-400"
          >
            {t("about")}
          </Link>

          <Link
            href="/blog"
            className="font-medium transition hover:text-orange-400"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="font-medium transition hover:text-orange-400"
          >
            {t("contact")}
          </Link>

                  </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-4 xl:flex">

          <Link
            href="/"
            locale={locale === "fr" ? "en" : "fr"}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-sm
              font-semibold
              text-white
              transition
              hover:border-orange-500
              hover:bg-orange-500/10
            "
          >
            {locale === "fr" ? "EN" : "FR"}
          </Link>

          <Link href="/contact">

            <Button>

              {t("cta")}

            </Button>

          </Link>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden text-white"
          aria-label="Toggle Menu"
        >

          {mobileOpen ? <X size={28} /> : <Menu size={28} />}

        </button>

      </div>

      {/* ==========================
          Mobile Navigation
      ========================== */}

      {mobileOpen && (

        <div
          className="
            mx-auto
            mt-4
            max-w-7xl
            rounded-3xl
            border
            border-white/10
            bg-[#0B1020]/95
            p-6
            backdrop-blur-3xl
            shadow-2xl
            xl:hidden
          "
        >

          <div className="space-y-2">

            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-white/5"
            >
              {t("home")}
            </Link>

            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-white/5"
            >
              Services
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-white/5"
            >
              {t("about")}
            </Link>

            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-white/5"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-white/5"
            >
              {t("contact")}
            </Link>

          </div>

          <div className="my-6 border-t border-white/10" />

          <div className="space-y-2">

            <h4 className="px-4 text-sm font-semibold uppercase tracking-wider text-white/40">

              Services

            </h4>

            {services.map((service) => (

              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                onClick={() => setMobileOpen(false)}
                className="
                  block
                  rounded-xl
                  px-4
                  py-3
                  transition
                  hover:bg-white/5
                "
              >

                <div className="font-medium">

                  {service.title}

                </div>

                <div className="text-sm text-white/50">

                  {service.shortDescription}

                </div>

              </Link>

            ))}

          </div>

          <div className="mt-8 flex items-center justify-between">

            <Link
              href="/"
              locale={locale === "fr" ? "en" : "fr"}
              className="
                rounded-full
                border
                border-white/10
                px-5
                py-3
                text-sm
                font-semibold
                transition
                hover:border-orange-500
              "
            >
              {locale === "fr" ? "English" : "Français"}
            </Link>

            <Link href="/contact">

              <Button>

                {t("cta")}

              </Button>

            </Link>

          </div>

        </div>

      )}

    </header>

  );
}
