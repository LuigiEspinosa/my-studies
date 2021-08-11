<template>
  <form v-for="movie in movies" :key="movie.name">
    <h3>{{ movie.name }}</h3>

    <button
      type="button"
      v-on:click="movie.quantity -= 1"
      :disabled="movie.quantity <= 0"
    >
      -
    </button>

    {{ movie.quantity }}

    <button
      type="button"
      v-on:click="movie.quantity += 1"
      :disabled="movie.quantity >= movie.available"
    >
      +
    </button>
  </form>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      movies: [
        {
          name: "Avengers",
          available: 3,
          quantity: 0,
        },
        {
          name: "Terminator",
          available: 5,
          quantity: 0,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

form {
  background-color: $bg;
  border: 1px solid $color;
  margin: 0 50px 25px;
  padding: 25px;
  text-align: center;
  transform: scale(1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  button {
    background-color: $color-light;
    border: 1px solid transparent;
    cursor: pointer;
    padding: 5px 10px;
    transition: border-color 0.15s;

    &:hover {
      border-color: $color-light;
    }

    &[disabled] {
      opacity: 0.5;
    }
  }
}
</style>
