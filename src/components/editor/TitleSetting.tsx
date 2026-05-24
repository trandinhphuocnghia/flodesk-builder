import { Box, Slider, Text, TextInput } from "@flodesk/grain";
import { useBuilderStore } from "../../stores/useBuilderStore";
import type { TitleElement } from "../../types";

interface TitleSettingProps {
  element: TitleElement;
}

export function TitleSetting({ element }: TitleSettingProps) {
  const updateElementStyles = useBuilderStore((s) => s.updateElementStyles);
  const updateElement = useBuilderStore((s) => s.updateElement);

  return (
    <Box padding="l">
      <Text size="m" weight="medium">
        Title Settings
      </Text>
      <Box paddingTop="l">
        <Slider
          label={`Fontsize: ${element.styles.fontSize}px`}
          min={8}
          max={36}
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
        <TextInput
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
