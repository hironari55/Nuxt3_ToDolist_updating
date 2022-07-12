<template>
  <div>
    <Todo-input @add-todo="addTodoAction" />
    <v-ul class="todoList">
        <v-list v-for="(todo, index) in state.todoList" :key="todo.todo">・{{ todo.todo }}
          <Complete-button :index="index" @complete-todo="completeTodoAction" />
        </v-list>
    </v-ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const { todoList, addTodo, deleteTodo } = changeToDo()

const state = reactive<{todoList: Array<{todo: string}>}>({
  todoList: []
});
const addTodoAction = (value: string) => {
  state.todoList.push({todo: value})
};
const completeTodoAction = (targetIndex) => {
  state.todoList.splice(targetIndex, 1)
}
</script>
