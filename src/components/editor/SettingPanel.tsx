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

export function SettingPanel() {
  const activePanelView = useBuilderStore((s) => s.activePanelView);
  const activeId = useBuilderStore((s) => s.activeElementId);

  if (activePanelView === "page") {
    return <PageSetting />;
  }

  if (activePanelView === "element" && activeId) {
    return <ElementSettingWrapper id={activeId} />;
  }

  return null;
}
