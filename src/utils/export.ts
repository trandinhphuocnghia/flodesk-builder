import { FONT_WEIGHT } from "../constants";
import type { BuilderState, BuilderElement, ElementStyles } from "../types";

export function escapeHTML(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function isSafeUrl(url: string): boolean {
  return (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("/")
  );
}

function renderTextElement(
  tag: "h1" | "p",
  lineHeight: string,
  styles: ElementStyles,
  content: string
): string {
  const { color, fontSize, fontWeight } = styles;
  const style = [
    color ? `color:${color}` : "",
    fontSize ? `font-size:${fontSize}px` : "",
    `font-weight:${fontWeight ? FONT_WEIGHT[fontWeight] : 400}`,
    "margin:0",
    `line-height:${lineHeight}`,
    "padding:16px 32px",
  ]
    .filter(Boolean)
    .join(";");

  return `<${tag} style="${style}">${escapeHTML(content)}</${tag}>`;
}

function renderElement(element: BuilderElement): string {
  switch (element.type) {
    case "image": {
      const src = isSafeUrl(element.src) ? element.src : "";
      const alt = escapeHTML(element.alt);
      return `<img src="${src}" alt="${alt}" style="display:block;width:100%;height:auto;" />`;
    }
    case "title":
      return renderTextElement("h1", "1.2", element.styles, element.content);
    case "paragraph":
      return renderTextElement("p", "1.6", element.styles, element.content);
  }
}

export function exportHTML(store: BuilderState): string {
  const { pageSettings, elements, elementOrder } = store;

  const elementsHTML = elementOrder
    .map((id) => elements[id])
    .filter(Boolean)
    .map(renderElement)
    .join("\n    ");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Page</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 32px 16px;
      background-color: #e8e8e8;
    }
    .page {
      max-width: ${pageSettings.pageWidth}px;
      margin: 0 auto;
      background-color: ${pageSettings.backgroundColor};
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
