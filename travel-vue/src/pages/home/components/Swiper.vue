<template>
  <div class="swiper">
    <swiper ref="mySwiper" :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
      },
      swiperList: [
        {
          id: "001",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/fdff7e5abe30ec5f014b4d7464e0c3ef.jpg_750x200_d1d693c8.jpg"
        },
        {
          id: "002",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"
        },
        {
          id: "003",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg"
        },
        {
          id: "004",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/aef5f8864f5a1167599609307571b2c4.jpg_750x200_db7bedbe.jpg"
        }
      ]
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
