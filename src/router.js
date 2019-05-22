import Vue from "vue";
import Router from "vue-router";
import News from "./views/News.vue";
import Chat from "./views/Chat.vue";
import Store from "./views/Store.vue";
import Login from "./views/Login.vue";
import Registration from "./views/Registration.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: News
    },
    {
      path: "/chat",
      component: Chat
    },
    {
      path: "/store",
      component: Store
    },
    {
      path: "/reg",
      component: Registration
    },
    {
      path: "/log",
      component: Login
    }
  ]
});
