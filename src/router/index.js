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
    path: "/xxx",
    name: "xxxx",
    component: () => import("../views/xxx.vue")
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
