import { Box, Text, Button, getColor } from "@flodesk/grain";
import type { Template } from "../../types";
import styles from "./TemplateCard.module.css";

type Props = {
  template: Template;
  onSelect: (template: Template) => void;
};

export function TemplateCard({ template, onSelect }: Props) {
  const bgColor = template.pageSettings?.backgroundColor || "#ffffff";

  return (
    <Box
      cursor="pointer"
      maxWidth={42}
      position="relative"
      className={`grn-card-container ${styles.card}`}
    >
      <Box
        aspectRatio="1/1"
        position="relative"
        borderSide="all"
        borderWidth="1px"
        borderColor="border"
        radius="l"
        shadow="s"
        shadowHover="m"
        transition="hover"
        overflow="hidden"
        style={{ backgroundColor: getColor(bgColor) }}
      >
        <Box className={styles.overlay}>
          <Button variant="accent" onClick={() => onSelect(template)}>
            <Text weight="medium">Choose this template</Text>
          </Button>
        </Box>
      </Box>
      <Box
        className="grn-card"
        padding="var(--grn-card-padding)"
        backgroundColor="background"
      >
        <Text size="l" weight="medium" color="content" trimTop>
          {template.name}
        </Text>
      </Box>
    </Box>
  );
}
