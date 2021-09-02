<template>
  <div id="app">
    <Navigation />
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Nav'

export default {
  components: {
    Navigation
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    color: whitesmoke;
  }

  body {
    background: #2d3436;
    color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }

  .content {
    padding: 2rem;
  }
</style>
