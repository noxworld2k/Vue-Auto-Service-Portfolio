<template>
  <section class="full-width">
    <div class="contact__section container">
      <div class="contact__box">
        <h2>Addres Our Company</h2>

        <p> street: {{ address.street }}</p>
        <p> state: {{ address.state }}</p>
        <p>  city: {{ address.city }}</p>
        <p>  zip: {{ address.zip }}</p>
        <p>  tel: {{ address.tel }}</p>
        <p>  email:{{ address.email }}</p>
        <h3>
          Or Contanct with us with email form
        </h3>
      </div>
      <FormEmailJS />
    </div>
    <GoogleMap/>
  </section>

</template>

<script>
import FormEmailJS from "./forms/FormEmailJS.vue";
import GoogleMap from "./googlemap/GoogleMap.vue";
export default {
  name: "ContactWithService",
  components: { GoogleMap, FormEmailJS },
  data() {
    return {
      address: {
        street: "ul. Krakowska",
        state: "Mazowieckie",
        city: "Warsaw",
        zip: "00-000",
        tel: "+48 123 456 789",
        email: "typical@email.com",
      }
    }
  }
};
</script>
