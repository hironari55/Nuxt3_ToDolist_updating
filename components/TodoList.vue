<template>
  <div>
    <Todo-input @add-todo="addTodoAction" />
    <v-ul class="todoList">
        <v-list v-for="(todo, index) in toDoList" :key="todo.todo">・{{ todo.todo }}
          <Complete-button :index="index" @complete-todo="completeTodoAction" />
        </v-list>
    </v-ul>
  </div>
</template>

<script setup lang="ts">
  const {
    toDoList,
    addTodoAction,
    completeTodoAction,
    } = changeToDo()
</script>
