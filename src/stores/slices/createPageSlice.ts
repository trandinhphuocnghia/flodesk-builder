import type { StateCreator } from "zustand";
import type { BuilderStore } from "../../types";

type PageSlice = Pick<BuilderStore, "pageSettings" | "updatePageSettings">;

export const createPageSlice: StateCreator<PageSlice> = (set) => ({
  pageSettings: {
    backgroundColor: "#ffffff",
    pageWidth: 800,
  },

  updatePageSettings: (updates) =>
    set((state) => ({
      pageSettings: {
        ...state.pageSettings,
        ...updates,
      },
    })),
});
