import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/board",
    name: "board",
    component: () => import("../views/board/")
  },
  {
    path: "/editor",
    name: "editor",
    component: () => import("../views/editor")
  },
  {
    path: "/:collection/:document",
    name: "collection-document",
    component: () => import("@/components/common/renderer")
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () => import("../views/PageNotFound")
  },
  {
    path: "/storage",
    name: "storage",
    component: () => import("../views/storage")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
