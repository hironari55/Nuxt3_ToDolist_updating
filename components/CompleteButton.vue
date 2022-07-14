<template>
  <v-btn color="error" @click="completed">完了</v-btn>
</template>

<script setup lang="ts">
type Props = {
  index: number
}

const { index } = defineProps<Props>();

const completed = (e) =>{
  completeTodoAction(index);
};

const {
  completeTodoAction,
} = changeToDo()
</script>
