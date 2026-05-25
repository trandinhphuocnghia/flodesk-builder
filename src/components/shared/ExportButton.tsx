import { Button, Text } from "@flodesk/grain";
import { useBuilderStore } from "../../stores/useBuilderStore";
import { exportHTML } from "../../helpers";
import { downloadHTML } from "../../utils";

export function ExportButton() {
  const isSaving = useBuilderStore((state) => state.isSaving);

  function handleNext() {
    const store = useBuilderStore.getState();
    const html = exportHTML(store);
    downloadHTML("my-template.html", html);
  }

  return (
    <Button variant="accent" onClick={handleNext} disabled={isSaving}>
      <Text weight="medium" color="inverse">
        Export
      </Text>
    </Button>
  );
}
