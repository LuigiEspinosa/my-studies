<template>
  <h1>TODO</h1>
  <p>Completed Todos: {{ completedTodos }}</p>

  <TodoForm @onNewTodo="handleNewTodo" />

  <div style="margin-top: 20px">
    <TodoListItem
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"
      @onToggleIsChecked="handleToggleIsChecked"
      @onToggleEditTodo="handleToggleEditTodo"
      @onUpdateTodo="handleUpdateTodo"
      @onRemoveTodo="handleRemoveTodo"
    />
  </div>
</template>

<script lang="ts">
import TodoForm from './components/TodoForm/TodoForm.vue';
import TodoListItem from './components/TodoListItem/TodoListItem.vue';

interface TodoTypes {
  id: number;
  title: string;
  description: string;
  isChecked: boolean;
  editMode: boolean;
}

interface ToggleProps {
  id: number;
  value: boolean;
}

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoListItem,
  },

  data() {
    return {
      todoList: [] as Array<TodoTypes>,
    };
  },

  computed: {
    completedTodos() {
      return this.todoList.filter((todo) => todo.isChecked).length;
    },
  },

  methods: {
    handleNewTodo(newTodo: TodoTypes) {
      this.todoList.push(newTodo);
    },

    handleToggleIsChecked({ id, value }: ToggleProps) {
      const todo = this.findTodo(id);
      (todo as TodoTypes).isChecked = value;
    },

    handleToggleEditTodo(id: number) {
      const todo = this.findTodo(id);
      (todo as TodoTypes).editMode = !todo?.editMode;
    },

    handleUpdateTodo(updatedTodo: TodoTypes) {
      this.todoList = this.todoList.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }

        return todo;
      });
    },

    handleRemoveTodo(id: number) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },

    findTodo(id: number) {
      return this.todoList.find((todo) => todo.id === id);
    },
  },
};
</script>

