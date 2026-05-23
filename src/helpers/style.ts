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

export function buildExportTextStyle(
  styles: ElementStyles,
  lineHeight: string,
): string {
  const { color, fontSize, fontWeight } = styles;
  return [
    color ? `color:${color}` : "",
    fontSize ? `font-size:${fontSize}px` : "",
    `font-weight:${fontWeight ? FONT_WEIGHT[fontWeight] : 400}`,
    "margin:0",
    `line-height:${lineHeight}`,
    "padding:16px 32px",
  ]
    .filter(Boolean)
    .join(";");
}
