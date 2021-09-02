<template>
  <div id="posts">
    <h1>Posts</h1>
    <Post
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Post from '@/components/Post'

export default {
  components: {
    Post
  },

  data () {
    return {
      posts: []
    }
  },

  async created () {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      this.posts = res.data
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}
</script>
