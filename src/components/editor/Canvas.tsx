import { useBuilderStore } from "../../stores/useBuilderStore";
import type { BuilderElement } from "../../types";
import styles from "./Canvas.module.css";
import { ImageElement, ParagraphElement, TitleElement } from "./Elements";

function renderElement(element: BuilderElement) {
  switch (element.type) {
    case "image":
      return <ImageElement key={element.id} element={element} />;
    case "title":
      return <TitleElement key={element.id} element={element} />;
    case "paragraph":
      return <ParagraphElement key={element.id} element={element} />;
  }
}

export function Canvas() {
  const pageSettings = useBuilderStore((state) => state.pageSettings);
  const elements = useBuilderStore((state) => state.elements);
  const elementOrder = useBuilderStore((state) => state.elementOrder);

  return (
    <div className={styles.outer}>
      <div
        className={styles.page}
        style={{
          backgroundColor: pageSettings.backgroundColor,
          maxWidth: `${pageSettings.pageWidth}px`,
        }}
      >
        {elementOrder.map((id) => {
          const element = elements[id];
          if (!element) return null;
          return renderElement(element);
        })}
      </div>
    </div>
  );
}
