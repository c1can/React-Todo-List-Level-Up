import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Container,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  StackDivider,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("main.nav", "gray.900");

  return (
    <Box as="nav" bg={color} py={4} shadow="md">
      <Container
        maxW="container.lg"
        display="flex"
        justifyContent="space-between"
      >
        <Text fontSize="2xl" fontWeight="bold">
          TodoList
        </Text>

        <Stack direction={"row"} spacing="5" divider={<StackDivider />}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Menu>
            <MenuButton as={Button} variant="link">
              <Avatar size={"sm"} name="carlos" bg="pink" />
            </MenuButton>
            <MenuList>
              <Stack alignItems="center" divider={<StackDivider />} spacing="4">
                <Box>
                  <Avatar
                    size={"xl"}
                    name="carlosreyes@gmail.com"
                    bg={"pink"}
                  />
                  <Text fontWeight="bold" my={3}>
                    Carlos Reyes
                  </Text>
                </Box>

                <Button>Salir</Button>
              </Stack>
            </MenuList>
          </Menu>
        </Stack>
      </Container>
    </Box>
  );
}
