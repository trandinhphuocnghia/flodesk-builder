import { Box, Flex, Spinner, Text } from "@flodesk/grain";
import { useBuilderStore } from "../../stores/useBuilderStore";

export function Loading() {
  const isSaving = useBuilderStore((state) => state.isSaving);

  return (
    <Box style={{ width: "80px", display: "flex", justifyContent: "flex-end" }}>
      {isSaving ? (
        <Flex alignItems="center" gap="xs">
          <Spinner size={2} />
          <Text size="s" color="shade5" weight="medium">
            Saving
          </Text>
        </Flex>
      ) : (
        <Text size="s" color="shade5" weight="medium">
          ✓ Saved
        </Text>
      )}
    </Box>
  );
}
