<template>
  <section class="form__section">
    <div class="container">
      <Form>
        <div class="form-group">
          <label>Email</label>
          <Field
            type="email"
            :rules="formValidator.email"
            v-model="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
          />
          <ErrorMessage name="email" class="error-message" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <Field
            type="password"
            v-model="password"
            :rules="formValidator.password"
            name="password"
            placeholder="Enter password"
          />
          <ErrorMessage name="password" class="error-message" />
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <Field
            type="password"
            :rules="formValidator.passwordConfirmation"
            name="repeatPassword"
            placeholder="Confirm password"
          />
          <ErrorMessage name="repeatPassword" class="error-message" />
        </div>

        <div class="form-group">
          <p>
            <button @click.prevent="registerUser" class="btn btn-primary">
              Register
            </button>
          </p>
          <p>
            <button class="btn btn-primary" @click="singInWithGoogle">
              Sing In with Google
            </button>
          </p>
        </div>
        <div v-if="userRegistered">
          <p class="form-group">Register successfully</p>
        </div>
      </Form>
    </div>
  </section>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  name: "RegisterNewUser",
  data() {
    return {
      email: ref(""),
      password: ref(""),
      repeatPassword: ref(""),
      userRegistered: false,
    };
  },
  methods: {
    registerUser: function () {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((result) => {
          this.userRegistered = true;
          console.log(result);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  computed: {
    formValidator() {
      return this.$store.state.validator;
    },
  },
};
</script>
