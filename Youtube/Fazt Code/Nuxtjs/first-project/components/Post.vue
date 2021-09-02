<template>
  <NuxtLink :to="`/posts/${id}`">
    <div id="post" class="post">
      <h2> {{ id }}. {{ title }} </h2>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'Post',

  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .post {
    padding: 1rem;
    border: 1px solid whitesmoke;
    margin: 1rem 0;
  }

  .post:hover {
    background: #2d3436;
    border: 1px solid #6c5ce7;
    cursor: pointer;
  }

  a {
    color: whitesmoke;
    text-decoration: none;
  }

  a:hover {
    color: #6c5ce7;
  }
</style>
