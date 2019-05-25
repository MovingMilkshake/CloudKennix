<template>
  <div>
    <h2>Регистрация</h2>
    <input v-model="username" type="text" placeholder="Имя пользователя" />
    <input v-model="password" type="text" placeholder="Пароль" />
    <v-btn @click="register">Зарегистрироваться</v-btn>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "Registration",
    data: () => ({
      username: "",
      password: ""
    }),
    methods: {
      ...mapActions(["createUser"]),
      register() {
        this.createUser({
          username: this.username,
          password: this.password
        });
      }
    }
  };
</script>