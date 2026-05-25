import type { Template } from "../types";

export const templates: Template[] = [
  {
    id: "template-light",
    name: "Clean Light",
    thumbnail: "",
    pageSettings: {
      backgroundColor: "#ffffff",
      pageWidth: 800,
    },
    elements: {
      "image-1": {
        id: "image-1",
        type: "image",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        alt: "Hero image",
        styles: {
          widthPercent: 100,
          align: "left",
        },
      },
      "title-1": {
        id: "title-1",
        type: "title",
        content: "Welcome to Your Page",
        styles: {
          color: "#1a1a1a",
          fontSize: 36,
          fontWeight: "Bold",
        },
      },
      "paragraph-1": {
        id: "paragraph-1",
        type: "paragraph",
        content:
          "This is your starting point. Click any element to customize it and make this page truly yours.",
        styles: {
          color: "#555555",
          fontSize: 16,
          fontWeight: "Regular",
        },
      },
    },
    elementOrder: ["image-1", "title-1", "paragraph-1"],
  },
  {
    id: "template-dark",
    name: "Bold Dark",
    thumbnail: "",
    pageSettings: {
      backgroundColor: "#1a1a1a",
      pageWidth: 800,
    },
    elements: {
      "image-1": {
        id: "image-1",
        type: "image",
        src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800",
        alt: "Hero image",
        styles: {
          widthPercent: 100,
          align: "left",
        },
      },
      "title-1": {
        id: "title-1",
        type: "title",
        content: "Make Your Statement",
        styles: {
          color: "#ffffff",
          fontSize: 36,
          fontWeight: "Bold",
        },
      },
      "paragraph-1": {
        id: "paragraph-1",
        type: "paragraph",
        content:
          "Bold. Minimal. Yours. Start customizing to bring your vision to life.",
        styles: {
          color: "#aaaaaa",
          fontSize: 16,
          fontWeight: "Regular",
        },
      },
    },
    elementOrder: ["image-1", "title-1", "paragraph-1"],
  },
  {
    id: "template-blush",
    name: "Soft Blush",
    thumbnail: "",
    pageSettings: {
      backgroundColor: "#fcf4f4",
      pageWidth: 800,
    },
    elements: {
      "title-1": {
        id: "title-1",
        type: "title",
        content: "The Weekly Edit",
        styles: {
          color: "#4a3b3b",
          fontSize: 42,
          fontWeight: "Bold",
        },
      },
      "image-1": {
        id: "image-1",
        type: "image",
        src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
        alt: "Lifestyle image",
        styles: {
          widthPercent: 100,
          align: "left",
        },
      },
      "paragraph-1": {
        id: "paragraph-1",
        type: "paragraph",
        content: "Curated finds, thoughts, and inspiration for the week ahead.",
        styles: {
          color: "#7a6a6a",
          fontSize: 18,
          fontWeight: "Regular",
        },
      },
    },
    elementOrder: ["title-1", "image-1", "paragraph-1"],
  },
  {
    id: "template-sage",
    name: "Earthy Sage",
    thumbnail: "",
    pageSettings: {
      backgroundColor: "#f2f5f1",
      pageWidth: 800,
    },
    elements: {
      "image-1": {
        id: "image-1",
        type: "image",
        src: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800",
        alt: "Nature image",
        styles: {
          widthPercent: 100,
          align: "left",
        },
      },
      "title-1": {
        id: "title-1",
        type: "title",
        content: "Spring Collection Is Here",
        styles: {
          color: "#2d3a2d", // Xanh rêu đậm
          fontSize: 32,
          fontWeight: "Bold",
        },
      },
      "paragraph-1": {
        id: "paragraph-1",
        type: "paragraph",
        content:
          "Enjoy 20% off all organic skincare products this weekend only.",
        styles: {
          color: "#5c6b5c",
          fontSize: 16,
          fontWeight: "Regular",
        },
      },
    },
    elementOrder: ["image-1", "title-1", "paragraph-1"],
  },
  {
    id: "template-midnight",
    name: "Midnight Indigo",
    thumbnail: "",
    pageSettings: {
      backgroundColor: "#0d1b2a",
      pageWidth: 800,
    },
    elements: {
      "title-1": {
        id: "title-1",
        type: "title",
        content: "You're Invited",
        styles: {
          color: "#e0e1dd",
          fontSize: 48,
          fontWeight: "Bold",
        },
      },
      "paragraph-1": {
        id: "paragraph-1",
        type: "paragraph",
        content: "Join us for an exclusive evening of networking and insights.",
        styles: {
          color: "#778da9",
          fontSize: 20,
          fontWeight: "Regular",
        },
      },
      "image-1": {
        id: "image-1",
        type: "image",
        src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800",
        alt: "Event gathering",
        styles: {
          widthPercent: 100,
          align: "left",
        },
      },
    },
    elementOrder: ["title-1", "paragraph-1", "image-1"],
  },
  {
    id: "template-sunshine",
    name: "Bright Yellow",
    thumbnail: "",
    pageSettings: {
      backgroundColor: "#fffdf0",
      pageWidth: 800,
    },
    elements: {
      "image-1": {
        id: "image-1",
        type: "image",
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
        alt: "Sunny beach",
        styles: {
          widthPercent: 100,
          align: "left",
        },
      },
      "title-1": {
        id: "title-1",
        type: "title",
        content: "Hello Sunshine!",
        styles: {
          color: "#d4af37",
          fontSize: 38,
          fontWeight: "Bold",
        },
      },
      "paragraph-1": {
        id: "paragraph-1",
        type: "paragraph",
        content:
          "We are so thrilled to have you in our community. Let's make something beautiful.",
        styles: {
          color: "#6b5b24",
          fontSize: 16,
          fontWeight: "Regular",
        },
      },
    },
    elementOrder: ["image-1", "title-1", "paragraph-1"],
  },
];
