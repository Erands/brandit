import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://branditafrica.com"),

  title: {
    default: "BrandIT Africa",
    template: "%s | BrandIT Africa",
  },

  description:
    "BrandIT Africa builds websites, mobile applications, SaaS platforms, AI solutions, branding and digital marketing systems for ambitious businesses.",

  keywords: [
    "Website Development",
    "Software Development",
    "SaaS",
    "Artificial Intelligence",
    "Digital Marketing",
    "Branding",
    "Abidjan",
    "Côte d'Ivoire",
    "Africa",
  ],

  authors: [
    {
      name: "BrandIT Africa",
    },
  ],

  creator: "BrandIT Africa",

  publisher: "BrandIT Africa",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://branditafrica.com",
    title: "BrandIT Africa",
    description:
      "Premium technology company building websites, software, AI and digital marketing solutions.",
    siteName: "BrandIT Africa",
  },

  twitter: {
    card: "summary_large_image",
    title: "BrandIT Africa",
    description:
      "Premium technology company building websites, software and AI solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}