<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="contain">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";

export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [
        {
          title: "成人票",
          children: [
            {
              title: "成人三管联票",
              children: [{ title: "三管内的三管联票" }]
            },
            { title: "成人四管联票" },
            { title: "成人五管联票" }
          ]
        },
        {
          title: "学生票",
          children: [{ title: "学生四管联票" }, { title: "学生五馆联票" }]
        }
      ]
    };
  }
};
</script>

<style lang = "stylus" scoped>
.contain {
  height: 50rem;
}</style>
