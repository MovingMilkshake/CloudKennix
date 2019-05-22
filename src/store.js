import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [{
      title:"Заголовок из хранилища",
      text: "Некий текст из хранилища",
      img: "*Ссылка на картинку из хранилища*"
    }]
  },
  mutations: {
    setNews(state, news) {
      state.news = news;
    }
  },
  actions: {
    addNews({ state, commit }, article) {
      let newNews = state.news.concat();
      newNews.push(article);
      commit('setNews', newNews);
    }
  }
});
