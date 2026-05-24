import type { StateCreator } from "zustand";
import type { BuilderStore } from "../../types";

type UISlice = Pick<
  BuilderStore,
  | "activePanelView"
  | "activeElementId"
  | "isSaving"
  | "setIsSaving"
  | "setActivePanelView"
  | "setActiveElementId"
>;

export const createUISlice: StateCreator<UISlice> = (set) => ({
  activePanelView: null,
  activeElementId: null,
  isSaving: false,

  setIsSaving: (status) => set({ isSaving: status }),
  setActivePanelView: (view) => set({ activePanelView: view }),
  setActiveElementId: (id) => set({ activeElementId: id }),
});
