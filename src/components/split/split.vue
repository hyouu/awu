<template>
    <div class="split">
      <span class="title">我的动态</span>
      <!-- <router-link class="more" to="moment">更多</router-link> -->
    </div>
</template>

<script>
export default {
  name: 'split'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .split
    font-size: 14px;
    // color: dimgrey;
    color: #333;
    .title
      display: inline-block;
      margin: 15px 15px 15px 0;
    .more
      display: inline-block;
      font-size: 12px;
      text-decoration: none;
      float: right;
      margin: 15px;
      color: #aaa;
</style>
