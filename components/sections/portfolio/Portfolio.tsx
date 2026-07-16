"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  const t = useTranslations("Portfolio");

  const categories = [
    t("all"),
    t("branding"),
    t("websites"),
    t("software"),
    t("marketing"),
  ];

  const [active, setActive] = useState(categories[0]);

  const projects = [
    {
      title: t("project1"),
      category: t("branding"),
      image: "/images/portfolio/furniture.jpg",
      size: "large",
    },
    {
      title: t("project2"),
      category: t("marketing"),
      image: "/images/portfolio/restaurant.jpg",
      size: "small",
    },
    {
      title: t("project3"),
      category: t("websites"),
      image: "/images/portfolio/real-estate.jpg",
      size: "small",
    },
    {
      title: t("project4"),
      category: t("software"),
      image: "/images/portfolio/healthcare.jpg",
      size: "large",
    },
  ];

  const filtered =
    active === t("all")
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <section className="relative overflow-hidden py-40">

      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[180px]" />

      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="section relative z-10">

        <div className="mx-auto max-w-4xl text-center">

          <span className="gradient-text text-sm font-semibold uppercase tracking-[6px]">
            {t("badge")}
          </span>

          <h2 className="mt-6 text-5xl font-black lg:text-6xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-white/60">
            {t("description")}
          </p>

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full px-6 py-3 transition ${
                active === category
                  ? "gradient-bg text-white"
                  : "glass text-white/70"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {filtered.map((project) => (
            <PortfolioCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}