"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { navLinks } from "./NavLinks";

interface Props {
  open: boolean;
  close: () => void;
}

export default function MobileMenu({
  open,
  close,
}: Props) {
  const locale = useLocale();
  const t = useTranslations("Navbar");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          className="fixed inset-0 z-[100] bg-[#040816]"
        >
          <div className="flex justify-end p-8">

            <button onClick={close}>
              <X size={32} />
            </button>

          </div>

          <div className="mt-20 flex flex-col items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}${link.href === "/" ? "" : link.href}`}
                onClick={close}
                className="text-3xl font-semibold"
              >
                {t(link.key)}
              </Link>
            ))}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}