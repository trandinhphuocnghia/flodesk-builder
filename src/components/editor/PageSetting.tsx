import { Box, Flex, Slider, Text } from "@flodesk/grain";
import { useBuilderStore } from "../../stores/useBuilderStore";
import { ColorPicker } from "./ColorPicker";

export function PageSetting() {
  const pageWidth = useBuilderStore((s) => s.pageSettings.pageWidth);
  const backgroundColor = useBuilderStore((s) => s.pageSettings.backgroundColor);
  const updatePageSettings = useBuilderStore((s) => s.updatePageSettings);

  return (
    <Flex direction="column" gap="l" padding="l" style={{ width: "100%" }}>
      {/* Panel Header */}
      <Box width="100%">
        <Text size="l" weight="bold" color="content">
          Page Settings
        </Text>
        <Box
          borderSide="bottom"
          borderWidth="1px"
          borderColor="border"
          paddingTop="xs"
          width="100%"
        />
      </Box>

      {/* Color Setting Group */}
      <Flex direction="column" gap="xs" width="100%">
        <Text size="s" weight="medium" color="content2">
          Background Color
        </Text>
        <ColorPicker
          color={backgroundColor}
          onChange={(color) => {
            updatePageSettings({ backgroundColor: color });
          }}
          label="Canvas Background"
        />
      </Flex>

      {/* Page Width Setting Group */}
      <Flex direction="column" gap="xs" width="100%">
        <Flex direction="row" justifyContent="space-between" alignItems="center" width="100%">
          <Text size="s" weight="medium" color="content2">
            Page width
          </Text>
          <Text size="s" weight="medium" color="content3">
            {pageWidth}px
          </Text>
        </Flex>
        <Slider
          min={400}
          max={1200}
          step={10}
          value={pageWidth}
          onChange={(e) =>
            updatePageSettings({ pageWidth: Number(e.target.value) })
          }
        />
      </Flex>
    </Flex>
  );
}
