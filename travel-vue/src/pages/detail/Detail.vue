<template>
  <div>
    <detail-banner :sightName="sightName" :gallaryImgs="gallaryImgs" :bannerImg="bannerImg"></detail-banner>
    <detail-header :sightName="sightName"></detail-header>
    <div class="contain">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";

export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: []
    };
  },
  mounted() {
    this.getDetailInfo();
    this.lastnum = this.num;
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/api/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.getDetailInfoSucc);
    },
    getDetailInfoSucc(res) {
      const data = res.data;
      if (data.ret && data.data) {
        this.list = data.data.categoryList;
        this.sightName = data.data.sightName;
        this.gallaryImgs = data.data.gallaryImgs;
        this.bannerImg = data.data.bannerImg;
      }
    }
  },
  // 使用keepalive解决页面重复缓存问题，页面打开就会重新请求
  activated() {
    if (this.lastnum !== this.num) {
      this.getDetailInfo();
      this.lastnum = this.num;
    }
  }
};
</script>

<style lang = "stylus" scoped>
.contain {
  height: 50rem;
}</style>
