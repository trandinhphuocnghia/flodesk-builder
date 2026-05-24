import { Box, Button, Flex, Spinner, Text } from "@flodesk/grain";
import { useBuilderStore } from "../../stores/useBuilderStore";
import { exportHTML } from "../../helpers";

export function Header() {
  const isSaving = useBuilderStore((state) => state.isSaving);

  function handleExport() {
    const store = useBuilderStore.getState();
    const html = exportHTML(store);
    console.log(html);
  }

  return (
    <Box width="full" paddingX="l" height="56px">
      <Flex flex="1" alignItems="center" justifyContent="between">
        <Box>
          {isSaving ? (
            <>
              <Spinner />
              <Text size="s" color="shade6">
                Saving...
              </Text>
            </>
          ) : (
            <Text size="s" color="shade6">
              Saved
            </Text>
          )}
        </Box>

        {/* Export */}
        <Button disabled={isSaving} onClick={handleExport}>
          Export HTML
        </Button>
      </Flex>
    </Box>
  );
}
