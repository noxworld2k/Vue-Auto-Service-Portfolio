<template>
  <div>
    <form>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" />
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
      <button @click="Login">Login</button>
    </form>
  </div>
</template>

<script>
import { auth } from "@/config";
import router from "@/router";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    Login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          router.push("/user:id");
        })
        .catch(() => {
          this.errorMessage = "bad email or password";
        });
    },
  },
};
</script>

<style scoped></style>
