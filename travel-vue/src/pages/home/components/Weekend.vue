<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" :key="item.id" v-for="item of recommendList">
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
  data() {
    return {
      recommendList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
          title: "故宫",
          desc: "这是故宫"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
          title: "故宫",
          desc: "这是故宫"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
          title: "故宫",
          desc: "这是故宫"
        },
        {
          id: "004",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
          title: "故宫",
          desc: "这是故宫"
        },
        {
          id: "005",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
          title: "故宫",
          desc: "这是故宫"
        },
        {
          id: "006",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
          title: "故宫",
          desc: "这是故宫"
        },
        {
          id: "007",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
          title: "故宫",
          desc: "这是故宫"
        },
        {
          id: "008",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
          title: "故宫",
          desc: "这是故宫"
        },
        {
          id: "009",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
          title: "故宫",
          desc: "这是故宫"
        },
        {
          id: "010",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
          title: "故宫",
          desc: "这是故宫"
        }
      ]
    };
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
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>