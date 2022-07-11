export const addTodo = (toDoList) => ({id, value}) => toDoList.push({id: id, todo:value})

export const deleteTodo = (toDoList) => (targetIndex) =>
toDoList.splice(targetIndex, 1)

export const changeToDo = () => {
  const todoList = useState <Array<{id:number, todo:string}>>('toDoList', () => [])

  return {
    todoList: readonly(todoList),
    addTodo: addTodo(todoList),
    deleteTodo: deleteTodo(todoList),
  }
}
