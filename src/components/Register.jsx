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
import { Link } from "wouter";

export function Register() {
  const color = useColorModeValue("main.text", "main.nav");
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
          <FormControl isRequired>
            <FormLabel>Correo Electronico</FormLabel>
            <Input
              variant="filled"
              type={"email"}
              placeholder="usuario@gmail.com"
            ></Input>
            <FormLabel mt={"5"}>Contraseña</FormLabel>
            <Input
              variant="filled"
              type={"password"}
              placeholder="*********"
            ></Input>
            <FormHelperText>No compartas tu contraseña!</FormHelperText>

            <Button
              mt={"6"}
              border="2px"
              borderColor={"gray.400"}
              type="submit"
            >
              Registrar
            </Button>
          </FormControl>

          <Button variant={"link"} colorScheme="gray" mt={7}>
            <Link to="/login">Ya tienes una cuenta?</Link>
          </Button>
        </Box>
      </Center>
    </Container>
  );
}
