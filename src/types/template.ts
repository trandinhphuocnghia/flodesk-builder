import type { PageSettings } from "./page";
import type { BuilderElement } from "./element";

export type Template = {
  id: string;
  name: string;
  thumbnail: string;
  pageSettings: PageSettings;
  elements: { [id: string]: BuilderElement };
  elementOrder: string[];
};
