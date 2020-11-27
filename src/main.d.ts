import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.d";
import AnimateCss from "animate.css";
import { FontAwesomeIcon } from "/src/helpers/fontawesome/index.ts";

const app = createApp(App);

app.use(AnimateCss);
app.use(router);
app.component("fa", FontAwesomeIcon);
app.mount("#app");
