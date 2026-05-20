import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BuilderState } from "../types";
import { STORAGE_KEY } from "../constants";

export const useBuilderStore = create<BuilderState>()(
  persist(
    (): BuilderState => ({
      templateId: null,
      pageSettings: {
        backgroundColor: "#ffffff",
        pageWidth: 800,
      },
      elements: {},
      elementOrder: [],
      activeElementId: null,
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
