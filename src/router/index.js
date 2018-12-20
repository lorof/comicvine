import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Fullpage from "@/views/Fullpage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/hero/:id",
      name: "Fullpage",
      component: Fullpage
    }
  ],
  mode: "history"
});
