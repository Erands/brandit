import BlogHero from "@/components/sections/blog/BlogHero";
import FeaturedPost from "@/components/sections/blog/FeaturedPost";
import Categories from "@/components/sections/blog/Categories";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import Newsletter from "@/components/sections/blog/Newsletter";

import CTA from "@/components/sections/cta/CTA";
import Footer from "@/components/sections/footer/Footer";

export default function BlogPage() {
  return (
    <main className="overflow-x-hidden bg-[#040816] text-white">

      <BlogHero />

      <FeaturedPost />

      <Categories />

      <BlogGrid />

      <Newsletter />

      <CTA />

      <Footer />

    </main>
  );
}