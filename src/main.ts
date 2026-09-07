import { createApp } from "vue";
import "./style.scss";
import "./style/index.less";
import App from "./index.vue";
import router from "./router";
import Tdesign from "tdesign-vue-next";
import "tdesign-vue-next/es/style/index.css";

console.info(
  `%c BuildTime: %c ${__APP_BUILD_TIME__} %c`,
  `background: #22c55e;border:1px solid #22c55e; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
  `border:1px solid #22c55e; padding: 1px; border-radius: 0 4px 4px 0; color: #22c55e;`,
  "background:transparent"
);

createApp(App).use(router).use(Tdesign).mount("#app");
