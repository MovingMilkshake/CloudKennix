import Vue from "vue";
import Router from "vue-router";
import News from "./views/News.vue";
import Chat from "./views/Chat.vue";
import Store from "./views/Store.vue";

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
    }
  ]
});
