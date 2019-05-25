<template>
  <v-app> 
    <v-navigation-drawer permanent class="elevation-6" style="width:100%; height:70px; text-align: center;">
      <v-toolbar color="#C62828" style="width:100%; height:70px;">
        <v-list>
          <v-list-tile color="white">
            <v-list-tile-title class="title" style="font-size:35px!important; height:auto;"> 
              Сайт Про Кошек Без Кошек
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
    </v-navigation-drawer>
    <layout></layout>
  </v-app>
</template>

<script>

import Layout from '@/views/Layout'

export default {
  name: 'App',
  components: { Layout },
  data: () => ({})
  };
</script>
