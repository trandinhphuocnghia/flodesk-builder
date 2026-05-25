import { Box, Flex, Text } from "@flodesk/grain";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";
import { ExportButton } from "./ExportButton";
import styles from "./Header.module.css";

export function Header() {
  const navigate = useNavigate();

  return (
    <Box
      backgroundColor="background"
      borderColor="#ddc5bd"
      borderWidth="1px"
      borderSide="bottom"
      position="relative"
    >
      <Flex
        direction="row"
        alignItems="center"
        alignContent="center"
        justifyContent="space-between"
        style={{ padding: "0 32px", height: "64px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          gap="m"
          style={{ flex: 1 }}
        >
          <Box
            cursor="pointer"
            onClick={() => navigate("/")}
            title="Back to Gallery"
          >
            <Text size="l" color="content3" weight="bold">
              ←
            </Text>
          </Box>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="center"
          gap="s"
          className={styles.breadcrumb}
        >
          <Text
            size="xs"
            weight="medium"
            color="content3"
            style={{ letterSpacing: "0.1em" }}
          >
            GALLERY
          </Text>
          <Text size="xs" color="content3">
            ›
          </Text>
          <Text
            size="xs"
            weight="bold"
            color="content"
            style={{ letterSpacing: "0.1em" }}
          >
            DESIGN PAGE
          </Text>
          <Text size="xs" color="content3">
            ›
          </Text>
          <Text
            size="xs"
            weight="medium"
            color="content3"
            style={{ letterSpacing: "0.1em" }}
          >
            PUBLISH
          </Text>
        </Flex>

        <Flex
          wrap="nowrap"
          alignItems="center"
          justifyContent="end"
          gap="l"
          style={{ flex: 1 }}
        >
          <Loading />
          <ExportButton />
        </Flex>
      </Flex>
    </Box>
  );
}
