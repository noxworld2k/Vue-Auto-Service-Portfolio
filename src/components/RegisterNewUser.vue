<template>
  <section class="form__section">
    <div class="container">
      <Form @submit="RegisterUser">
        <div class="form-group">
          <label>Username</label>
          <Field type="text"
                 name="userName"
                 :rules="formValidator.userName"
                 placeholder="Enter username" />
          <ErrorMessage name="userName" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <Field type="password"
                 :rules="formValidator.password"
                 name="password"
                 placeholder="Enter password" />
          <ErrorMessage name="password" />
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <Field type="password"
                 :rules="formValidator.repeatPassword"
                 name="repeatPassword"
                 placeholder="Confirm password" />
          <ErrorMessage name="repeatPassword" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <Field type="email"
                 :rules="formValidator.email"
                 name="email"
                 className="form-control"
                 placeholder="Enter email" />
          <ErrorMessage name="email" />
        </div>
        <div class="form-group">
          <button type="submit"
                  className="btn btn-primary">
            Register
          </button>
        </div>
      </Form>
    </div>
  </section>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import AuthUsers from "../AuthUsers";

export default {
  components: {
    Form,
    Field,
    ErrorMessage
  },
  name: "RegisterNewUser",
  methods: {
    async RegisterUser() {
      if (this.$store.state.validator) {
        try {
          let response = await AuthUsers.post(
            `signUp?key=${this.$store.state.apiKey}`,
            {
            displayName: this.userName,
            password: this.password,
            email: this.email,
            returnSecureToken: true

          });
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }
    }
  },
  computed: {
    formValidator() {
      return this.$store.state.validator;
    }
  }
};


</script>
