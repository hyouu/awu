<template>
    <div class="t-header">
      <!--<span class="back">back</span>-->
      <div class="avatar"></div>
      <div class="title">啊呜</div>
    </div>
</template>

<script>
export default {
  name: 't-header'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .t-header
    position: fixed;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    text-align: center;
    background-color: #6278ff;
    color: #fff;
    font-size: 0;
    z-index: 99;
    .back
      position: absolute;
      font-size: 12px;
      left: 10px;
      line-height: 44px;
    .avatar
      display: inline-block;
      vertical-align: top;
      margin-top: 6px;
      width: 30px
      height: 30px;
      margin-right: 9px;
      background-image: url('./logo.png');
      background-size: 95% 95%;
    .title
      display: inline-block;
      vertical-align: top;
      line-height: 44px
      font-size: 14px;
</style>
