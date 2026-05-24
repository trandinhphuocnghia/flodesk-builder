import { Box, Slider, Text, Textarea } from "@flodesk/grain";
import { useBuilderStore } from "../../stores/useBuilderStore";
import type { ParagraphElement } from "../../types";

interface Props {
  element: ParagraphElement;
}

export function ParagraphSetting({ element }: Props) {
  const updateElementStyles = useBuilderStore((s) => s.updateElementStyles);
  const updateElement = useBuilderStore((s) => s.updateElement);

  return (
    <Box padding="l">
      <Text size="m" weight="medium">
        Paragraph Settings
      </Text>
      <Box paddingTop="l">
        <Slider
          label={`Fontsize: ${element.styles.fontSize}px`}
          min={8}
          max={24}
          step={2}
          value={element.styles.fontSize}
          onChange={(e) => {
            updateElementStyles(element.id, {
              fontSize: Number(e.target.value),
            });
          }}
        />
      </Box>
      <Box paddingTop="l">
        <Textarea
          label="Title Content"
          onChange={(e) =>
            updateElement(element.id, {
              content: e.target.value,
            })
          }
          value={element.content}
        />
      </Box>
    </Box>
  );
}
