<template>
  <div class="cotainer" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gallary-img" :src="item" alt>
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        //添加图片角标
        paginationType: "fraction",
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    handleGallaryClick() {
      this.$emit("close");
    }
  }
};
</script>
<style lang = "stylus" scoped>
.container >>> .swiper-container {
  overflow: inherit;
}

.cotainer {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;

    .gallary-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
    }
  }
}
</style>
    
    