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

  const handleNativeColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
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
        width="22px"
        height="22px"
        radius="l"
        style={{
          backgroundColor: getColor(color),
          border: "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
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
        <Text
          size="s"
          color="content3"
          style={{ fontSize: "10px", letterSpacing: "0.05em" }}
        >
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
                width="26px"
                height="26px"
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
                    : "1px solid rgba(0, 0, 0, 0.08)",
                  boxShadow: isSelected ? "0 0 0 1px #ffffff inset" : "none",
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
        width="290px"
        padding="m"
      >
        <Box padding="xs">
          {/* Preset Swatches Section */}
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

          {/* Custom Selector Section */}
          <Box
            position="relative"
            paddingTop="xs"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            {/* Visual Color Wheel circle trigger for native picker */}
            <Box
              width="28px"
              height="28px"
              radius="l"
              style={{
                background:
                  "linear-gradient(45deg, #ff0000, #ff00f0, #00f0ff, #00ff00, #ffff00, #ff0000)",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                flexShrink: 0,
                position: "relative",
              }}
            >
              {/* Inner active color dot */}
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
                  border: "2.5px solid #ffffff",
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
              onChange={handleNativeColorChange}
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
