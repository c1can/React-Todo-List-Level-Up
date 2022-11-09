import { Box, Flex, Stack, Checkbox, Text, IconButton, useEditableControls } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

export function Task({ task, setTask }) {

    const handleClickIcon=(id) => {
        const filtered = task.filter(task => task.id !== id)
        setTask(filtered)
    }

    const handleChange = (id) => {  
        let statusTask = task.map(item => { // ==> [{}, {status}, {}]
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

  return task.map(({ title, id, status }) => (
    <Box bg="main.form" p={5} borderRadius={"base"} key={id}>
      <Flex justifyContent="space-between" alignItems={"center"}>
        <Stack direction="row" gap={"2rem"}>
          <Checkbox
            isChecked={status}
            size="lg"
            colorScheme="green"
            onChange={() => handleChange(id)}
          ></Checkbox>
          <Text>{title}</Text>
        </Stack>
        <Stack direction={"row"}>
          <IconButton variant="outline" icon={<EditIcon />}></IconButton>
          <IconButton
            variant="outline"
            icon={<DeleteIcon />}
            onClick={() => handleClickIcon(id)}
          ></IconButton>
        </Stack>
      </Flex>
    </Box>
  ));
}
