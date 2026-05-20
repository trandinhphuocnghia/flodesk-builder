import type { PageSettings } from "./page";
import type { BuilderElement } from "./element";

export type BuilderState = {
  templateId: string | null;
  pageSettings: PageSettings;
  elements: { [id: string]: BuilderElement };
  elementOrder: string[];
  activeElementId: string | null;
};
