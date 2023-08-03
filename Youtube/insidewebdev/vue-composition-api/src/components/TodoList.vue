<template>
  <input type="text" placeholder="Todo" v-model="todoText" />
  <button @click="addTodoItem">ADD</button>

  <p>Completed todos: {{ computedTodos }}</p>

  <ul>
    <li v-for="todo in todoList" :key="todo.id" @click="toogleIsDone(todo.id)">
      {{ todo.value }} = {{ todo.isDone ? 'Done' : 'Not done' }}
    </li>
  </ul>
</template>

<script lang="ts">
import useTodoList from '../use/useTodoList';

export default {
  name: 'TodoList',

  setup() {
    const { todoList, todoText, addTodoItem, toogleIsDone, computedTodos } = useTodoList(10);

    return {
      // data
      todoList,
      todoText,

      // Methods
      addTodoItem,
      toogleIsDone,

      // Computed
      computedTodos,
    };
  },
};
</script>

