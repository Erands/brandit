export interface NavLink {
  key: string;
  href: string;
}

export const navLinks: NavLink[] = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "solutions",
    href: "/services",
  },
  {
    key: "industries",
    href: "/industries",
  },
  {
    key: "portfolio",
    href: "/portfolio",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "contact",
    href: "/contact",
  },
];