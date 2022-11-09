import {Checkbox, EditablePreview, Input, EditableInput, Editable, Box} from "@chakra-ui/react"
import { EditableControls } from "./ButtonsTask"


export function Task2({task, setTask}) {

    const handleChange = (id) => {
        let checkStatus = task.map(item => { //[{status}, {status}]
            if(item.id == id) {
                return {
                    ...item,
                    status: !item.status
                }
            }else {
                return item
            }
        })

        setTask(checkStatus)
    }

    const handleForm = (e, id) => {
        const inputTitle = task.map(item => {
            if(item.id === id) {
                return {
                    ...item,
                    title: e
                }
            }else{
                return item
            }
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