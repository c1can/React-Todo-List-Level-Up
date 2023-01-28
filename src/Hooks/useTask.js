export const useTaskHandlers  = (task, setTask) => {
    const handleStatusCheck = (id) => {
        const statusCheck = task.map(item => {
            return item.id === id ? {...item, status: !item.status} : item
        })
        setTask(statusCheck)
    }

    const handleInputValue = (e, id) => {
        const inputTitle = task.map(item => { 
           return item.id === id ? {...item, title: e} : item
        })
        setTask(inputTitle)
    } 

    return { handleStatusCheck, handleInputValue }
}