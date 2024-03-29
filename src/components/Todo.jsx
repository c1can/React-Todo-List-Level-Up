import {
  Container,
  Box,
  Text,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext/useAuth";
import { useStorage } from "../Hooks/useStorage";
import { NavBar } from "./Navbar"
import { Task2 } from "./Task2";

export function Todo() {
  
  const formRef = useRef(null)
  const container = useRef(null)
  const {user} = useAuth()
  const {uid} = user
  const { getStorage } = useStorage("task")

  const [task, setTask] = useState(getStorage()) //[] || localStorage

  const handleSubmit = e => {
    e.preventDefault()
    let inputValue = e.target[0].value
    const myTask = {
      id: Date.now(),
      title: inputValue,
      status: false,
      user: uid
    }
    formRef.current.reset()
    setTask(prev => prev.concat(myTask))
  }

  useEffect(() => {
    window.localStorage.setItem("task", JSON.stringify(task))
    container.current.scrollTo(0, container.current.scrollHeight)
  }, [task])

  return (
    <>
      <NavBar />
      <Box my={10}>
        <Container
          maxW="container.lg"
          minH={"85vh"}
          pos="relative"
          overflow={"hidden"}
          >
          <Box bg={"teal.400"} m="0" py={5} borderRadius="base" mb={5}>
            <Center>
              <Text color={"white"} fontSize="xl" fontWeight={"bold"}>
                Lista de Tareas
              </Text>
            </Center>
          </Box>

          <Box ref={container} maxH={"600px"} overflow={"scroll"} overflowX="hidden">
            <Task2 task={task} setTask={setTask} user={uid}/>
          </Box>

          <Box as="form" pos={"absolute"} bottom="0" w={"100%"} onSubmit={handleSubmit} ref={formRef} left="0">
            <InputGroup>
              <Input type={"text"} placeholder="Inserta tu tarea" outline={"none"} focusBorderColor="none" name="task"/>
              <InputRightElement width={"5rem"}>
                <Button color={"white"} bg="teal.400" type="submit">
                  Agregar
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Container>
      </Box>
    </>
  );
}
