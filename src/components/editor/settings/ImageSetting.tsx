import {
  Box,
  Flex,
  Slider,
  Text,
  TextToggle,
  TextToggleGroup,
} from "@flodesk/grain";
import { useBuilderStore } from "../../../stores/useBuilderStore";
import type { ImageElement } from "../../../types";

interface Props {
  element: ImageElement;
}

export function ImageSetting({ element }: Props) {
  const updateElementStyles = useBuilderStore((s) => s.updateElementStyles);

  const widthPercent = element.styles?.widthPercent ?? 100;
  const align = element.styles?.align ?? "center";

  return (
    <Flex direction="column" gap="l" padding="l" style={{ width: "100%" }}>
      {/* Panel Header */}
      <Box width="100%">
        <Text size="l" weight="bold" color="content">
          Image Settings
        </Text>
        <Box
          borderSide="bottom"
          borderWidth="1px"
          borderColor="border"
          paddingTop="xs"
          width="100%"
        />
      </Box>

      {/* Image Width Setting Group */}
      <Flex direction="column" gap="xs" width="100%">
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Text size="s" weight="medium" color="content2">
            Image width
          </Text>
          <Text size="s" weight="medium" color="content3">
            {widthPercent}%
          </Text>
        </Flex>
        <Slider
          min={10}
          max={100}
          step={5}
          value={widthPercent}
          onChange={(e) => {
            updateElementStyles(element.id, {
              widthPercent: Number(e.target.value),
            });
          }}
        />
      </Flex>

      {/* Alignment Setting Group */}
      <Flex direction="column" gap="xs" width="100%">
        <Text size="s" weight="medium" color="content2">
          Alignment
        </Text>
        <TextToggleGroup hasFullWidth>
          <TextToggle
            isActive={align === "left"}
            onClick={() => {
              updateElementStyles(element.id, { align: "left" });
            }}
          >
            Left
          </TextToggle>
          <TextToggle
            isActive={align === "center"}
            onClick={() => {
              updateElementStyles(element.id, { align: "center" });
            }}
          >
            Center
          </TextToggle>
          <TextToggle
            isActive={align === "right"}
            onClick={() => {
              updateElementStyles(element.id, { align: "right" });
            }}
          >
            Right
          </TextToggle>
        </TextToggleGroup>
      </Flex>
    </Flex>
  );
}
