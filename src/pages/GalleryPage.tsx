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
    <Box padding="l" className="grn-context">
      <Box paddingBottom="xl">
        <Text size="xl" weight="medium">
          Choose a template to start
        </Text>
      </Box>

      <Arrange
        columns={{
          mobile: "1fr",
          tablet: "repeat(2, 1fr)",
          default: "repeat(3, 1fr)",
        }}
        gap={{ default: "l" }}
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
  );
}
