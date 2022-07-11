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

<script lang="ts">
import { defineComponent, SetupContext, ref } from 'vue'


export default defineComponent({
  name: 'TodoInput',
  setup(props, context: SetupContext) {
    const todoRef = ref<string>('')

    const lastId = () => {
      if(todoList.length === 0){
        return 1
      } else {
        const lastItem = store.state.todoList.slice(-1)[0]
        return lastItem.id + 1
      }
    }
    const add = (e) =>{
      context.emit('add-todo', todoRef.value);
      todoRef.value = ''
    };

    return { add, todoRef};
  }
});
</script>
