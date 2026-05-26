import type { CSSProperties } from "react";
import { getColor } from "@flodesk/grain";
import type { ElementStyles } from "../types";
import { FONT_WEIGHT } from "../constants";

export function resolveToHex(colorStr: string): string {
  if (!colorStr) return "#ffffff";

  // 1. Validate and return if already a 6-digit hex
  if (/^#[0-9A-F]{6}$/i.test(colorStr)) {
    return colorStr.toLowerCase();
  }

  // 2. Expand and validate if a 3-digit hex
  if (/^#[0-9A-F]{3}$/i.test(colorStr)) {
    const r = colorStr[1];
    const g = colorStr[2];
    const b = colorStr[3];
    const expanded = `#${r}${r}${g}${g}${b}${b}`.toLowerCase();
    if (/^#[0-9A-F]{6}$/i.test(expanded)) {
      return expanded;
    }
  }

  // 3. Browser-computed dynamic CSS Variable / HSL / RGB resolver
  if (typeof window !== "undefined") {
    try {
      const temp = document.createElement("div");
      temp.style.color = getColor(colorStr);
      temp.style.display = "none";
      document.body.appendChild(temp);

      const computed = window.getComputedStyle(temp).color;
      document.body.removeChild(temp);

      const match = computed.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)$/i,
      );
      if (match) {
        const r = parseInt(match[1], 10);
        const g = parseInt(match[2], 10);
        const b = parseInt(match[3], 10);
        const resolved =
          "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
        if (/^#[0-9A-F]{6}$/i.test(resolved)) {
          return resolved.toLowerCase();
        }
      }
    } catch (e) {
      console.error("Error resolving color to hex:", e);
    }
  }

  return "#ffffff";
}

export function resolveTextStyles(s: ElementStyles): CSSProperties {
  return {
    color: s.color ? getColor(s.color) : undefined,
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
    color ? `color:${resolveToHex(color)}` : "",
    fontSize ? `font-size:${fontSize}px` : "",
    `font-weight:${fontWeight ? FONT_WEIGHT[fontWeight] : 400}`,
    "margin:0",
    `line-height:${lineHeight}`,
  ]
    .filter(Boolean)
    .join(";");
}
