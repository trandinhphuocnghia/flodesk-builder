import type {
  ImageElement as ImageElementType,
  TitleElement as TitleElementType,
  ParagraphElement as ParagraphElementType,
} from "../../types";
import { resolveTextStyles } from "../../helpers";
import styles from "./Canvas.module.css";

export function ImageElement({ element }: { element: ImageElementType }) {
  return (
    <div className={styles.element}>
      <img src={element.src} alt={element.alt} className={styles.image} />
    </div>
  );
}

export function TitleElement({ element }: { element: TitleElementType }) {
  return (
    <div className={styles.element}>
      <h1 style={{ ...resolveTextStyles(element.styles), lineHeight: 1.2 }}>
        {element.content}
      </h1>
    </div>
  );
}

export function ParagraphElement({
  element,
}: {
  element: ParagraphElementType;
}) {
  return (
    <div className={styles.element}>
      <p style={{ ...resolveTextStyles(element.styles), lineHeight: 1.6 }}>
        {element.content}
      </p>
    </div>
  );
}
