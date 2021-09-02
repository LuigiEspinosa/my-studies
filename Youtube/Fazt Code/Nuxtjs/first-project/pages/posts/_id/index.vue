<template>
  <div class="card">
    <h1>  {{ post.id }}. {{ post.title }} </h1>
    <p> {{ post.body }} </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      post: {}
    }
  },

  async created () {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
      this.post = res.data
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}
</script>

<style scoped>
  .card {
    border: 1px solid whitesmoke;
    padding: 4rem;
  }
</style>
