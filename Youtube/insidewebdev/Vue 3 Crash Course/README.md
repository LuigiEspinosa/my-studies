# Vue.js 3 Crash Course for beginners by insidewebdev

## What is Vue

- Web framework to build SPA, SSR and SSG apps.
- It's built on top standard HTML, CSS and JavaScript.
- Vue Provides a declarative and component-bases programming model that helps you efficiently develop user interfaces, be it **simple** or **complex**.

## Basic Syntax

```js
import { createApp } from 'vue';

createApp({
  data() {
    return {
      count: 0,
    };
  },
}).mount('#app');
```

```html
<div id="app">
  <button @click="count++">Count is: {{ count }}</button>
</div>
```

## Why use Vue

- Lightweight.
- Easy to pick up for new web developers.
- Very popular with a very big community.
- First class citizien ecosystem libraries.

## Pre-requisites

- Basic familiarity with HTML, CSS and JavaScript
