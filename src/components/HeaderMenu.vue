<script>
export default {
  name: "HeaderMenu",
};
</script>
<template>
  <header class="full-width">
    <div class="container">
      <div class="nav__logo">
        <img src="@/assets/logo.png" alt="brand logo" class="logo" />
      </div>
      <div class="nav__menu">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li>
            <router-link to="/register">Register</router-link>
          </li>
          <li>
            <router-link to="/user">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
