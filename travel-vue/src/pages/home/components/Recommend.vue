<template>
  <div>
    <div class="title">这是热销推荐</div>
    <ul>
      <li class="item border-bottom" :key="item.id" v-for="item of recommendList">
        <img class="item-img" :src="item.imgUrl" alt>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-buttom">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
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
  background-color: #ccc;
  text-indent: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;

  .item-img {
    width: 1.7rem;
    heigth: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    // 因为是弹性盒模型，所以设置这个属性可以出现效果
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .item-buttom {
      background: #ff9300;
      padding: 0 0.2rem;
      line-height: 0.44rem;
      border-radius: 0.06rem;
      margin-top: 0.16rem;
      color: #fff;
    }
  }
}
</style>