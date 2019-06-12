<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe682;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
.header {
  overflower: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background-color: #00bcd4;
  font-size: 0.32rem;
  position: relative;

  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    font-size: 0.4rem;
    width: 0.64rem;
    color: #fff;
  }
}
</style>