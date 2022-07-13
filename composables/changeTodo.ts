
type Task = {
  todo: string
}

export const state = () =>  useState <Task[]>('toDoList', () => [])

export const changeToDo = () => {
  const toDoList = state()

  const addTodoAction = (value: string) => {
      toDoList.value.push({todo: value})
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
