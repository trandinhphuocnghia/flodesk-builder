import { Box, Flex, Text, Slider, Textarea, TextToggle, TextToggleGroup } from "@flodesk/grain";
import { useBuilderStore } from "../../stores/useBuilderStore";
import type { ParagraphElement } from "../../types";
import { ColorPicker } from "./ColorPicker";

interface Props {
  element: ParagraphElement;
}

export function ParagraphSetting({ element }: Props) {
  const updateElementStyles = useBuilderStore((s) => s.updateElementStyles);
  const updateElement = useBuilderStore((s) => s.updateElement);

  return (
    <Flex direction="column" gap="l" padding="l" style={{ width: "100%" }}>
      <Box width="100%">
        <Text size="l" weight="bold" color="content">
          Paragraph Settings
        </Text>
        <Box
          borderSide="bottom"
          borderWidth="1px"
          borderColor="border"
          paddingTop="xs"
          width="100%"
        />
      </Box>

      <Flex direction="column" gap="xs" width="100%">
        <Text size="s" weight="medium" color="content2">
          Color
        </Text>
        <ColorPicker
          color={element.styles.color}
          onChange={(color) => {
            updateElementStyles(element.id, { color });
          }}
          label="Paragraph Color"
        />
      </Flex>

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
          max={48}
          step={2}
          value={element.styles.fontSize}
          onChange={(e) => {
            updateElementStyles(element.id, {
              fontSize: Number(e.target.value),
            });
          }}
        />
      </Flex>

      <Flex direction="column" gap="xs" width="100%">
        <Text size="s" weight="medium" color="content2">
          Font weight
        </Text>
        <TextToggleGroup hasFullWidth>
          {(["Light", "Regular", "Bold"] as const).map((w) => (
            <TextToggle
              key={w}
              isActive={element.styles.fontWeight === w}
              onClick={() => updateElementStyles(element.id, { fontWeight: w })}
            >
              {w}
            </TextToggle>
          ))}
        </TextToggleGroup>
      </Flex>

      <Flex direction="column" gap="xs" width="100%">
        <Text size="s" weight="medium" color="content2">
          Paragraph Content
        </Text>
        <Textarea
          onChange={(e) =>
            updateElement(element.id, {
              content: e.target.value,
            })
          }
          value={element.content}
          style={{ minHeight: "120px", width: "100%" }}
        />
      </Flex>
    </Flex>
  );
}
