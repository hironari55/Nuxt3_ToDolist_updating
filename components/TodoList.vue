<template>
  <div>
    <Todo-input />
    <v-ul class="todoList">
        <v-list v-for="(todo, index) in toDoList" :key="todo.todo">・{{ todo.todo }}
          <Complete-button :index="index"/>
        </v-list>
    </v-ul>
  </div>
</template>

<script setup lang="ts">
  const {
    toDoList,
    } = changeToDo()
</script>
