<template>
  <div>
    <div class="banner">
      <img @click="handleBannerClcik" class="banner-img" :src="this.bannerImg" alt>
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <i class="iconfont magnifier banner-icon">&#xe650;</i>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <FadeAnimation>
      <common-gallary :imgs="this.gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </FadeAnimation>
  </div>
</template>

<script>
import CommonGallary from "../../../common/gallary/Gallary";
import FadeAnimation from "../../../common/fade/Fade";

export default {
  name: "DetailBanner",
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data() {
    return {
      showGallary: false
    };
  },
  methods: {
    handleBannerClcik() {
      this.showGallary = !this.showGallary;
    },
    handleGallaryClose() {
      this.showGallary = !this.showGallary;
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
};
</script>

<style lang = "stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-heigth: 0.6rem;
    display: flex;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      font-size: 0.32rem;
      padding: 0 0.2rem;
      flex: 1;
    }

    .banner-number {
      padding: 0 0.4rem;
      height: 0.32rem;
      font-size: 0.24rem;
      line-height: 0.32rem;
      border-radius: 0.2rem;
      background-color: rgba(0, 0, 0, 0.8);
      margin-top: 0.14rem;
      margin-bottom: 0.2rem;

      .banner-icon {
        font-size: 0.24rem;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>
