export type ElementStyles = {
  color?: string;
  fontSize?: number;
  fontWeight?: "Light" | "Regular" | "Bold";
  widthPercent?: number;
  align?: "left" | "center" | "right";
};

export type TextStyles = {
  color?: string;
  fontSize?: number;
  fontWeight?: "Light" | "Regular" | "Bold";
};

export type ImageStyles = {
  widthPercent?: number;
  align?: "left" | "center" | "right";
};

export type TitleElement = {
  id: string;
  type: "title";
  content: string;
  styles: TextStyles;
};

export type ParagraphElement = {
  id: string;
  type: "paragraph";
  content: string;
  styles: TextStyles;
};

export type ImageElement = {
  id: string;
  type: "image";
  src: string;
  alt: string;
  styles: ImageStyles;
};

export type ElementContents = {
  content?: string;
  src?: string;
  alt?: string;
};

export type BuilderElement = TitleElement | ParagraphElement | ImageElement;
