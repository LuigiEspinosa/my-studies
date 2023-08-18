<template>
  <h1>TODOS</h1>

  <ul>
    <li v-for="(todo, index) in todos" :key="index">{{ todo.name }} ({{ todo.completed }})</li>
  </ul>

  <h2>Completed Todos</h2>

  <ul>
    <li v-for="(todo, index) in completedTodos" :key="index">
      {{ todo.name }} ({{ todo.completed }})
    </li>
  </ul>

  <h2>Add Todos</h2>

  <input type="text" v-model="todoInput" />
  <button @click="handleInputSubmit">Submit</button>
</template>

<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const todoInput = ref('')

const { todos, completedTodos } = storeToRefs(useTodosStore())
const todosStore = useTodosStore()

async function handleInputSubmit() {
  await todosStore.addTodo(todoInput.value)
  todoInput.value = ''
}
</script>
