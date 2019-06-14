<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="input" class="search-input" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          :key="item.id"
          v-for="item of list"
          class="search-item border-bottom"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>


<script>
import Bscroll from "better-scroll";

export default {
  name: "CitySearch",
  props: { cities: Object },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  methods: {
    handleCityClick(city) {
      this.$store.dispatch("changeCity", city);
      //函数式路由跳转
      this.$router.push("/");
      this.keyword = "";
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background-color: #00bcd4;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
  background-color: #fff;

  .search-item {
    line-height: 0.62rem;
    color: #666;
    padding-left: 0.2rem;
  }
}
</style>