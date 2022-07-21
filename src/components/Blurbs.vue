<template>
  <section class="blurbs__section">
    <div class="blurbs__box">
      <h1>
        REGISTER AND BOOK A REPAIR
      </h1>
    </div>
    <div class="container blurb">
      <div class="blurb__box">
        <img src="@/assets/icon1.png" />
        <div class="blurb__box-content">
          <h2>
            Car diagnostic
          </h2>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.
          </p>
          <router-link to="/">Read More</router-link>
        </div>
      </div>
      <div class="blurb__box">
        <img src="@/assets/icon2.png" />
        <div class="blurb__box-content">
          <h2>
            Car electrics
          </h2>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.
          </p>
          <router-link to="/">Read More</router-link>
        </div>
      </div>
      <div class="blurb__box">
        <img src="@/assets/icon3.png" />
        <div class="blurb__box-content">
          <h2>
            car air conditioning
          </h2>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.
          </p>
          <router-link to="/">Read More</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Blurbs"
};

</script>
