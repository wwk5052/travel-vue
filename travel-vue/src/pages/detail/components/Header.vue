<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs">
      <i class="iconfont header-abs-back">&#xe682;</i>
    </router-link>
    <router-link tag="div" to="/" class="header-fixed" v-show="showAbs" :style="this.opacityStyle">
      海上观光巴士
      <div class="iconfont header-back">&#xe682;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  mounted() {
    //页面展示的时候指向的钩子函数
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    //页面隐藏的时候执行的钩子函数
    //在页面隐藏的时候对事件进行解绑
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const top = window.pageYOffset;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = true;
      } else {
        this.showAbs = false;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  line-height: 0.8rem;

  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  overflower: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  font-size: 0.32rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #00bcd4;
  z-index: 99;

  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    font-size: 0.4rem;
    width: 0.64rem;
    color: #fff;
  }
}
</style>