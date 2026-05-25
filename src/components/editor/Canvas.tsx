import { useBuilderStore } from "../../stores/useBuilderStore";
import styles from "./Canvas.module.css";
import { Page } from "./Page";

export function Canvas() {
  const setActivePanelView = useBuilderStore((s) => s.setActivePanelView);

  return (
    <div
      className={styles.outer}
      onClick={(e) => {
        if (e.target === e.currentTarget) setActivePanelView(null);
      }}
    >
      <Page />
    </div>
  );
}
