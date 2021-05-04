import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/recognition",
    name: "Home",
    component: Home
  },
  {
    path: "/file",
    name: "File",
    component: () => import("../views/file")
  },
  {
    path: "/support",
    name: "Support",
    component: () => import("../views/support")
  },
  {
    path: "/cooperation",
    name: "Cooperation",
    component: () => import("../views/cooperation")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
