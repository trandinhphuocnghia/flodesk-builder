import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BuilderActions, BuilderState } from "../types";
import { STORAGE_KEY } from "../constants";

type BuilderStore = BuilderState & BuilderActions;
export const useBuilderStore = create<BuilderStore>()(
  persist(
    (set): BuilderStore => ({
      templateId: null,
      pageSettings: {
        backgroundColor: "#ffffff",
        pageWidth: 800,
      },
      elements: {},
      elementOrder: [],
      activeElementId: null,

      setTemplate: (template) =>
        set({
          templateId: template.id,
          pageSettings: { ...template.pageSettings },
          elements: { ...template.elements },
          elementOrder: [...template.elementOrder],
          activeElementId: null,
        }),
    }),
    {
      name: STORAGE_KEY,
      partialize: (state) => ({
        templateId: state.templateId,
        pageSettings: state.pageSettings,
        elements: state.elements,
        elementOrder: state.elementOrder,
      }),
    },
  ),
);
