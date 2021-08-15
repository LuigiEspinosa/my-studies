<template>
  <button
    @click="buttonClick"
    class="
      bg-transparent
      text-green-700
      font-semibold
      py-2
      px-2
      border border-green-500
      rounded
      hover:bg-green-500 hover:text-white hover:border-transparent
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PxButton",

  methods: {
    buttonClick() {
      this.$emit("custom-click");
    },
  },
};
</script>
