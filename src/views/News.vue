<template>
  <div>
    <h2>Новости <v-icon @click="getNews">{{ 'autorenew' }}</v-icon></h2>
    <v-card v-for="(item, key) in news" :key="key" style="margin:20px;">
        <v-img
          :src="item.img"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ item.title }}</h3>
            <div> {{ item.text }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="#C62828">Не нравится</v-btn>
          <v-btn flat color="#C62828">Отписаться</v-btn>
        </v-card-actions>
      </v-card>
      <v-btn flat color="#C62828" style="margin:50px;" @click="addArticle" >Добавить новость</v-btn>
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex"
  export default {
    name: "News",
    data: () => ({}),
    computed: {
     ...mapState({
       news: state => state.news.news,
     })
    },
    created() {
      this.getNews();
    },
    methods: {
      ...mapActions(["addNews", "getNews"]),
      addArticle() {
        let article = {
          title: "Сделано с любовью и алгоритмом",
          text: "Хранилища навеки!",
          img: "Картинки всё нет",
        };
        this.addNews(article);
      }
    }
  };
</script>
