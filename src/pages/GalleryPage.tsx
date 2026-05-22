import { Arrange, Box, Text } from "@flodesk/grain";
import { TemplateCard } from "../components/gallery/TemplateCard";
import { templates } from "../data/template";

export function GalleryPage() {
  function handleSelect() {}

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
