import { Box, Text, getColor } from "@flodesk/grain";
import type { Template } from "../../types";

type Props = {
  template: Template;
  onSelect: (template: Template) => void;
};

export function TemplateCard({ template, onSelect }: Props) {
  const bgColor = template.pageSettings?.backgroundColor || "#ffffff";

  const handleSelect = () => {
    onSelect(template);
  };

  return (
    <Box
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      width="100%"
    >
      <Box
        role="button"
        tabIndex={0}
        onClick={handleSelect}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleSelect();
          }
        }}
        position="relative"
        borderSide="all"
        borderWidth="1px"
        borderColor="border"
        radius="l"
        shadow="s"
        shadowHover="l"
        transition="hover"
        cursor="pointer"
        style={{
          backgroundColor: getColor(bgColor),
          aspectRatio: "3/4",
          outline: "none",
        }}
      />

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          padding: "0 4px",
        }}
      >
        <Text
          size="xs"
          color="content3"
          weight="medium"
          style={{ letterSpacing: "0.05em", textTransform: "uppercase" }}
        >
          START FROM SCRATCH
        </Text>

        <Text size="l" weight="medium" color="content" trimTop>
          {template.name}
        </Text>
      </Box>
    </Box>
  );
}
