type Task = {
  id: number
  todo: string
}

export const state = () =>  useState <Task[]>('toDoList', () => [])

export const changeToDo = () => {
  const toDoList = state()

  const addTodoAction = (id: number, value: string) => {
      toDoList.value.push({id: id, todo: value})
  }

  const completeTodoAction = (targetIndex) => {
    toDoList.value.splice(targetIndex, 1)
  }

  return {
    toDoList: toDoList,
    addTodoAction:addTodoAction,
    completeTodoAction:completeTodoAction,
  }
}
