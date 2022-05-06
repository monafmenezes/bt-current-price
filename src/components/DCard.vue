<template>
  <div
    class="w-72 h-56 bg-orange rounded-md p-4 flex flex-col justify-between items-center"
  >
    <h2 class="text-black font-bold text-lg">{{ coinInfo.name }}</h2>
    <p class="text-black">
      <strong>Date:</strong> {{ coinInfo.date.split("-").reverse().join("-") }}
    </p>
    <p class="text-black"><strong>Time:</strong> {{ coinInfo.time }}</p>
    <h3 class="text-black">
      R$ {{ coinInfo.price.toFixed(2).replace(".", ",") }} BRL
    </h3>
  </div>
</template>

<script>
import DButton from "./DButton.vue";
export default {
  components: { DButton },
  props: {
    coinInfo: {
      type: Object,
    },
  },
};
</script>

<style></style>
