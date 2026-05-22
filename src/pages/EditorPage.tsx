import { Box, Text } from "@flodesk/grain";
import { Canvas } from "../components/editor/Canvas";
import styles from "./EditorPage.module.css";

export function EditorPage() {
  return (
    <div className={styles.layout}>
      <div className={styles.body}>
        <Canvas />

        <aside className={styles.panel}>
          <Box padding="l">
            <Text size="m" color="content3">
              Settings panel — Day 4
            </Text>
          </Box>
        </aside>
      </div>
    </div>
  );
}
