import { Box, Flex, IconPencil, Text } from "@flodesk/grain";
import { useBuilderStore } from "../../stores/useBuilderStore";
import { PageSetting } from "./PageSetting";
import { ParagraphSetting } from "./ParagraphSetting";
import { TitleSetting } from "./TitleSetting";

const ELEMENT_SETTINGS_REGISTRY: Record<string, React.ElementType> = {
  title: TitleSetting,
  paragraph: ParagraphSetting,
};

const ElementSettingWrapper = ({ id }: { id: string }) => {
  const element = useBuilderStore((s) => s.elements[id]);

  if (!element) return null;

  const ActiveSetting = ELEMENT_SETTINGS_REGISTRY[element.type];

  if (!ActiveSetting) {
    return null;
  }

  return <ActiveSetting element={element} />;
};

function EmptyState() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ height: "100%", padding: "32px", textAlign: "center" }}
    >
      <Box
        width="32px"
        height="32px"
        radius="round"
        color="content3"
        style={{
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconPencil />
      </Box>

      <Text
        size="m"
        weight="medium"
        color="content2"
        style={{ marginBottom: "8px" }}
      >
        No element selected
      </Text>

      <Text size="s" color="content3">
        Click on any element on the canvas to edit its properties, or click the
        background to edit page settings.
      </Text>
    </Flex>
  );
}

export function SettingPanel() {
  const activePanelView = useBuilderStore((s) => s.activePanelView);
  const activeId = useBuilderStore((s) => s.activeElementId);

  if (activePanelView === "page") {
    return <PageSetting />;
  }

  if (activePanelView === "element" && activeId) {
    return <ElementSettingWrapper id={activeId} />;
  }

  return <EmptyState />;
}
