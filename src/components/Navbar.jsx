import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
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
import { useLocation } from "wouter";
import { useAuth } from "../context/AuthContext/useAuth";

export function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("main.nav", "gray.900");
  const { signOutUser } = useAuth();
  const [path, setPath] = useLocation();

  const leaveSession = async () => {
    await signOutUser();
    window.localStorage.clear()
    setPath("/login");
  };

  const {user} = useAuth()
  const {displayName, email} = user;
  
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

        <Stack direction={"row"} spacing="5" divider={<StackDivider />} >
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Menu>
            <MenuButton as={Button} variant="link" _hover={{textDecoration: "none"}} rightIcon={<ChevronDownIcon/>}>
              <Avatar color="white" bg="teal.300" size={"sm"} name={displayName || email} />
            </MenuButton>
            <MenuList mt={5}>
              <Stack alignItems="center" divider={<StackDivider />} spacing="4">
                <Stack alignItems="center">
                  <Avatar
                    size={"xl"}
                    name={displayName || email}
                    bg="teal.300"
                    color="white"
                  />
                  <Text fontWeight="bold" my={3}>
                    {displayName || email}
                  </Text>
                </Stack>

                <Button onClick={leaveSession}>Salir</Button>
              </Stack>
            </MenuList>
          </Menu>
        </Stack>
      </Container>
    </Box>
  );
}
