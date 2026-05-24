import { renderInternalElement } from "../../helpers";
import { useBuilderStore } from "../../stores/useBuilderStore";
import styles from "./Canvas.module.css";

function ElementWrapper({ id }: { id: string }) {
  const element = useBuilderStore((state) => state.elements[id]);

  if (!element) return null;

  return renderInternalElement(element);
}

export function Canvas() {
  const pageSettings = useBuilderStore((state) => state.pageSettings);
  const elementOrder = useBuilderStore((state) => state.elementOrder);
  const setActivePanelView = useBuilderStore((s) => s.setActivePanelView);

  return (
    <div
      className={styles.outer}
      onClick={(e) => {
        if (e.target === e.currentTarget) setActivePanelView(null);
      }}
    >
      <div
        className={styles.page}
        style={{
          backgroundColor: pageSettings.backgroundColor,
          maxWidth: `${pageSettings.pageWidth}px`,
        }}
      >
        {elementOrder.map((id) => {
          if (!id) return null;
          return <ElementWrapper key={id} id={id} />;
        })}
      </div>
    </div>
  );
}
