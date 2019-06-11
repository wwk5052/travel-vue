import Vue from "vue";
import App from "./App";
import router from "./router";
//解决移动端高像素(二倍屏)问题，引入border.css即可
import "./assets/style/border.css";
import "./assets/style/reset.css";
//移动端点击300ms延时问题
import fastClick from "fastclick";

Vue.config.productionTip = false;
fastClick.attach(document.body);
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
