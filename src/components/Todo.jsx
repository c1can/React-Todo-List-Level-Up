import {
  Container,
  Box,
  Text,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  Stack,
  Checkbox, 
  IconButton
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon} from "@chakra-ui/icons";
import { useState, useRef, useEffect } from "react";
import { NavBar } from "./Navbar"

export function Todo() {

  const formRef = useRef(null)

  const getStorage= () => {
    const list = window.localStorage.getItem("task")
    
    if(list) {
      return JSON.parse(localStorage.getItem("task"))
    }else {
      return []
    }
  }

  const [task, setTask] = useState(getStorage())

  const handleSubmit = e => {
    e.preventDefault()
    let inputValue = e.target[0].value
    const myTask = {
      id: Date.now(),
      title: inputValue,
      status: false,
    }
    formRef.current.reset()
    setTask(prev => prev.concat(myTask))
  }

  const handleClickIcon = (id) => {
    const filtered = task.filter((a) => a.id !== id ) 
    setTask(filtered)
  }

  const handleChange = (id) => {  
    let statusTask = task.map(item => {
      if(item.id == id) {
        return {...item,
          status: !item.status
        }
      }else {
        return item
      }
    })
    setTask(statusTask)
  }

  useEffect(() => {
    window.localStorage.setItem("task", JSON.stringify(task))
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
          <Box bg={"teal.200"} m="0" py={5} borderRadius="base">
            <Center>
              <Text color={"white"} fontSize="xl" fontWeight={"bold"}>
                Lista de Tareas
              </Text>
            </Center>
          </Box>

          <Box maxH={"600px"} overflow={"scroll"} overflowX="hidden">
            {
              task.map(({title, id, status}) => (
                <Box bg="main.form" p={5} borderRadius={"base"} key={id}>
                  <Flex justifyContent="space-between" alignItems={"center"}>
                    <Stack direction="row" gap={"2rem"}>
                      <Checkbox isChecked={status} size="lg" colorScheme="green" onChange={() => handleChange(id)}></Checkbox>
                      <Text>{title}</Text>
                    </Stack>
                    <Stack direction={"row"}>
                      <IconButton variant="outline" icon={<EditIcon />}></IconButton>
                      <IconButton variant="outline" icon={<DeleteIcon />} onClick={() => handleClickIcon(id)}></IconButton>
                    </Stack>
                  </Flex>
                </Box>
              ))
            }
            
          </Box>

          <Box as="form" pos={"absolute"} bottom="0" w={"97%"} onSubmit={handleSubmit} ref={formRef}>
            <InputGroup>
              <Input type={"text"} placeholder="Inserta tu tarea" outline={"none"} focusBorderColor="none" name="task"/>
              <InputRightElement width={"5rem"}>
                <Button color={"white"} bg="whatsapp.200" type="submit">
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
