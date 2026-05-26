import { Canvas } from "../components/editor/canvas/Canvas";
import styles from "./EditorPage.module.css";
import { SettingPanel } from "../components/editor/settings/SettingPanel";
import { Header } from "../components/shared/Header";

export function EditorPage() {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.body}>
        <Canvas />
        <aside className={styles.panel}>
          <SettingPanel />
        </aside>
      </div>
    </div>
  );
}
