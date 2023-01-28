import {Checkbox, EditablePreview, Input, EditableInput, Editable} from "@chakra-ui/react"
import { useTaskHandlers } from "../Hooks/useTask"
import { EditableControls } from "./ButtonsTask"


export function Task2({task, setTask, user}) {
    
    const filterArr = task.filter(item => item.user === user) 

   const { handleInputValue, handleStatusCheck } = useTaskHandlers(task, setTask) 

  return filterArr.map(({title, id, status}) => (
        <Editable
        key={id}
        onSubmit={Event => handleInputValue(Event, id)}
        pos="relative"
        textAlign='center'
        defaultValue={title}
        fontSize='lg'
        isPreviewFocusable={false}
        display="flex"
        justifyContent="center"
        alignItems="center"
        py="1"
      >
      <Checkbox
      isChecked={status}
      size="lg"
      colorScheme="green"
      pos="absolute"
      left="2"
      onChange={() => handleStatusCheck(id)}
  ></Checkbox>
        <EditablePreview />
        <Input as={EditableInput} />
        <EditableControls setTask={setTask} id={id} task={task}/>
      </Editable>
  ))
}