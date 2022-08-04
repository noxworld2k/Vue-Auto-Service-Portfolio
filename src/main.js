import { createApp } from "vue";
import store from "./stores/store";
import "./scss/main.scss";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookSquare, faInstagramSquare, faTwitterSquare);

import VueGoogleMaps from "@fawmi/vue-google-maps";
import { SetupCalendar } from "v-calendar";

const app = createApp(App);
app.use(VueAxios, axios);
app.use(store);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(SetupCalendar, {});
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB77xK5tBP-cH-qd4qcOVDi6ZJuIYQrWpE",
  },
});
app.mount("#app");
