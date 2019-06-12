<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" :key="item.id" v-for="item of weekendList">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array
  },
  data() {
    return {};
  }
};
</script>


<style lang="stylus" scoped>
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
}

.item {
  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;

    .item-img {
      width: 100%;
    }
  }

  .item-img {
    width: 1.7rem;
    heigth: 1.7rem;
  }

  .item-info {
    padding: 0 0.2rem;
    flex: 1;
    // 因为是弹性盒模型，所以设置这个属性可以出现效果
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      padding-top: 0.2rem;
    }

    .item-desc {
      line-height: 0.4rem;
      color: #616161;
      font-size: 0.24rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding-bottom: 0.2rem;
    }
  }
}
</style>