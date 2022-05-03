import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import Date from "/src/views/Date.vue";
import Other from "/src/views/Other.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/date",
    name: "Date",
    component: Date,
  },
  {
    path: "/other",
    name: "Other",
    component: Other,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
