import type { PageSettings } from "./page";
import type { BuilderElement } from "./element";
import type { Template } from "./template";

export type BuilderState = {
  templateId: string | null;
  pageSettings: PageSettings;
  elements: { [id: string]: BuilderElement };
  elementOrder: string[];
  activeElementId: string | null;
};

export type BuilderActions = {
  setTemplate: (template: Template) => void;
};
