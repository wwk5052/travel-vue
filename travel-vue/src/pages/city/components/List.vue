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
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
          <div class="item border-bottom">asdf</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
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