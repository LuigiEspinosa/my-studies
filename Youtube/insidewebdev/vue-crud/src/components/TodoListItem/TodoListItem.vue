<template>
  <div>
    <div v-if="!editMode">
      <input type="checkbox" v-model="isChecked" />

      <span>
        <strong>{{ todo?.title }}</strong>
      </span>
      <span style="margin: 0 20px">
        <strong>{{ todo?.description }}</strong>
      </span>

      <button @click="toggleEditTodo">Edit</button>
      <button @click="removeTodo">Remove</button>
    </div>

    <div v-else>
      <TodoForm :todo="todo" @onUpdateTodo="handleUpdateTodo" isEditMode />
    </div>
  </div>
</template>

<script lang="ts">
import TodoForm from '../TodoForm/TodoForm.vue';

export default {
  name: 'TodoListItem',
  components: {
    TodoForm,
  },

  props: {
    todo: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isChecked: {
      get() {
        return this.todo.isChecked;
      },

      set(value) {
        this.$emit('onToggleIsChecked', {
          id: this.todo.id,
          value,
        });
      },
    },

    editMode() {
      return this.todo.editMode;
    },
  },

  methods: {
    handleUpdateTodo(updatedTodo) {
      this.$emit('onUpdateTodo', updatedTodo);
    },

    toggleEditTodo() {
      this.$emit('onToggleEditTodo', this.todo.id);
    },

    removeTodo() {
      this.$emit('onRemoveTodo', this.todo.id);
    },
  },
};
</script>
