<template>
  <footer className="footer">
    <div class="container footer__container">

      <div class="footer__container__text">
        <h3>
          Our Company details
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quidem.
        </p>
        <p>
          © 2022 Auto Service. All rights reserved for NoxWorld Company.
        </p>
        <p>
          Programmer: Patryk Kowalczyk
        </p>
        <p>
          Desinger: Aleksandra Nadrowska
        </p>
      </div>
      <div class="footer__container__logo">
        <img src="@/assets/logo.png" alt="logo" />
      </div>
      <div class="footer__container__social">
        <font-awesome-icon icon="fa-brands fa-facebook-square"> </font-awesome-icon>
        <font-awesome-icon icon="fa-brands fa-instagram-square"> </font-awesome-icon>
        <font-awesome-icon scale="16" icon="fa-brands fa-twitter-square">
        </font-awesome-icon>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterMain",
};
</script>

<style scoped>

</style>