"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-24 items-center justify-between">

            {/* Logo */}

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <Image
                src="/logo/brandit-logo.png"
                alt="BrandIT"
                width={52}
                height={52}
                priority
              />

              <span className="text-2xl font-bold tracking-tight">
                BrandIT
              </span>
            </Link>

            {/* Desktop */}

            <nav className="hidden items-center gap-10 lg:flex">

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-sm font-medium text-white/70 transition hover:text-white"
                >
                  {item.name}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-orange-500 to-violet-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}

            <div className="hidden lg:block">
              <Button>
                Book Strategy Call
              </Button>
            </div>

            {/* Mobile */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
            >
              {mobileOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-24 left-0 z-40 w-full border-t border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden"
          >
            <Container>

              <div className="flex flex-col gap-6 py-8">

                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg text-white/80"
                  >
                    {item.name}
                  </Link>
                ))}

                <Button className="mt-4">
                  Book Strategy Call
                </Button>

              </div>

            </Container>
          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}