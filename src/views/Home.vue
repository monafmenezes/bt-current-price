<template>
  <div class="w-full flex-col">
    <d-header />

    <h2 class="text-2xl text-center mt-16 font-light sm:p-5">
      Current Bitcoin price in real time.
    </h2>

    <section class="mt-20 flex justify-center items-center">
      <img
        class="h-16 w-16 mr-12 animate-pulse"
        src="../static/Subtract.svg"
        alt="bitcoin"
      />
      <h3 class="text-2xl">{{ valueBit }} BRL</h3>
    </section>

    <section class="w-full mt-20 flex sm:flex-col lg:flex-row sm:items-center justify-center">
      <router-link to="/other">
        <d-button class="sm:mb-7 lg:mb-0 lg:mr-14">other currencies</d-button>
      </router-link>
      <router-link to="/date">
        <d-button color="bg-green">search by date</d-button>
      </router-link>
    </section>

    <d-footer class="mt-32"/>
  </div>
</template>

<script>
import DHeader from "../components/DHeader.vue";
import DButton from "../components/DButton.vue";
import DFooter from "../components/DFooter.vue";
import Coins from "../services/coins";

export default {
  components: { DHeader, DButton, DFooter },
  data() {
    return {
      valueBit: "",
    };
  },
  created() {
    this.getCoin();
  },
  mounted() {
    this.attCoin();
  },
  methods: {
    getCoin() {
      Coins.list("/price?ids=bitcoin&vs_currencies=BRL").then(
        (response) =>
          (this.valueBit = response.data.bitcoin.brl
            .toFixed(2)
            .replace(".", ","))
      );
    },
    attCoin() {
      setInterval(() => {
        this.getCoin();
      }, 10000);
    },
  },
  beforeDestroy() {
    clearInterval(this.attCoin);
  },
};
</script>

<style></style>
