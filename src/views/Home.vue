<template>
  <div class="w-full flex-col">
    <d-header />
    
    <h2 class="text-2xl text-center mt-16 font-light">
      Current Bitcoin price in real time.
    </h2>

    <section class="mt-20 flex justify-center items-center">
      <img class="h-16 w-16 mr-12 animate-pulse" src="../static/Subtract.svg" alt="bitcoin" />
      <h3 class="text-2xl">{{ valueBit }}</h3>
    </section>

    <section
      class="w-full mt-20 flex justify-center"
    >
      <router-link to="/other">
        <d-button class="mr-14">other currencies</d-button>
      </router-link>
      <router-link to="/date">
        <d-button color="bg-green">search by date</d-button>
      </router-link>
    </section>

    <h5 class="text-sm text-center mt-40">Copyright © {{ newDate }}</h5>
  </div>
</template>

<script>
import DHeader from "../components/DHeader.vue";
import DButton from "../components/DButton.vue";
export default {
  components: { DHeader, DButton },
  data() {
    return {
      valueBit: "195.578,92BRL",
    };
  },
  computed: {
    newDate() {
      return new Date().getFullYear()
    },
  },
};
</script>

<style></style>
