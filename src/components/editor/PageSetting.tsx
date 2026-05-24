import { Box, Slider, Text } from "@flodesk/grain";
import { useBuilderStore } from "../../stores/useBuilderStore";

export function PageSetting() {
  const pageWidth = useBuilderStore((s) => s.pageSettings.pageWidth);
  const updatePageSettings = useBuilderStore((s) => s.updatePageSettings);

  return (
    <Box padding="l">
      <Text size="m" weight="medium">
        Page Settings
      </Text>

      {/**
       * Missing Color Picker
       */}

      <Box paddingTop="l">
        <Slider
          label={`Page width: ${pageWidth}px`}
          min={400}
          max={1200}
          step={10}
          value={pageWidth}
          onChange={(e) =>
            updatePageSettings({ pageWidth: Number(e.target.value) })
          }
        />
      </Box>
    </Box>
  );
}
