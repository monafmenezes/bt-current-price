<template>
  <div>
    <d-header />
    <section class="flex flex-col items-center">
      <h2 class="text-2xl text-center mt-16 mb-10 font-light">Insert Date</h2>

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
export default {
  components: { DHeader, DButton, DFooter, DCard },
  data() {
    return {
      requestCoin: false,
      info: { name: "Luna", url: "", date: "", price: 0, time: "" },
    };
  },
  methods: {
    requestAPi() {

      
      console.log(this.info.date)
      const [year, mounth, day] = this.info.date.split("-");
      const [hours, minutes] = this.info.time.split(":");
      const dateRequest = new Date(+year, mounth - 1, +day, +hours, +minutes);
      const unixTimestamp = Math.floor(dateRequest.getTime() / 1000);
      const dateAtt = new Date();
      console.log(dateRequest);
      console.log(dateAtt)

      const unixDateAtt = Math.floor(dateAtt.getTime() / 1000);

      console.log(unixDateAtt);

      console.log(unixTimestamp);
    },
  },
};
</script>

<style></style>
