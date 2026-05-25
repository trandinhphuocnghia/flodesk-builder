import { Arrange, Box, Text } from "@flodesk/grain";
import { TemplateCard } from "../components/gallery/TemplateCard";
import { templates } from "../data/template";
import { useBuilderStore } from "../stores/useBuilderStore";
import type { Template } from "../types";
import { useNavigate } from "react-router-dom";

export function GalleryPage() {
  const navigate = useNavigate();
  const setTemplate = useBuilderStore((state) => state.setTemplate);

  function handleSelect(template: Template) {
    setTemplate(template);
    navigate(`/${template.id}/build`);
  }

  return (
    <Box
      padding="xl"
      minHeight="100vh"
      backgroundColor="background2"
      className="grn-context"
    >
      <Box maxWidth="1100px" style={{ margin: "0 auto" }}>
        <Box
          paddingTop="xxl"
          paddingBottom="xxl"
          style={{ textAlign: "center" }}
        >
          <Text
            size="xxl"
            weight="bold"
            color="content"
            style={{ fontSize: "42px", lineHeight: "1.2" }}
          >
            Choose a starting point
          </Text>
          <Box paddingTop="s">
            <Text size="m" color="content3">
              Select a template to customize or start with a clean slate.
            </Text>
          </Box>
        </Box>

        <Arrange
          columns={{
            mobile: "1fr",
            tablet: "repeat(2, 1fr)",
            default: "repeat(4, 1fr)",
          }}
          gap={{
            mobile: "l",
            default: "xl",
          }}
        >
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelect={handleSelect}
            />
          ))}
        </Arrange>
      </Box>
    </Box>
  );
}
