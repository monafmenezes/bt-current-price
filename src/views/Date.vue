<template>
  <div>
    <d-header />
    <section class="flex flex-col items-center">
      <h2 class="text-2xl text-center mt-16 mb-10 font-light">Insert Date</h2>
      <p>{{ $route.params.id }}</p>

      <form
        class="flex flex-col items-center mt-16"
        v-if="requestCoin === false"
      >
        <h6 class="mb-5 text-lg font-bold">{{}}</h6>
        <input class="mb-5" type="date" v-model="info.date" />
        <input class="mb-5" type="time" v-model="info.time" />
        <div
          class="w-full mt-10 flex sm:flex-col lg:flex-row sm:items-center justify-center"
        >
          <d-button
            class="sm:mb-7 lg:mb-0 lg:mr-14"
            @click.prevent="requestAPi()"
            @click="requestCoin = true"
            >search</d-button
          >
          <router-link to="/">
            <d-button color="bg-green">home</d-button>
          </router-link>
        </div>
      </form>
      <d-card :coinInfo="info" v-if="requestCoin === true" />
      <d-button
        v-if="requestCoin === true"
        class="mt-4 w-72"
        @click="requestCoin = !requestCoin"
        color="bg-green"
        >new request</d-button
      >
    </section>
    <d-footer class="mt-32" />
  </div>
</template>

<script>
import DButton from "../components/DButton.vue";
import DFooter from "../components/DFooter.vue";
import DHeader from "../components/DHeader.vue";
import DCard from "../components/DCard.vue";
import { http } from "../services/config";
export default {
  components: { DHeader, DButton, DFooter, DCard },
  data() {
    return {
      requestCoin: false,
      info: { name: this.$route.params.id, date: "", price: 0, time: "" },
      valueDate: "",
    };
  },
  methods: {
    requestAPi() {
      const [year, mounth, day] = this.info.date.split("-");
      const [hours, minutes] = this.info.time.split(":");
      const dateRequest = new Date(+year, mounth - 1, +day, +hours, +minutes);
      const unixTimestamp = Date.parse(dateRequest) / 1000;
      const dateAtt = new Date();
      const unixDateAtt = Date.parse(dateAtt) / 1000;

      http
        .get(
          `/coins/${this.$route.params.id}/market_chart/range?vs_currency=brl&from=${unixTimestamp}&to=${unixDateAtt}`
        )
        .then((response) => {
          this.info.price = response.data.prices[0][1];
        });
    },
  },
};
</script>

<style></style>
