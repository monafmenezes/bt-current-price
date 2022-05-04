<template>
  <div class="w-full flex flex-col items-center">
    <d-header />
    <h2 class="text-2xl text-center mt-16 mb-16 font-light">
      Other Currencies
    </h2>

    <ul class="flex sm:flex-col lg:flex-row lg:justify-center">
      <li class="flex flex-col justify-center items-center m-7">
        <img
          class="w-20 h-20 mb-3 animate-pulse"
          src="src/static/dacxi.png"
          alt="Dacxi"
        />
        <router-link class="font-semibold hover:text-orange" to="/date"
          >Dacxi</router-link
        >
      </li>
      <li class="flex flex-col justify-center items-center m-7">
        <img
          class="w-20 h-20 mb-3 animate-pulse"
          src="src/static/eth.png"
          alt="ETH"
        />
        <router-link class="font-semibold hover:text-orange" to="/date"
          >Eth</router-link
        >
      </li>
      <li class="flex flex-col justify-center items-center m-7">
        <img
          class="w-20 h-20 mb-3 animate-pulse"
          src="src/static/atom.svg"
          alt="Atom"
        />
        <router-link class="font-semibold hover:text-orange" to="/date"
          >Eth</router-link
        >
      </li>
      <li class="flex flex-col justify-center items-center m-7">
        <img
          class="w-20 h-20 mb-3 animate-pulse"
          src="src/static/luna.svg"
          alt="Luna"
        />
        <router-link class="font-semibold hover:text-orange" to="/date"
          >Luna</router-link
        >
      </li>
    </ul>
    <router-link to="/" class="mx-auto mt-5">
      <d-button>home</d-button>
    </router-link>
    <d-footer class="mt-32" />
  </div>
</template>

<script>
import DButton from "../components/DButton.vue";
import DFooter from "../components/DFooter.vue";
import DHeader from "../components/DHeader.vue";
export default {
  components: { DHeader, DFooter, DButton },
};
</script>
