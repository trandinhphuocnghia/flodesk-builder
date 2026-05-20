export type ElementStyles = {
  color?: string;
  fontSize?: number;
  fontWeight?: "Light" | "Regular" | "Bold";
};

export type TitleElement = {
  id: string;
  type: "title";
  content: string;
  styles: ElementStyles;
};

export type ParagraphElement = {
  id: string;
  type: "paragraph";
  content: string;
  styles: ElementStyles;
};

export type ImageElement = {
  id: string;
  type: "image";
  src: string;
  alt: string;
};

export type BuilderElement = TitleElement | ParagraphElement | ImageElement;
