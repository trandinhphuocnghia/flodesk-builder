import type { CSSProperties } from "react";
import type { ElementStyles } from "../types";
import { FONT_WEIGHT } from "../constants";

export function resolveTextStyles(s: ElementStyles): CSSProperties {
  return {
    color: s.color,
    fontSize: s.fontSize ? `${s.fontSize}px` : undefined,
    fontWeight: s.fontWeight ? FONT_WEIGHT[s.fontWeight] : 400,
    margin: 0,
  };
}
