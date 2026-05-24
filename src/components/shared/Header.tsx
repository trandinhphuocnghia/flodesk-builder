import { Box, Flex } from "@flodesk/grain";
import { Loading } from "./Loading";
import { ExportButton } from "./ExportButton";

export function Header() {
  return (
    <Box
      backgroundColor="background"
      borderColor="#ddc5bd"
      borderWidth="1px"
      borderSide="bottom"
      position="relative"
    >
      <Flex
        height="56px"
        paddingX="l"
        alignItems="center"
        alignContent="center"
        justifyContent="space-between"
        wrap="wrap"
      >
        <Loading />
        <ExportButton />
      </Flex>
    </Box>
  );
}
