<template>
  <HeaderMenu />
  <ContactWithService />
  <FooterMain />
</template>

<script>
import HeaderMenu from "../components/HeaderMenu.vue";
import ContactWithService from "../components/ContactWithService.vue";
import FooterMain from "../components/FooterMain.vue";
export default {
  name: "ContactPage",
  components: { ContactWithService, HeaderMenu, FooterMain }
};
</script>

