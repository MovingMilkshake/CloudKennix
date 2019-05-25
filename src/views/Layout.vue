<template>
  <div>
    <v-layout row wrap>
      <v-flex lg2 xs4 xl2>
        <navigation></navigation>
      </v-flex>
      <v-flex lg10 xs8 xl10 text-xs-center style="margin-top:20px;">
        <router-view></router-view>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"
export default {
  name: "Layout",
  components: { Navigation }
};
</script>
