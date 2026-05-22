import { Box, Text, Button } from "@flodesk/grain";
import type { Template } from "../../types";
import styles from "./TemplateCard.module.css";

type Props = {
  template: Template;
  onSelect: (template: Template) => void;
};

export function TemplateCard({ template, onSelect }: Props) {
  const thumbnail =
    template.thumbnail ||
    `https://placehold.co/400x300/${template.pageSettings.backgroundColor.replace(
      "#",
      "",
    )}/ffffff?text=${encodeURIComponent(template.name)}`;

  return (
    <Box
      shadow="s"
      borderSide="all"
      overflow="hidden"
      radius="var(--grn-card-radius)"
      className={styles.card}
    >
      <Box
        aspectRatio="4/3"
        position="relative"
        backgroundColor="background2"
        borderSide="bottom"
      >
        <img
          src={thumbnail}
          alt={template.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div className={styles.overlay}>
          <Button onClick={() => onSelect(template)}>Use this template</Button>
        </div>
      </Box>

      {/* Info */}
      <Box padding="var(--grn-card-padding)" backgroundColor="background">
        <Text color="content2" size="s">
          PAGE TEMPLATE
        </Text>
        <Text trimTop>{template.name}</Text>
      </Box>
    </Box>
  );
}
