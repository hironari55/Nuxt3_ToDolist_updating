<template>
  <v-layout wrap>
    <v-text-field
          v-model="todoRef"
          label="タスクを登録"
          hide-details
    ></v-text-field>
    <v-btn color="info" @click="add">登録</v-btn>
  </v-layout>
</template>

<script setup lang="ts">
    const todoRef = ref<string>('')

     //追加 storeの中の一番最後のidを取得し、 + 1
    const lastId = () => {
        return 1
    }

    const add = (e) =>{
      const id = lastId()
      const value = todoRef.value
      addTodoAction(id, value);
      todoRef.value = ''
    };

const {
  addTodoAction,
} = changeToDo()
</script>
