import { createApp } from "vue";
import App from "./App.vue";
import BlogList from "./views/BlogList.vue";
import PostDetails from "./views/PostDetails.vue";
import router from "./router";

import "./assets/style.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");
