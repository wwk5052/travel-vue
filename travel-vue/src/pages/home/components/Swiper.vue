<template>
  <div class="swiper">
    <swiper ref="mySwiper" :options="swiperOption" v-if="list.length">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" alt>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>


<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}

.swiper {
  width: 100%;
  height: 2rem;
  background: #eee;
  color: #00afc7;

  img {
    display: block;
    width: 100%;
    height: 2rem;
  }
}
</style>
