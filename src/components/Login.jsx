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
  Center,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "../context/AuthContext/useAuth";
import { useUser } from "../Hooks/useUser";
import { LoginAlert } from "./Alert";

export function Login() {
  const color = useColorModeValue("main.text", "main.nav");
  const { user, setUser } = useUser();
  const { loginUser } = useAuth();
  const [path, setPath] = useLocation();
  const [error, setError] = useState("");
  const { email, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await loginUser(email, password);
      setPath("/");
    } catch (error) {
      setError(error.code);
    }
  };

  return (
    <Container maxW={"container.lg"}>
      <Center h={"100vh"} flexDirection="column">
        <Heading>Iniciar Sesion</Heading>
        <Text mt={2} mb={6} color={color} fontSize={"xl"} opacity=".8">
          Con tu cuenta ya registrada
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
            display={"flex"}
            flexDirection="column"
            onSubmit={handleSubmit}
          >
            <FormControl>
              <FormLabel>Correo Electronico</FormLabel>
              <Input
                variant="filled"
                type="email"
                placeholder="usuario@gmail.com"
                name="email"
                onChange={handleChange}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel mt={"5"}>Contraseña</FormLabel>
              <Input
                variant="filled"
                type="password"
                placeholder="*********"
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
              Iniciar Sesion
            </Button>

            <Button variant={"link"} colorScheme="gray" mt={7}>
              <Link to="/register">Aun no tienes cuenta?</Link>
            </Button>

            {error && <LoginAlert error={error} />}
          </Box>
        </Box>
      </Center>
    </Container>
  );
}
