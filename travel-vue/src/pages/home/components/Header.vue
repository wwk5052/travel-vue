<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont back">&#xe682;</i>
    </div>
    <div class="header-input">
      <i class="iconfont magnifier">&#xe623;</i>
      输入城市/景点/游玩/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <i class="iconfont">&#xe627;</i>
      </div>
    </router-link>
  </div>
</template>

<script>
import "@/assets/iconfont/demo.css";
import "@/assets/iconfont/iconfont.css";
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState(["city"])
  }
};
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  line-height: 0.86rem;
  background-color: #00bcd4;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;
    text-align: center;

    .back {
      font-size: 0.36rem;
    }
  }

  .header-input {
    flex: 1;
    background-color: #fff;
    border-radius: 0.1rem;
    margin-top: 0.12rem;
    height: 0.64rem;
    margin-left: 0.2rem;
    margin-right: 0.1rem;
    color: #ccc;
    line-height: 0.64rem;

    .magnifier {
      margin-left: 0.2rem;
    }
  }

  .header-right {
    min-width: 1.04rem;
    float: right;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
  }
}
</style>
