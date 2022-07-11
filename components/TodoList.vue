<template>
  <div>
    <Todo-input />
    <v-ul class="todoList">
        <v-list v-for="(todo, index) in todoList" :key="todo.todo">・{{ todo.todo }}
          <Complete-button :index="index" />
        </v-list>
    </v-ul>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive } from 'vue'

const todoList = changeToDo();

</script>
