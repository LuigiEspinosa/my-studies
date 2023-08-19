<template>
  <h1>Count: {{ count }}</h1>
  <button @click="increment">Increment</button>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { increment } = counterStore
const { count } = storeToRefs(counterStore)
</script>
