<template>
  <HeaderMenu />
  <RegisterNewUser/>
  <FooterMain/>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu.vue";
import RegisterNewUser from "../components/RegisterNewUser.vue";
import FooterMain from "../components/FooterMain.vue";
export default {
  name: "RegisterForm",
  components: { FooterMain, HeaderMenu, RegisterNewUser }
};
</script>
