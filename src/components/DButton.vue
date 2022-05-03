<template>
  <button
    :class="color"
    class="w-60 h-9 rounded border-2 border-black text-black"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "bg-orange",
    },
  },
};
</script>

<style></style>
