import { useBuilderStore } from "../stores/useBuilderStore";

export function useElementSelect(id: string) {
  const setActivePanelView = useBuilderStore((s) => s.setActivePanelView);
  const setActiveElementId = useBuilderStore((s) => s.setActiveElementId);
  const isSelected = useBuilderStore((s) => s.activeElementId === id);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePanelView("element");
    setActiveElementId(id);
  };

  return { handleClick, isSelected };
}
