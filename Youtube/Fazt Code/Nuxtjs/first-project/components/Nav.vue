<template>
  <header class="header">
    <h1 class="text-title">
      Post App
    </h1>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">
            About us
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts">
            Posts
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
  .header {
    background: #2c3e50;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    border-bottom: 1px solud #2ecc71;
  }

  .header ul {
    display: flex;
    list-style: none;
  }

  .header a {
    color: #fff;
    text-decoration: none;
    background: #2d3436;
    padding: .3rem 1rem;
    margin-right: .5rem;
    text-transform: uppercase;
  }

  .header a:hover {
    background: #2c3e50;
    border-bottom: 1px solid #bdc3c7;
  }
</style>
