<template>
  <h5 class="text-sm text-center">Copyright © {{ newDate }}</h5>
</template>

<script>
export default {
  computed: {
    newDate() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style>

</style>