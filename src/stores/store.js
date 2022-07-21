import { createStore } from 'vuex';
import * as yup from "yup";

export default createStore({
  state: {
    userRegister: {
      userName: "",
      password: "",
      repeatPassword: "",
      email: "",
    },
    validator: {
      userName: yup.string().required("Username is required"),
      email: yup.string().required().email(),
      password: yup.string().required().min(8).matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
      passwordConfirmation: yup.string()
        .test('passwords-match', 'Passwords must match', function(value){
          return this.password === value
        }),
    },
    apiKey: "AIzaSyB77xK5tBP-cH-qd4qcOVDi6ZJuIYQrWpE",
  },
  getters: {},
  actions: {

  },
  mutations: {}
});
