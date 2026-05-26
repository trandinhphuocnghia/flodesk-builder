import { renderInternalElement } from "../../../helpers";
import { useBuilderStore } from "../../../stores/useBuilderStore";
import styles from "./Canvas.module.css";
import { getColor } from "@flodesk/grain";

function ElementWrapper({ id }: { id: string }) {
  const element = useBuilderStore((state) => state.elements[id]);

  if (!element) return null;

  return renderInternalElement(element);
}

export function Page() {
  const pageSettings = useBuilderStore((state) => state.pageSettings);
  const elementOrder = useBuilderStore((state) => state.elementOrder);
  const isActive = useBuilderStore((s) => s.activePanelView === "page");
  const setActivePanelView = useBuilderStore((s) => s.setActivePanelView);
  const setActiveElementId = useBuilderStore((s) => s.setActiveElementId);

  return (
    <div
      className={`${styles.page} ${isActive ? styles.active : ""}`}
      style={{
        backgroundColor: getColor(pageSettings.backgroundColor),
        maxWidth: `${pageSettings.pageWidth}px`,
      }}
      onClick={(e) => {
        e.stopPropagation();
        setActivePanelView("page");
        setActiveElementId(null);
      }}
    >
      {elementOrder.map((id) => {
        if (!id) return null;
        return <ElementWrapper key={id} id={id} />;
      })}
    </div>
  );
}
