import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Users from "../views/Users.vue";
import Meetings from "../views/Meetings.vue";

import p404 from "../views/http404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/users",
    name: "users",
    component: Users
  },
  {
    path: "/meetings",
    name: "meetings",
    component: Meetings
  },
  {
    path: "*",
    name: "404",
    component: p404
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
