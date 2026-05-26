import type {
  BuilderElement,
  BuilderState,
  ImageElement,
  ParagraphElement,
  TitleElement,
} from "../types";
import { escapeHTML, isSafeUrl } from "../utils";
import { buildExportTextStyle, resolveToHex } from "./style";

function renderTitleElement(el: TitleElement) {
  const style = buildExportTextStyle(el.styles, "1.2");

  return `<h1 style="${style}">${escapeHTML(el.content)}</h1>`;
}

function renderImageElement(el: ImageElement) {
  const { src, alt, styles } = el;
  const safeSrc = isSafeUrl(src) ? src : "";
  const safeAlt = escapeHTML(alt);
  const widthPercent = styles?.widthPercent ?? 100;
  const align = styles?.align ?? "center";
  const alignToMargin: Record<string, string> = {
    center: "auto",
    left: "0 auto 0 0",
    right: "0 0 0 auto",
  };
  const margin = alignToMargin[align];

  return `<div style="width:${widthPercent}%;margin:${margin};"><img src="${safeSrc}" alt="${safeAlt}" style="display:block;width:100%;height:auto;" /></div>`;
}

function renderParagraphElement(el: ParagraphElement): string {
  const style = buildExportTextStyle(el.styles, "1.6");

  return `<p style="${style}">${escapeHTML(el.content)}</p>`;
}

type ElementRenderer = (element: BuilderElement) => string;
//add the new record if we have a new type of Element like: table, video...
const ELEMENT_REGISTRY: Record<string, ElementRenderer> = {
  image: (el) => renderImageElement(el as ImageElement),
  title: (el) => renderTitleElement(el as TitleElement),
  paragraph: (el) => renderParagraphElement(el as ParagraphElement),
};

function renderExportElement(element: BuilderElement): string {
  const renderer = ELEMENT_REGISTRY[element.type];

  if (!renderer) {
    return "";
  }

  return renderer(element);
}

/**
 * From BuilderState to html string.
 * @param {BuilderState} store - current state persis on LocalStorage
 * @returns {string} the HTML string after santized string input, mapped by format.
 */
export function exportHTML(store: BuilderState): string {
  const { pageSettings, elements, elementOrder } = store;

  const elementsHTML = elementOrder
    .map((id) => elements[id])
    .filter(Boolean)
    .map(renderExportElement)
    .join("\n    ");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Page</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap" rel="stylesheet" />
 <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 32px 16px;
      background-color: #e8e8e8;
      font-family: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    h1, h2, h3, h4, h5, h6, p {
      margin: 0;
      padding: 0;
    }
    .page {
      max-width: ${pageSettings.pageWidth}px;
      margin: 0 auto;
      background-color: ${resolveToHex(pageSettings.backgroundColor)};
      overflow: hidden;
    }
  </style>
</head>
<body>
  <div class="page">
    ${elementsHTML}
  </div>
</body>
</html>`;
}
