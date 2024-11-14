import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import router from "./router";
import store from "./store";
import { auth } from "./firebase";
import { authChange } from "./firebase";
import TheSpinner from "./components/UI/TheSpinner.vue";

let app;

authChange(auth, (user) => {
  store.dispatch("setUser", user);
  if (!app) {
    app = createApp(App);
    app.use(store);
    app.use(router);
    app.component("the-spinner", TheSpinner);
    app.mount("#app");
  }
});
