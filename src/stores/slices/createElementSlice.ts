import type { StateCreator } from "zustand";
import type { BuilderElement, BuilderStore } from "../../types";

type ElementSlice = Pick<
  BuilderStore,
  "elements" | "elementOrder" | "updateElementStyles" | "updateElement"
>;
export const createElementSlice: StateCreator<ElementSlice> = (set) => ({
  elements: {},
  elementOrder: [],

  updateElement: (id, updates) =>
    set((state) => {
      const element = state.elements[id];
      if (!element) return state;

      return {
        elements: {
          ...state.elements,
          [id]: { ...element, ...updates } as BuilderElement,
        },
      };
    }),

  updateElementStyles: (id, newStyles) =>
    set((state) => {
      const element = state.elements[id];
      if (!element || !("styles" in element)) return state;

      return {
        elements: {
          ...state.elements,
          [id]: {
            ...element,
            styles: { ...element.styles, ...newStyles },
          } as BuilderElement,
        },
      };
    }),
});
