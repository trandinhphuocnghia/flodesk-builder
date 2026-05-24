import { Box, Flex, Text, Slider, TextInput } from "@flodesk/grain";
import { useBuilderStore } from "../../stores/useBuilderStore";
import type { TitleElement } from "../../types";
import { ColorPicker } from "./ColorPicker";

interface TitleSettingProps {
  element: TitleElement;
}

export function TitleSetting({ element }: TitleSettingProps) {
  const updateElementStyles = useBuilderStore((s) => s.updateElementStyles);
  const updateElement = useBuilderStore((s) => s.updateElement);

  return (
    <Flex direction="column" gap="l" padding="l" style={{ width: "100%" }}>
      {/* Panel Header */}
      <Box width="100%">
        <Text size="l" weight="bold" color="content">
          Title Settings
        </Text>
        <Box borderSide="bottom" borderWidth="1px" borderColor="border" paddingTop="xs" width="100%" />
      </Box>

      {/* Color Setting Group */}
      <Flex direction="column" gap="xs" width="100%">
        <Text size="s" weight="medium" color="content2">
          Color
        </Text>
        <ColorPicker
          color={element.styles.color}
          onChange={(color) => {
            updateElementStyles(element.id, { color });
          }}
          label="Title Color"
        />
      </Flex>

      {/* Font Size Setting Group */}
      <Flex direction="column" gap="xs" width="100%">
        <Flex direction="row" justifyContent="space-between" alignItems="center" width="100%">
          <Text size="s" weight="medium" color="content2">
            Font size
          </Text>
          <Text size="s" weight="medium" color="content3">
            {element.styles.fontSize}px
          </Text>
        </Flex>
        <Slider
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
      </Flex>

      {/* Title Content Group */}
      <Flex direction="column" gap="xs" width="100%">
        <Text size="s" weight="medium" color="content2">
          Title Content
        </Text>
        <TextInput
          onChange={(e) =>
            updateElement(element.id, {
              content: e.target.value,
            })
          }
          value={element.content}
          style={{ width: "100%" }}
        />
      </Flex>
    </Flex>
  );
}
