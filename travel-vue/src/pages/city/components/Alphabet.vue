<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet"
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
    color: #ccc;
  }
}
</style>