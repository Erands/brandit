import {
  BrainCircuit,
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  Megaphone,
  Network,
  Palette,
  ShoppingCart,
  Smartphone,
  Wrench,
} from "lucide-react";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceSEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface Service {

  slug: string;

  icon: any;

  title: string;

  shortDescription: string;

  description: string;

  price: string;

  heroImage: string;

  technologies: string[];

  features: string[];

  benefits: string[];

  industries: string[];

  faqs: ServiceFAQ[];

  seo: ServiceSEO;

}

export const services: Service[] = [

  {
    slug: "software-development",

    icon: Code2,

    title: "Software Development",
shortDescription:
  "Custom business software built for performance, automation and growth.",
description:
  "BrandIT develops secure, scalable and high-performance custom software tailored to your business needs. We build ERP systems, CRM platforms, inventory systems, booking systems, healthcare software, education platforms and enterprise applications that automate operations and accelerate business growth.",

    price: "Starting from 500,000 CFA",

    heroImage: "/images/services/software-development.jpg",

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Laravel",
      "Flutter",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],

    features: [
      "Enterprise Software",
      "ERP Systems",
      "CRM Solutions",
      "Inventory Management",
      "Booking Systems",
      "Hospital Management",
      "School Management",
      "Finance Systems",
    ],

    benefits: [
      "Automate daily operations",
      "Increase productivity",
      "Improve reporting",
      "Reduce manual work",
      "Scale your business",
      "Secure business data",
    ],

    industries: [
      "Healthcare",
      "Education",
      "Restaurants",
      "Hotels",
      "Real Estate",
      "Government",
      "Retail",
    ],

    faqs: [
      {
        question: "How long does software development take?",
        answer:
          "Most software projects take between 4 and 16 weeks depending on complexity.",
      },
      {
        question: "Can BrandIT upgrade existing software?",
        answer:
          "Yes. We improve, modernize and maintain existing software solutions.",
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. Every software project includes post-launch support and maintenance options.",
      },
    ],

    seo: {
      title:
        "Custom Software Development Company in Africa | BrandIT",

      description:
        "BrandIT develops enterprise software, ERP, CRM and custom digital solutions for businesses across Africa.",

      keywords: [
        "software development",
        "enterprise software",
        "ERP",
        "CRM",
        "custom software",
      ],
    },
  },

  {
    slug: "software-as-a-service",

    icon: Database,

    title: "Software as a Service (SaaS)",

    shortDescription:
      "Cloud platforms built for recurring subscription businesses.",

    description:
      "We build scalable SaaS products that allow startups and enterprises to deliver software over the cloud with subscription billing, user management, dashboards, analytics and automation.",

    price: "Starting from 1,000,000 CFA",

    heroImage: "/images/services/saas.jpg",

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Docker",
      "AWS",
    ],

    features: [
      "Multi-Tenant Architecture",
      "Subscription Billing",
      "Admin Dashboard",
      "Analytics",
      "Authentication",
      "API Development",
      "Cloud Hosting",
    ],

    benefits: [
      "Recurring Revenue",
      "Cloud Scalability",
      "Automatic Updates",
      "Global Accessibility",
      "Secure Infrastructure",
    ],

    industries: [
      "FinTech",
      "HealthTech",
      "EdTech",
      "Travel",
      "Logistics",
      "Business Services",
    ],

    faqs: [
      {
        question: "Can you build SaaS from scratch?",
        answer:
          "Yes. We handle everything from strategy to deployment.",
      },
      {
        question: "Can my SaaS accept payments?",
        answer:
          "Yes. We integrate Stripe and other payment gateways.",
      },
    ],

    seo: {
      title:
        "SaaS Development Company | BrandIT Africa",

      description:
        "Launch scalable cloud-based SaaS platforms with BrandIT.",

      keywords: [
        "saas development",
        "cloud software",
        "subscription platform",
      ],
    },
  },

  {
    slug: "website-development",

    icon: Globe,

    title: "Website Development",

    shortDescription:
      "Beautiful websites that convert visitors into customers.",

    description:
      "We design and develop high-performance websites for businesses of every size. From corporate websites to e-commerce platforms and booking systems, every website is optimized for speed, SEO, security and conversions.",

    price: "Starting from 100,000 CFA",

    heroImage: "/images/services/websites.jpg",

    technologies: [
      "Next.js",
      "WordPress",
      "React",
      "Tailwind CSS",
      "Cloudflare",
    ],

    features: [
      "Corporate Websites",
      "Business Websites",
      "Landing Pages",
      "Portfolio Websites",
      "Hotel Booking",
      "Restaurant Ordering",
      "SEO Optimization",
      "CMS Integration",
    ],

    benefits: [
      "Professional Online Presence",
      "Better SEO",
      "Higher Conversion Rates",
      "Fast Loading",
      "Mobile Responsive",
    ],

    industries: [
      "Hotels",
      "Restaurants",
      "Healthcare",
      "Real Estate",
      "Education",
      "Fashion",
      "Government",
    ],

    faqs: [
      {
        question: "Will my website work on mobile?",
        answer:
          "Yes. Every BrandIT website is fully responsive.",
      },
      {
        question: "Can you redesign my current website?",
        answer:
          "Absolutely. We redesign and modernize existing websites.",
      },
    ],

    seo: {
      title:
        "Professional Website Development | BrandIT",

      description:
        "Modern websites designed for growth, speed and SEO.",

      keywords: [
        "website development",
        "web design",
        "corporate website",
        "responsive website",
      ],
    },
  },

  {
    slug: "mobile-app-development",

    icon: Smartphone,

    title: "Mobile Application Development",

    shortDescription:
      "Android and iOS apps built for modern businesses.",

    description:
      "BrandIT develops premium Android and iOS applications with intuitive user experiences, cloud synchronization, secure authentication and scalable backend systems.",

    price: "Starting from 800,000 CFA",

    heroImage: "/images/services/mobile-apps.jpg",

    technologies: [
      "Flutter",
      "React Native",
      "Firebase",
      "Node.js",
      "Supabase",
    ],

    features: [
      "Android Apps",
      "iPhone Apps",
      "Offline Mode",
      "Push Notifications",
      "Payments",
      "Maps",
      "Authentication",
    ],

    benefits: [
      "Reach Mobile Customers",
      "Improve Customer Experience",
      "Increase Sales",
      "Business Automation",
    ],

    industries: [
      "Travel",
      "Healthcare",
      "Restaurants",
      "Education",
      "Retail",
    ],

    faqs: [
      {
        question: "Can you publish the app to Google Play and the App Store?",
        answer:
          "Yes. We handle deployment and publishing.",
      },
      {
        question: "Do you build cross-platform apps?",
        answer:
          "Yes. Flutter allows one codebase for Android and iOS.",
      },
    ],

    seo: {
      title:
        "Mobile App Development Company | BrandIT",

      description:
        "Professional Android and iOS mobile app development services.",

      keywords: [
        "mobile apps",
        "android",
        "ios",
        "flutter",
      ],
    },
  },

    {
    slug: "artificial-intelligence",

    icon: BrainCircuit,

    title: "Artificial Intelligence",

    shortDescription:
      "AI-powered solutions that automate and accelerate business growth.",

    description:
      "BrandIT develops intelligent AI solutions that help businesses automate repetitive tasks, improve customer support, generate insights from data and increase operational efficiency. From AI chatbots to custom machine learning solutions, we help businesses leverage the power of artificial intelligence.",

    price: "Custom Quote",

    heroImage: "/images/services/artificial-intelligence.jpg",

    technologies: [
      "OpenAI",
      "GPT",
      "LangChain",
      "Python",
      "Node.js",
      "Whisper",
      "TensorFlow",
      "Supabase",
    ],

    features: [
      "AI Chatbots",
      "AI Assistants",
      "Document Processing",
      "Speech Recognition",
      "Language Translation",
      "Business Automation",
      "Predictive Analytics",
      "Recommendation Systems",
    ],

    benefits: [
      "Reduce operational costs",
      "Automate customer support",
      "Increase productivity",
      "Improve customer experience",
      "Business intelligence",
    ],

    industries: [
      "Healthcare",
      "Finance",
      "Education",
      "Retail",
      "Travel",
      "Government",
      "Real Estate",
    ],

    faqs: [
      {
        question: "Can AI be integrated into existing software?",
        answer:
          "Yes. We integrate AI into new and existing applications.",
      },
      {
        question: "Do you build custom AI assistants?",
        answer:
          "Yes. We develop AI assistants tailored to your business workflows.",
      },
    ],

    seo: {
      title:
        "Artificial Intelligence Solutions | BrandIT Africa",

      description:
        "AI development, automation, chatbots and intelligent business solutions for African businesses.",

      keywords: [
        "Artificial Intelligence",
        "AI",
        "ChatGPT",
        "Automation",
        "AI Chatbot",
      ],
    },
  },

  {
    slug: "cloud-services",

    icon: Cloud,

    title: "Cloud Services",

    shortDescription:
      "Secure cloud infrastructure for modern businesses.",

    description:
      "BrandIT helps businesses migrate, deploy and manage cloud infrastructure. We provide hosting, backups, disaster recovery, cloud security and scalable infrastructure for applications and enterprise systems.",

    price: "Custom Quote",

    heroImage: "/images/services/cloud-services.jpg",

    technologies: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Cloudflare",
      "Docker",
      "Railway",
      "Supabase",
      "Vercel",
    ],

    features: [
      "Cloud Migration",
      "Cloud Hosting",
      "Infrastructure Management",
      "Automatic Backups",
      "Disaster Recovery",
      "SSL Security",
      "Server Monitoring",
    ],

    benefits: [
      "99.9% uptime",
      "Better security",
      "Scalable infrastructure",
      "Lower maintenance cost",
      "Faster deployments",
    ],

    industries: [
      "Healthcare",
      "Education",
      "Hospitality",
      "Finance",
      "Government",
    ],

    faqs: [
      {
        question: "Can you migrate existing servers?",
        answer:
          "Yes. We migrate applications with minimal downtime.",
      },
      {
        question: "Do you manage cloud servers?",
        answer:
          "Yes. We provide ongoing cloud management and monitoring.",
      },
    ],

    seo: {
      title:
        "Cloud Services Company | BrandIT",

      description:
        "Cloud migration, hosting and infrastructure management across Africa.",

      keywords: [
        "Cloud",
        "AWS",
        "Hosting",
        "Cloud Migration",
      ],
    },
  },

  {
    slug: "digital-marketing",

    icon: Megaphone,

    title: "Digital Marketing",

    shortDescription:
      "Performance marketing that generates measurable business growth.",

    description:
      "BrandIT creates data-driven marketing campaigns using Meta Ads, Google Ads, SEO, content marketing and social media strategies to generate qualified leads and increase revenue.",

    price: "Starting from 150,000 CFA",

    heroImage: "/images/services/digital-marketing.jpg",

    technologies: [
      "Meta Ads",
      "Google Ads",
      "Google Analytics",
      "Search Console",
      "SEMrush",
    ],

    features: [
      "Facebook Ads",
      "Instagram Ads",
      "Google Ads",
      "SEO",
      "Content Marketing",
      "Email Marketing",
      "Social Media Management",
      "Analytics",
    ],

    benefits: [
      "Generate quality leads",
      "Increase online visibility",
      "Improve ROI",
      "Grow brand awareness",
    ],

    industries: [
      "Hotels",
      "Restaurants",
      "Real Estate",
      "Healthcare",
      "Education",
      "Luxury Brands",
    ],

    faqs: [
      {
        question: "Do you manage Meta Ads?",
        answer:
          "Yes. We manage Facebook and Instagram advertising campaigns.",
      },
      {
        question: "Do you provide SEO?",
        answer:
          "Yes. Technical SEO, Local SEO and Content SEO are included.",
      },
    ],

    seo: {
      title:
        "Digital Marketing Agency | BrandIT Africa",

      description:
        "Meta Ads, Google Ads, SEO and digital marketing services for business growth.",

      keywords: [
        "Digital Marketing",
        "SEO",
        "Meta Ads",
        "Google Ads",
      ],
    },
  },

  {
    slug: "branding-communication",

    icon: Palette,

    title: "Branding & Communication",

    shortDescription:
      "Build a memorable brand that customers trust.",

    description:
      "We create complete brand identities, communication strategies, visual systems and premium content that position businesses as industry leaders.",

    price: "Starting from 150,000 CFA",

    heroImage: "/images/services/branding.jpg",

    technologies: [
      "Adobe Illustrator",
      "Photoshop",
      "After Effects",
      "Figma",
    ],

    features: [
      "Logo Design",
      "Brand Identity",
      "Visual Guidelines",
      "Packaging",
      "Content Production",
      "Photography",
      "Videography",
    ],

    benefits: [
      "Professional brand image",
      "Customer trust",
      "Brand consistency",
      "Premium positioning",
    ],

    industries: [
      "Luxury Brands",
      "Fashion",
      "Furniture",
      "Hotels",
      "Restaurants",
      "Healthcare",
    ],

    faqs: [
      {
        question: "Do you redesign existing brands?",
        answer:
          "Yes. We modernize brands while preserving their identity.",
      },
      {
        question: "Can you create a complete brand identity?",
        answer:
          "Yes. Logo, colors, typography, brand guide and marketing assets.",
      },
    ],

    seo: {
      title:
        "Branding Agency | BrandIT Africa",

      description:
        "Professional branding, identity design and communication strategies.",

      keywords: [
        "Branding",
        "Logo Design",
        "Brand Identity",
      ],
    },
  },

  {
    slug: "it-consulting",

    icon: Briefcase,

    title: "IT Consulting",

    shortDescription:
      "Strategic technology consulting for digital transformation.",

    description:
      "We help organizations make informed technology decisions, improve digital processes and implement scalable systems that support long-term business objectives.",

    price: "Custom Quote",

    heroImage: "/images/services/it-consulting.jpg",

    technologies: [
      "Enterprise Architecture",
      "Cloud",
      "AI",
      "Cybersecurity",
    ],

    features: [
      "Technology Audit",
      "Digital Strategy",
      "IT Roadmap",
      "Solution Architecture",
      "Business Analysis",
      "Risk Assessment",
    ],

    benefits: [
      "Reduce technology costs",
      "Improve efficiency",
      "Future-proof your business",
      "Better technology decisions",
    ],

    industries: [
      "Government",
      "Healthcare",
      "Finance",
      "Education",
      "Manufacturing",
    ],

    faqs: [
      {
        question: "Can BrandIT advise before development begins?",
        answer:
          "Yes. Consulting is often the first phase of our projects.",
      },
      {
        question: "Do you work with existing IT teams?",
        answer:
          "Yes. We collaborate with internal teams and external vendors.",
      },
    ],

    seo: {
      title:
        "IT Consulting Services | BrandIT",

      description:
        "Technology consulting and digital transformation services for modern businesses.",

      keywords: [
        "IT Consulting",
        "Digital Transformation",
        "Technology Strategy",
      ],
    },
  },

    {
    slug: "systems-integration",

    icon: Network,

    title: "Systems Integration",

    shortDescription:
      "Connect your business applications into one seamless ecosystem.",

    description:
      "BrandIT integrates your existing software, cloud platforms and third-party services into one unified system. We eliminate data silos, automate workflows and ensure information flows securely between every department.",

    price: "Custom Quote",

    heroImage: "/images/services/systems-integration.jpg",

    technologies: [
      "REST API",
      "GraphQL",
      "Node.js",
      "Docker",
      "Zapier",
      "Make",
      "Webhooks",
      "Supabase",
    ],

    features: [
      "API Development",
      "Third-party Integrations",
      "Workflow Automation",
      "Payment Gateway Integration",
      "CRM Integration",
      "ERP Integration",
      "Cloud Synchronization",
    ],

    benefits: [
      "Eliminate duplicate work",
      "Improve productivity",
      "Centralize business data",
      "Reduce operational costs",
      "Real-time synchronization",
    ],

    industries: [
      "Finance",
      "Healthcare",
      "Retail",
      "Government",
      "Education",
      "Hospitality",
    ],

    faqs: [
      {
        question: "Can you connect existing software together?",
        answer:
          "Yes. We integrate new and legacy systems securely.",
      },
      {
        question: "Can integrations be automated?",
        answer:
          "Absolutely. We automate data exchange and business workflows.",
      },
    ],

    seo: {
      title: "Systems Integration Services | BrandIT",

      description:
        "Integrate business applications, APIs and cloud platforms for maximum productivity.",

      keywords: [
        "Systems Integration",
        "API Integration",
        "Workflow Automation",
      ],
    },
  },

  {
    slug: "ecommerce-solutions",

    icon: ShoppingCart,

    title: "E-Commerce Solutions",

    shortDescription:
      "Complete online stores designed to increase sales.",

    description:
      "We create modern e-commerce platforms with secure payments, inventory management, order tracking, customer accounts and powerful admin dashboards that help businesses sell online with confidence.",

    price: "Starting from 300,000 CFA",

    heroImage: "/images/services/ecommerce.jpg",

    technologies: [
      "WooCommerce",
      "Shopify",
      "Next.js",
      "Stripe",
      "Flutterwave",
      "Paystack",
    ],

    features: [
      "Online Store",
      "Payment Gateway",
      "Inventory Management",
      "Order Tracking",
      "Customer Dashboard",
      "Coupons",
      "Analytics",
    ],

    benefits: [
      "Increase online sales",
      "Accept online payments",
      "Reach more customers",
      "Manage products easily",
    ],

    industries: [
      "Retail",
      "Fashion",
      "Furniture",
      "Beauty",
      "Electronics",
    ],

    faqs: [
      {
        question: "Can multiple payment gateways be added?",
        answer:
          "Yes. We integrate local and international payment providers.",
      },
      {
        question: "Can I manage products myself?",
        answer:
          "Yes. You'll receive an easy-to-use admin dashboard.",
      },
    ],

    seo: {
      title: "E-Commerce Website Development | BrandIT",

      description:
        "Professional online stores with secure payment integration and inventory management.",

      keywords: [
        "E-Commerce",
        "Online Store",
        "WooCommerce",
        "Shopify",
      ],
    },
  },

  {
    slug: "maintenance-support",

    icon: Wrench,

    title: "Maintenance & Technical Support",

    shortDescription:
      "Keep your digital products secure, updated and running smoothly.",

    description:
      "BrandIT provides proactive maintenance, security updates, monitoring, bug fixes and technical support to ensure your software and digital infrastructure remain reliable and high-performing.",

    price: "Monthly Support Plans",

    heroImage: "/images/services/maintenance.jpg",

    technologies: [
      "AWS",
      "Cloudflare",
      "Docker",
      "Linux",
      "Monitoring Tools",
    ],

    features: [
      "24/7 Monitoring",
      "Security Updates",
      "Bug Fixes",
      "Performance Optimization",
      "Database Maintenance",
      "Technical Support",
    ],

    benefits: [
      "Minimize downtime",
      "Improve security",
      "Long-term reliability",
      "Peace of mind",
    ],

    industries: [
      "All Industries",
    ],

    faqs: [
      {
        question: "Do you offer monthly maintenance plans?",
        answer:
          "Yes. Flexible maintenance plans are available for all projects.",
      },
      {
        question: "Can you maintain software developed by another company?",
        answer:
          "Yes. After an assessment, we can take over maintenance.",
      },
    ],

    seo: {
      title: "Website & Software Maintenance | BrandIT",

      description:
        "Maintenance, updates and technical support for websites, apps and software.",

      keywords: [
        "Maintenance",
        "Technical Support",
        "Website Support",
      ],
    },
  },

  {
    slug: "digital-transformation",

    icon: Cpu,

    title: "Digital Transformation",

    shortDescription:
      "Transform traditional businesses into digital-first organizations.",

    description:
      "BrandIT helps organizations modernize operations by combining software, cloud computing, artificial intelligence, automation and digital strategy into a complete transformation roadmap.",

    price: "Custom Quote",

    heroImage: "/images/services/digital-transformation.jpg",

    technologies: [
      "AI",
      "Cloud",
      "Automation",
      "Data Analytics",
      "Business Intelligence",
    ],

    features: [
      "Digital Strategy",
      "Process Automation",
      "Cloud Adoption",
      "Data Analytics",
      "AI Integration",
      "Innovation Roadmap",
    ],

    benefits: [
      "Increase efficiency",
      "Reduce operational costs",
      "Future-proof your business",
      "Drive innovation",
      "Improve customer experience",
    ],

    industries: [
      "Government",
      "Healthcare",
      "Education",
      "Finance",
      "Retail",
      "Hospitality",
    ],

    faqs: [
      {
        question: "What is digital transformation?",
        answer:
          "It is the process of using technology to improve every aspect of a business.",
      },
      {
        question: "Can BrandIT create a digital transformation roadmap?",
        answer:
          "Yes. We assess your business and build a phased implementation strategy.",
      },
    ],

    seo: {
      title: "Digital Transformation Services | BrandIT",

      description:
        "Helping African businesses embrace digital innovation through AI, cloud and automation.",

      keywords: [
        "Digital Transformation",
        "Business Innovation",
        "Automation",
        "AI",
      ],
    },
  },

];