"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks } from "./NavLinks";

export default function DesktopMenu() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map((link) => {
        const href = `/${locale}${link.href === "/" ? "" : link.href}`;

        const active =
          pathname === href ||
          (link.href === "/" && pathname === `/${locale}`);

        return (
          <Link
            key={link.key}
            href={href}
            className="group relative"
          >
            <span
              className={`transition-colors duration-300 ${
                active
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {t(link.key)}
            </span>

            <motion.span
              layoutId="navbar"
              className={`absolute -bottom-2 left-0 h-[2px] rounded-full gradient-bg ${
                active ? "w-full" : "w-0 group-hover:w-full"
              } transition-all duration-300`}
            />
          </Link>
        );
      })}
    </nav>
  );
}