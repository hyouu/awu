<template>
  <div class="content">
    <div class="img">
      <img src="./bg1.jpg" alt="">
    </div>
    <div class="title">hhhhh</div>
  </div>
</template>

<script>
export default {
  name: 'content',
  props: {
    bgImage: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.content
  width: 95%;
  background-color: #fff;
  height: 40px
  .title
    height: 40px;
</style>
