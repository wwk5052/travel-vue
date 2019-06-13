<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>


<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      const data = res.data;
      if (data.ret && data.data) {
        this.swiperList = data.data.swiperList;
        this.iconList = data.data.iconList;
        this.recommendList = data.data.recommendList;
        this.weekendList = data.data.weekendList;
      }
    }
  },
  mounted() {
    this.getHomeInfo();
    this.lastCity = this.city;
  },
  //页面重新显示的时候
  activated() {
    //判断和原来的城市是不是相同的，如果不相同，那么再重新发送一次ajax请求即可
    if (this.lastCity !== this.city) {
      this.getHomeInfo();
      this.lastCity = this.city;
    }
  }
};
</script>


<style scope>
</style>
