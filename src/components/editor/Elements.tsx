import type {
  ImageElement as ImageElementType,
  TitleElement as TitleElementType,
  ParagraphElement as ParagraphElementType,
} from "../../types";
import { resolveTextStyles } from "../../helpers";
import styles from "./Canvas.module.css";
import { useElementSelect } from "../../hooks";
import { Box } from "@flodesk/grain";

const selectableProps = {
  transition: "var(--grn-transition-leave)",
  transitionHover: "var(--grn-transition-hover)",
  position: "relative",
} as const;

export function ImageElement({ element }: { element: ImageElementType }) {
  const { isSelected, handleClick } = useElementSelect(element.id);

  const widthPercent = element.styles?.widthPercent ?? 100;
  const align = element.styles?.align ?? "center";

  const alignToMargin: Record<
    string,
    { marginLeft: string; marginRight: string }
  > = {
    center: { marginLeft: "auto", marginRight: "auto" },
    left: { marginLeft: "0", marginRight: "auto" },
    right: { marginLeft: "auto", marginRight: "0" },
  };

  return (
    <Box
      {...selectableProps}
      onClick={handleClick}
      data-block-element={element.id}
      className={`${styles.elementWrapper} ${isSelected ? styles.selected : ""}`}
      style={{
        width: `${widthPercent}%`,
        ...alignToMargin[align],
      }}
    >
      <img src={element.src} alt={element.alt} className={styles.image} />
    </Box>
  );
}

export function TitleElement({ element }: { element: TitleElementType }) {
  const { isSelected, handleClick } = useElementSelect(element.id);

  return (
    <Box
      {...selectableProps}
      onClick={handleClick}
      data-block-element={element.id}
      className={`${styles.elementWrapper} ${isSelected ? styles.selected : ""}`}
    >
      <h1 style={{ ...resolveTextStyles(element.styles), lineHeight: 1.2 }}>
        {element.content}
      </h1>
    </Box>
  );
}

export function ParagraphElement({
  element,
}: {
  element: ParagraphElementType;
}) {
  const { isSelected, handleClick } = useElementSelect(element.id);

  return (
    <Box
      {...selectableProps}
      onClick={handleClick}
      data-block-element={element.id}
      className={`${styles.elementWrapper} ${isSelected ? styles.selected : ""}`}
    >
      <p style={{ ...resolveTextStyles(element.styles), lineHeight: 1.6 }}>
        {element.content}
      </p>
    </Box>
  );
}
