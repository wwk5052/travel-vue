<template>
  <div>
    <ul class="list" v-for="(item, key) of cities" :key="key">
      <li class="item">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  }
};
//文本元素使用弹性和模型垂直居中：
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
</script>

<style lang="stylus" scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    text-align: center;
    line-heigth: 0.4rem;
    color: #00bcd4;
  }
}
</style>