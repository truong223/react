import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone);
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(FontAwesomeIcon);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
