import Vue from "vue";
import Vuex from "vuex";

import news from './modules/News';
import chat from './modules/Chat';
import users from './modules/Users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    news,
    chat,
    users
  }
});
