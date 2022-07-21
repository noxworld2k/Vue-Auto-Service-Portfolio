<template>
<HeaderMenu/>

  <FooterMain/>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu.vue";
import FooterMain from "../components/FooterMain.vue";
export default {
  name: "AdminPanel",
  components: { FooterMain, HeaderMenu }
};
</script>

<style scoped>

</style>