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
];
