import api from '@/api'

export default {
  state: {
    news: [],
  },

  actions: {
    addNews({ state, commit }, article) {
      api.axios.put(api.urls["news"], article).then(res => {
      article = res.data;
      let newNews = state.news.concat();
      newNews.push(article);
      commit('setNews', newNews);
      });
    },
    getNews({ state, commit }) {
      api.axios.get(api.urls["news"]).then(res => {
        commit('setNews', res.data);
      })
    },
  },

  mutations: {
    setNews(state, news) {
      state.news = news;
    }
  },

};