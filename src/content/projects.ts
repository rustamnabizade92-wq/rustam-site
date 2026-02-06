export type ProjectType = "film" | "photo" | "mixed";

export type Chapter = {
  id: string;
  titleKey: string;
  textKey: string;
  images: string[];
};

export type Project = {
  slug: string;
  type: ProjectType;
  year: string;
  country: string;
  tag: string;

  titleKey: string;
  kickerKey: string;
  leadKey: string;

  cover: string;
  hero: string;
  previewVideo?: string;
  youtubeId?: string;

  gallery?: string[];
  chapters?: Chapter[];

  featured?: boolean;
};

export const projects: Project[] = [
  /* =======================
     UZBEKISTAN — FEATURED
  ======================== */
  {
    slug: "uzbekistan",
    type: "mixed",
    year: "2025",
    country: "Uzbekistan",
    tag: "Silk Road",

    kickerKey: "uzb.kicker",
    titleKey: "uzb.title",
    leadKey: "uzb.lead",

    cover: "/work/uzbekistan/cover.jpg",
    hero: "/work/uzbekistan/hero.jpg",
    previewVideo: "/work/uzbekistan/preview.MP4",

    // ✅ real YouTube ID
    youtubeId: "O01YUOVQ_xc",

    gallery: [
      "/work/uzbekistan/1.jpg",
      "/work/uzbekistan/2.jpg",
      "/work/uzbekistan/3.jpg",
      "/work/uzbekistan/4.jpg",
      "/work/uzbekistan/5.jpg",
      "/work/uzbekistan/6.jpg",
    ],

    featured: true,
  },

  /* =======================
     TURKEY
  ======================== */
  {
    slug: "turkey",
    type: "mixed",
    year: "2024",
    country: "Turkey",
    tag: "GoTürkiye",

    kickerKey: "tr.kicker",
    titleKey: "tr.title",
    leadKey: "tr.lead",

    cover: "/work/turkey/cover.jpg",
    hero: "/work/turkey/hero.jpg",

    // ⛔ keep undefined until real video is ready
    // youtubeId: "xxxx",

    featured: true,
  },

  /* =======================
     INDIA
  ======================== */
  {
    slug: "india",
    type: "mixed",
    year: "2023",
    country: "India",
    tag: "Cultural Landscapes",

    kickerKey: "in.kicker",
    titleKey: "in.title",
    leadKey: "in.lead",

    cover: "/work/india/cover.jpg",
    hero: "/work/india/hero.jpg",

    featured: true,
  },

  /* =======================
     UNITED KINGDOM
  ======================== */
  {
    slug: "uk",
    type: "mixed",
    year: "2022",
    country: "United Kingdom",
    tag: "London & Beyond",

    kickerKey: "uk.kicker",
    titleKey: "uk.title",
    leadKey: "uk.lead",

    cover: "/work/uk/cover.jpg",
    hero: "/work/uk/hero.jpg",

    featured: true,
  },
];
