<template>
  <div>
    <d-header />
    <section class="flex-col items-center">
      <h2 class="text-2xl text-center mt-16 mb-10 font-light">Insert Date</h2>

      <form action="" class="flex flex-col items-center mt-16">
        <h6 class="mb-5 text-lg font-bold">Bitcoin</h6>
        <input class="mb-5" type="date" />
        <input class="mb-5" type="time" />
        <div
          class="w-full mt-10 flex sm:flex-col lg:flex-row sm:items-center justify-center"
        >
          <router-link to="/">
            <d-button class="sm:mb-7 lg:mb-0 lg:mr-14" 
              >home</d-button
            >
          </router-link>
          <d-button color="bg-green">search</d-button>
        </div>
      </form>
    </section>
    <d-footer class="mt-32" />
  </div>
</template>

<script>
import DButton from "../components/DButton.vue";
import DFooter from "../components/DFooter.vue";
import DHeader from "../components/DHeader.vue";
export default {
  components: { DHeader, DButton, DFooter },
};
</script>

<style></style>
