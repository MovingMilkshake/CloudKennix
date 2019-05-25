<template>
  <v-navigation-drawer permanent class="elevation-6" style="width:100%; text-align: center;" >
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="$router.push(item.path)"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <div style="margin-top:50px">
    <router-link to=/log style="text-decoration:none;"><v-btn flat color="#C62828" style="margin:5px;">Войти</v-btn></router-link>
    <router-link to=/reg style="text-decoration:none;"><v-btn color="#C62828" style="margin:5px;">Зарегистрироваться</v-btn></router-link>
    </div>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "Navigation",
    data () {
      return {
        items: [
          { title: 'Новости', icon: 'dashboard', path: '/' },
          { title: 'Чат', icon: 'question_answer', path: '/chat' },
          { title: 'Магазин', icon: 'shopping_cart', path: '/store' },
        ],
        right: null
      }
    }
  }
</script>