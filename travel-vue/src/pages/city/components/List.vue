<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="inner of item" :key="inner.id">
          <div class="item border-bottom">{{inner.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    //一旦letter改变后就会执行
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.title {
  color: #666;
  line-height: 0.54rem;
  background-color: #eee;
  padding-left: 0.2rem;
  font-size: 0.26rem;
}

.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;

  .button-wrapper {
    width: 33.33%;
    float: left;

    .button {
      padding: 0.1rem 0;
      text-align: center;
      margin: 0.1rem;
      border: 0.02rem solid #ccc;
      border-radius: 0.06rem;
    }
  }
}

.list {
  position: absolute;
  overflow: hidden;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .item-list {
    .item {
      line-height: 0.54rem;
      color: #666;
      padding-left: 0.2rem;
    }
  }
}
</style>