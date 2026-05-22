import type { ElementStyles } from "../types";

export const STORAGE_KEY = "flodesk-builder";

export const FONT_WEIGHT: Record<
  NonNullable<ElementStyles["fontWeight"]>,
  number
> = {
  Light: 300,
  Regular: 400,
  Bold: 700,
};
