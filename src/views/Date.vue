<template>
  <div>
    <d-header />
    <section class="flex-col items-center">
      <h2 class="text-2xl text-center mt-16 mb-10 font-light">Insert Date</h2>
      <form action="" class="flex flex-col items-center mt-16">
        <input class="mb-5" type="date" />
        <input class="mb-5" type="time" />
        <d-button class="mt-5">search</d-button>
      </form>
    </section>
    <h5 class="text-sm text-center mt-52">Copyright © {{ newDate }}</h5>
  </div>
</template>

<script>
import DButton from "../components/DButton.vue";
import DHeader from "../components/DHeader.vue";
export default {
  components: { DHeader, DButton },
};
</script>

<style></style>
