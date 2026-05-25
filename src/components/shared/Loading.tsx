import { Flex, Spinner, Text } from "@flodesk/grain";
import { useBuilderStore } from "../../stores/useBuilderStore";

export function Loading() {
  const isSaving = useBuilderStore((state) => state.isSaving);

  return (
    <>
      {isSaving ? (
        <Flex alignItems="center" gap="xs">
          <Spinner size={2} />
          <Text size="s" color="shade5">
            Saving
          </Text>
        </Flex>
      ) : (
        <Text size="s" color="shade5">
          Saved
        </Text>
      )}
    </>
  );
}
