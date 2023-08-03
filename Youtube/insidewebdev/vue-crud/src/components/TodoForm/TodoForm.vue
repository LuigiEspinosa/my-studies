<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="title" v-model="title" />
    <input type="text" placeholder="description" v-model="description" />
    <button type="submit">{{ isEditMode ? 'Save' : 'Add' }}</button>
  </form>
</template>

<script lang="ts">
export default {
  name: 'TodoForm',

  props: {
    todo: {
      type: Object,
      default: () => ({}),
    },

    isEditMode: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      title: '',
      description: '',
    };
  },

  created() {
    if (this.isEditMode) {
      this.title = this.todo.title;
      this.description = this.todo.description;

      return;
    }
  },

  methods: {
    submit() {
      if (this.isEditMode) {
        this.emitUpdateTodo();
        return;
      }

      this.emitNewTodo();
    },

    emitNewTodo() {
      this.$emit('onNewTodo', {
        id: `todo_${Math.random() * 100}`,
        title: this.title,
        description: this.description,
        isChecked: false,
      });

      this.title = '';
      this.description = '';
    },

    emitUpdateTodo() {
      this.$emit('onUpdateTodo', {
        id: this.todo.id,
        title: this.title,
        description: this.description,
        isChecked: this.todo.isChecked,
        isEditMode: false,
      });
    },
  },
};
</script>
