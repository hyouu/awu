<template>
  <div class="footer" v-if="isShow">
    <div class="ft-container">
      <div class="ft-item" @click="toPage('/recommend')">首页</div>
      <div class="ft-item" @click="toPage('/mine')">我的</div>
      <div class="ft-center" @click="toPage('/post')">+</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    toPage (e) {
      this.$router.push(e)
    }
  }
}
</script>
<style lang="stylus" scoped>
.footer {
  position: fixed;
  height: 40px;
  width: 100%;
  background-color: #fff;
  bottom: 0;
  left: 0;
  box-shadow: 1px -1px 10px 1px #ccc;
  .ft-container {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .ft-item {
    flex: 1;
    font-size: 12px;
    text-align: center;
    color: #999;
  }
  .ft-center {
    position absolute;
    width 48px;
    height 48px;
    left: calc(50% - 24px);
    top: -12px;
    border-radius: 50%;
    background-color #eee
    border: 1px soild #eee;
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 20px;
    box-shadow: 1px -1px 10px 1px #ccc;
  }
}
</style>
