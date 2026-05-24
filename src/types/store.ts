import type { PageSettings } from "./page";
import type { BuilderElement, ElementContents, ElementStyles } from "./element";
import type { Template } from "./template";

export type BuilderState = {
  templateId: string | null;
  pageSettings: PageSettings;
  elements: { [id: string]: BuilderElement };
  elementOrder: string[];
  activePanelView: "page" | "element" | null;
  activeElementId: string | null;
  isSaving: boolean;
};

export type BuilderActions = {
  setTemplate: (template: Template) => void;
  setActivePanelView: (view: BuilderState["activePanelView"]) => void;
  setActiveElementId: (id: string) => void;
  setIsSaving: (status: boolean) => void;

  updatePageSettings: (updates: Partial<PageSettings>) => void;
  updateElement: (id: string, updates: ElementContents) => void;
  updateElementStyles: (id: string, updates: ElementStyles) => void;
};

export type BuilderStore = BuilderState & BuilderActions;
