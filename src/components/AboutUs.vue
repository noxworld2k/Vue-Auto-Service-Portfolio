<template>
  <section class="aboutus__container">

    <div class="aboutus__container__images">
      <img src="@/assets/about1.png" class="img1"/>
    </div>

    <div class="aboutus__content">
      <div class="aboutus__content__text">
        <div class="aboutus__content__text-title">
          <h1>About <span>US</span></h1>

        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec euismod, nisl eget consectetur sagittis,
          nisl nisi consectetur nisi, euismod eget nisl nisi
          consectetur nisi. nisl nisi consectetur nisi, euismod eget nisl nisi
          consectetur nisi.
        </p>
        <router-link class="about-link" to="/about">Learn More</router-link>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "AboutUs"
};
</script>

<style scoped>

</style>