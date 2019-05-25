<template>
  <div>
    <h2>Вход</h2>
    <input v-model="username" type="text" placeholder="Имя пользователя" />
    <input v-model="password" type="text" placeholder="Пароль" />
    <v-btn @click="login({ username, password })">Войти</v-btn>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "Login",
    data: () => ({
      username: "",
      password: ""
    }),
    methods: {
      ...mapActions(["login"]),
    }
  };
</script>