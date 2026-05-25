import { IconArrowRight, TextButton } from "@flodesk/grain";
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
    <TextButton
      onClick={handleNext}
      icon={<IconArrowRight />}
      iconPosition="right"
      disabled={isSaving}
    >
      Export
    </TextButton>
  );
}
