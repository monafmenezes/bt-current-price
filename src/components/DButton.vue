<template>
  <button
    :class="color"
    class="w-60 h-9 rounded border-2 border-black text-black hover:brightness-90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
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
