import { useBuilderStore } from "../../../stores/useBuilderStore";
import styles from "./Canvas.module.css";
import { Page } from "./Page";

export function Canvas() {
  const setActivePanelView = useBuilderStore((s) => s.setActivePanelView);
  const setActiveElementId = useBuilderStore((s) => s.setActiveElementId);

  return (
    <div
      className={styles.outer}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setActivePanelView(null);
          setActiveElementId(null);
        }
      }}
    >
      <Page />
    </div>
  );
}
