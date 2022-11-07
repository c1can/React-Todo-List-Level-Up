import {
  Container,
  Heading,
  useColorModeValue,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link, useLocation } from "wouter";
import { useAuth } from "../context/AuthContext/useAuth";
import { useUser } from "../Hooks/useUser";

export function Register() {
  const color = useColorModeValue("main.text", "main.nav");
  const { user, setUser } = useUser();
  const { registerUser } = useAuth();
  const [path, setPath] = useLocation();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    try {
      await registerUser(email, password);
      setPath("/");
    } catch (error) {
      console.log("gbgh");
      console.log(error.code);
    }
  };

  return (
    <Container maxW={"container.lg"}>
      <Center h={"100vh"} flexDirection="column">
        <Heading>Registrate</Heading>
        <Text mt={2} mb={6} color={color} fontSize={"xl"} opacity=".8">
          Para poder agregar tareas!
        </Text>

        <Box
          minW={"50%"}
          px="6"
          py="10"
          borderRadius={"lg"}
          shadow="lg"
          bg={color == "main.text" ? "main.form" : "main.text"}
        >
          <Box
            as="form"
            display="flex"
            flexDirection="column"
            onSubmit={handleSubmit}
          >
            <FormControl>
              <FormLabel>Correo Electronico</FormLabel>
              <Input
                variant="filled"
                type={"email"}
                placeholder="usuario@gmail.com"
                id="email"
                name="email"
                onChange={handleChange}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel mt={"5"}>Contraseña</FormLabel>
              <Input
                variant="filled"
                type={"password"}
                placeholder="*********"
                id="password"
                name="password"
                onChange={handleChange}
              ></Input>
              <FormHelperText>No compartas tu contraseña!</FormHelperText>
            </FormControl>

            <Button
              mt={"6"}
              border="2px"
              borderColor={"gray.400"}
              type="submit"
            >
              Registrar
            </Button>

            <Button variant={"link"} colorScheme="gray" mt={7}>
              <Link to="/login">Ya tienes una cuenta?</Link>
            </Button>
          </Box>
        </Box>
      </Center>
    </Container>
  );
}
