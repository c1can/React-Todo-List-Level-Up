import {Checkbox, EditablePreview, Input, EditableInput, Editable} from "@chakra-ui/react"
import { EditableControls } from "./ButtonsTask"


export function Task2({task, setTask}) {

    const handleChange = (id) => {
        const statusCheck = task.map(item => {
            return item.id === id ? {...item, status: !item.status} : item
        })
        setTask(statusCheck)
    }

    const handleForm = (e, id) => {
        const inputTitle = task.map(item => { 
           return item.id === id ? {...item, title: e} : item
        })
        setTask(inputTitle)
    } 

  return task.map(({title, id, status}) => (
        <Editable
        key={id}
        onSubmit={Event => handleForm(Event, id)}
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
      onChange={() => handleChange(id)}
  ></Checkbox>
        <EditablePreview />
        <Input as={EditableInput} />
        <EditableControls setTask={setTask} id={id} task={task}/>
      </Editable>
  ))
}