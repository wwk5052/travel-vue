<template>
  <div>
    <div class="banner">
      <img
        @click="handleBannerClcik"
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1903/b6/b6255aaa6dd79ac6a3.img.jpg_600x330_6ee23e52.jpg"
        alt
      >
      <div class="banner-info">
        <div class="banner-title">这是内容(AAAA景区)</div>
        <div class="banner-number">
          <i class="iconfont magnifier banner-icon">&#xe650;</i>39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "../../../common/gallary/Gallary";

export default {
  name: "DetailBanner",
  data() {
    return {
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1903/b6/b6255aaa6dd79ac6a3.img.jpg_r_800x800_7cf766a9.jpg",
        "http://img1.qunarzz.com/sight/p0/1903/a6/a687f83eff54a056a3.img.jpg_r_800x800_f7d9ae43.jpg"
      ],
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
    CommonGallary
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
