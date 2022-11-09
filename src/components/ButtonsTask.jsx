import {useEditableControls, ButtonGroup, IconButton, Flex } from "@chakra-ui/react"
import { CheckIcon, CloseIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons"


export function EditableControls({setTask, id, task}) {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    const handleClick= (id) => {
        const filtered = task.filter(item => item.id !== id)
        setTask(filtered)
    }

    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm'>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex pos="absolute" right="2" bottom="1" gap="2">
        <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
        <IconButton size="sm" icon={<DeleteIcon />} onClick={() => handleClick(id)}/>
      </Flex>
    )
  }