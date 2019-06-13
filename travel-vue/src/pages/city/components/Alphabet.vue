<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item, key) of letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    //构建数组['A','B']
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: 0
    };
  },
  methods: {
    handleLetterClick(e) {
      const inner = e.target.innerText;
      this.$emit("change", inner);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        //函数节流，减少函数的执行频率
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const startY = this.$refs["A"][0].offsetTop;
          const touchY = e.touches[0].clientY - 80;
          const index = Math.floor((touchY - startY) / 14);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
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
    margin-bottom: 0.01rem;
  }
}
</style>