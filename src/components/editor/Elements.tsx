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
  borderSide: "all",
  borderColorHover: "blue5",
  transition: "var(--grn-transition-leave)",
  transitionHover: "var(--grn-transition-hover)",
  shadow: "s",
  shadowHover: "m",
  position: "relative",
} as const;

export function ImageElement({ element }: { element: ImageElementType }) {
  return (
    <Box data-block-element={element.id}>
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
      borderColor={isSelected ? "blue5" : undefined}
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
      borderColor={isSelected ? "blue5" : undefined}
    >
      <p style={{ ...resolveTextStyles(element.styles), lineHeight: 1.6 }}>
        {element.content}
      </p>
    </Box>
  );
}
