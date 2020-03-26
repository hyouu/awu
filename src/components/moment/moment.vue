<template>
    <div class="moment">
      <div class="tip">
        <img src="./tip.jpg" alt="" class="image">
        <br />
        dbq暂时没有内容TT
      </div>
      <router-link class="back" to="/">
        <span class="text">返回首页</span>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'moment'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.moment
  .tip
    text-align: center;
    width: 95%;
    background-color: #fff;
    margin-top: 10px;
    padding: 10px;
    font-size: 13px;
    color: dimgrey;
    .image
      width: 100px;
      margin-bottom: 5px;
  .back
    display: block;
    padding: 10px 5px;
    text-decoration: none;
    margin: 0 auto;
    text-align: center;
    .text
      text-align: center;
      font-size: 13px;
      color: dimgrey;
</style>
