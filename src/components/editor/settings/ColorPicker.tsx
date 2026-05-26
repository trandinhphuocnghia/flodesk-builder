import { useState } from "react";
import { Box, Text, Popover, getColor } from "@flodesk/grain";

interface ColorPickerProps {
  color?: string;
  onChange: (color: string) => void;
  label?: string;
}

const NEUTRALS = [
  "background",
  "background2",
  "background3",
  "shadeTone1",
  "shadeTone3",
];
const SOFT_COLORS = [
  "blue1",
  "blue3",
  "red1",
  "red3",
  "yellow1",
  "yellow3",
  "green1",
  "green3",
];
const DARKS = ["shadeTone13", "shadeTone11", "shadeTone9"];
const UI_CONFIG = {
  popoverWidth: "290px",
  swatchSize: "26px",
  triggerIconSize: "22px",
  wheelSize: "28px",
  wheelGradient:
    "linear-gradient(45deg, #ff0000, #ff00f0, #00f0ff, #00ff00, #ffff00, #ff0000)",
};

export function ColorPicker({
  color = "content",
  onChange,
  label,
}: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleColorSelect = (selectedColor: string) => {
    onChange(selectedColor);
    setIsOpen(false);
  };

  const trigger = (
    <Box
      cursor="pointer"
      onClick={() => setIsOpen((prev) => !prev)}
      borderSide="all"
      borderWidth="1px"
      borderColor="border"
      radius="m"
      padding="s"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "var(--grn-color-floatingBackground)",
      }}
    >
      <Box
        width={UI_CONFIG.triggerIconSize}
        height={UI_CONFIG.triggerIconSize}
        radius="l"
        style={{
          backgroundColor: getColor(color),
          border: "1px solid var(--grn-color-border, rgba(0,0,0,0.06))",
          boxShadow: "0 1px 2px var(--grn-color-border, rgba(0,0,0,0.04))",
          flexShrink: 0,
        }}
      />
      <Box style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        {label && (
          <Text size="s" color="content3" weight="medium">
            {label}
          </Text>
        )}
        <Text size="s" color="content" weight="medium">
          {color.toUpperCase()}
        </Text>
      </Box>
    </Box>
  );

  const renderColorGroup = (
    title: string,
    tokens: string[],
    isLast = false,
  ) => {
    return (
      <Box>
        <Text size="s" color="content3">
          {title}
        </Text>
        <Box
          paddingTop="xs"
          paddingBottom={isLast ? "m" : "s"}
          style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
        >
          {tokens.map((token) => {
            const isSelected = color === token;
            return (
              <Box
                key={token}
                width={UI_CONFIG.swatchSize}
                height={UI_CONFIG.swatchSize}
                radius="l"
                cursor="pointer"
                role="button"
                tabIndex={0}
                onClick={() => handleColorSelect(token)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleColorSelect(token);
                  }
                }}
                style={{
                  backgroundColor: getColor(token),
                  border: isSelected
                    ? "2.5px solid var(--grn-color-border2, #000000)"
                    : "1px solid var(--grn-color-border, rgba(0,0,0,0.08))",
                  boxShadow: isSelected
                    ? "0 0 0 1px var(--grn-color-background, #ffffff) inset"
                    : "none",
                  outline: "none",
                }}
              />
            );
          })}
        </Box>
      </Box>
    );
  };

  return (
    <Box position="relative">
      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        trigger={trigger}
        placement="bottomStart"
        width={UI_CONFIG.popoverWidth}
        padding="m"
      >
        <Box padding="xs">
          <Text size="s" color="content2" weight="medium">
            PRESET COLORS
          </Text>

          <Box paddingTop="s">
            {renderColorGroup("NEUTRALS", NEUTRALS)}
            {renderColorGroup("ACCENTS", SOFT_COLORS)}
            {renderColorGroup("DARKS", DARKS, true)}
          </Box>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid var(--grn-color-border, rgba(0,0,0,0.06))",
              margin: "4px 0 12px 0",
            }}
          />

          <Box
            position="relative"
            paddingTop="xs"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Box
              width={UI_CONFIG.wheelSize}
              height={UI_CONFIG.wheelSize}
              radius="l"
              style={{
                background: UI_CONFIG.wheelGradient,
                border: "1px solid var(--grn-color-border, rgba(0,0,0,0.12))",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Box
                width="12px"
                height="12px"
                radius="l"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: getColor(color),
                  border: "2.5px solid var(--grn-color-background, #ffffff)",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
                }}
              />
            </Box>

            <Text size="s" color="content" weight="medium">
              Custom color
            </Text>

            <input
              type="color"
              value={getColor(color)}
              onChange={(e) => onChange(e.target.value)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "pointer",
                border: "none",
                padding: 0,
                margin: 0,
              }}
            />
          </Box>
        </Box>
      </Popover>
    </Box>
  );
}
