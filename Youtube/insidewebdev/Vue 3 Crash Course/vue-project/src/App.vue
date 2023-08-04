<script setup>
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue';
import Form from './components/Form.vue';

const name = 'JUAN'.toLowerCase();

function sayMyName(number) {
  return number + ' Miguel';
}

// Reactive data with Ref
const names = ref(['Emily', 'Pedro', 'Marco', 'Miguel', 'Juan']);
console.log(names);

const id = ref(Math.random() + 1000);
const inputValue = ref('Paceholder value');

function handleInputChange(event) {
  console.log(event.target.value);
  inputValue.value = event.target.value;
}

function handleSubmit(event) {
  console.log(event);
}

const day = ref(null);
const isFriday = computed(() => day.value === 'friday');

function handleClick(event) {
  console.log(event);
  day.value = 'friday';
}

// Watchers
watch(
  () => day.value,
  () => {
    console.log('Day Change');
  }
);

// Lifecycle Hooks
onMounted(() => {
  console.log('On Mounted');
});

onBeforeMount(() => {
  console.log('Before On Mounted');
});

function handleFormSubmit(args) {
  console.log(args);
}
</script>

<template>
  <h1 class="red">Hello World!</h1>

  <!-- Text Interpolation -->
  <div>{{ true ? 'Hello' : 'Bye' }}</div>
  <div>{{ 2 + 2 }}</div>
  <div>{{ 'PEDRO'.toLowerCase() }}</div>
  <div>{{ name }}</div>
  <div>{{ sayMyName(2) }}</div>

  <!-- v-if, v-else-if, v-else directives -->
  <div v-if="false">My name is {{ sayMyName(10) }}</div>
  <div v-else-if="true">My name is Mario</div>
  <div v-else>My name is Emily</div>

  <!-- v-for directive -->
  <div v-for="number in 10">
    {{ number }}
  </div>

  <div v-for="(name, idx) in ['Emily', 'Pedro', 'Marco', 'Miguel', 'Juan']">
    {{ idx }} - {{ name }}
  </div>

  <div v-for="(name, idx) in names">{{ idx }} - {{ name }}</div>

  <!-- v-bind -->
  <div v-bind:id="id">
    <!-- Attach an event listener to the element with v-on -->
    <h1>{{ inputValue }}</h1>
    <input type="text" :value="inputValue" @input="handleInputChange" />
  </div>

  <!-- v-model -->
  <form @submit.prevent="handleSubmit">
    <input type="text" value="value 1" />
    <input type="submit" />
  </form>

  <!-- Event Modifiers -->
  <h1>{{ day }}</h1>
  <h1>{{ isFriday }}</h1>
  <button @click="handleClick">Button</button>

  <!-- Props -->
  <Form input-value="Manuel" @submit="handleFormSubmit" />

  <!-- COMPOSITION API -->
  <br />
  <hr />
  <a
    href="https://github.com/LuigiEspinosa/my-studies/tree/main/Youtube/insidewebdev/vue-composition-api"
    target="_blank"
    >COMPOSITION API</a
  >
</template>

<style scoped>
.red {
  color: red;
}
</style>

