"use client";

import { useState } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Categories() {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "Software",
    "AI",
    "Web",
    "Mobile",
    "SaaS",
    "Branding",
    "Marketing",
    "Cloud",
    "Business",
  ];

  return (
    <Section className="pt-0">
      <Container>

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full px-6 py-3 transition-all duration-300 ${
                active === category
                  ? "bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 text-white"
                  : "border border-white/10 bg-white/5 text-white/70 hover:border-orange-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </Container>
    </Section>
  );
}