import { create } from "zustand";
import { persist, type PersistOptions } from "zustand/middleware";
import type { BuilderStore } from "../types";
import { STORAGE_KEY } from "../constants";
import { createDebouncedSetItem } from "../helpers/store";
import { createElementSlice, createPageSlice, createUISlice } from "./slices";

type BuilderPersistedState = Pick<
  BuilderStore,
  "templateId" | "pageSettings" | "elements" | "elementOrder"
>;

let lastStringifiedState = "";
const debouncedSetItem = createDebouncedSetItem((status) =>
  useBuilderStore.getState().setIsSaving(status),
);
const persisConfig: PersistOptions<BuilderStore, BuilderPersistedState> = {
  name: STORAGE_KEY,
  partialize: (state) => ({
    templateId: state.templateId,
    pageSettings: state.pageSettings,
    elements: state.elements,
    elementOrder: state.elementOrder,
  }),

  storage: {
    getItem: (name) => {
      const str = localStorage.getItem(name);
      return str ? JSON.parse(str) : null;
    },
    setItem: (name, value) => {
      const stringifiedValue = JSON.stringify(value);

      if (stringifiedValue === lastStringifiedState) return;

      lastStringifiedState = stringifiedValue;

      debouncedSetItem(name, stringifiedValue);
    },
    removeItem: (name) => localStorage.removeItem(name),
  },
};

export const useBuilderStore = create<BuilderStore>()(
  persist(
    (set, get, api) => ({
      ...createUISlice(set, get, api),
      ...createPageSlice(set, get, api),
      ...createElementSlice(set, get, api),

      templateId: null,
      setTemplate: (template) =>
        set({
          templateId: template.id,
          pageSettings: { ...template.pageSettings },
          elements: { ...template.elements },
          elementOrder: [...template.elementOrder],
          activePanelView: null,
          activeElementId: null,
        }),
    }),
    persisConfig,
  ),
);
