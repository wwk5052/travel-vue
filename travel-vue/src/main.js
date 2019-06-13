import Vue from "vue";
import App from "./App";
import router from "./router";
//解决移动端高像素(二倍屏)问题，引入border.css即可
import "./assets/style/border.css";
import "./assets/style/reset.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
//移动端点击300ms延时问题
import fastClick from "fastclick";

import store from "./store/index";

Vue.config.productionTip = false;
fastClick.attach(document.body);

Vue.use(VueAwesomeSwiper /* { default global options } */);

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
