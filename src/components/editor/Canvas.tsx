import { renderElement } from "../../helpers";
import { useBuilderStore } from "../../stores/useBuilderStore";
import styles from "./Canvas.module.css";

function ElementWrapper({ id }: { id: string }) {
  const element = useBuilderStore((state) => state.elements[id]);

  if (!element) return null;

  return renderElement(element);
}

export function Canvas() {
  const pageSettings = useBuilderStore((state) => state.pageSettings);
  const elementOrder = useBuilderStore((state) => state.elementOrder);

  return (
    <div className={styles.outer}>
      <div
        className={styles.page}
        style={{
          backgroundColor: pageSettings.backgroundColor,
          maxWidth: `${pageSettings.pageWidth}px`,
        }}
      >
        {elementOrder.map((id) => {
          if (!id) return null;
          return <ElementWrapper id={id} />;
        })}
      </div>
    </div>
  );
}
