<template>
  <div id="about">
    <h1>About US</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur deserunt culpa optio, laudantium, cum, aliquam voluptate reprehenderit est vel quis? Voluptas ab magni repellat hic cupiditate odit alias autem, maiores voluptatem nobis, consectetur iusto aspernatur. Dolor eos unde minus.</p>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'About Us Nuxt | About us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Website about Us'
        },
        {
          htmlAttrs: {
            lang: 'en'
          }
        }
      ]
    }
  }
}
</script>
