<template>
    <div class="tab">
      <router-link class="tab-item" to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-egg"></use>
        </svg>
        <span class="text">来看看吧</span>
        </router-link>
      <router-link class="tab-item" to="/moment">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cocktail"></use>
        </svg>
        <span class="text">来说说吧</span>
      </router-link>
      <router-link class="tab-item" to="/moment">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-orange"></use>
        </svg>
        <span class="text">来玩玩吧</span>
      </router-link>
      <router-link class="tab-item" to="/moment">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-condiments"></use>
        </svg>
        <span class="text">来听歌吧</span>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab
    background-color: #fff;
    margin: 5px auto;
    padding: 5px 0;
    text-align: center;
    width: 98%;
    border-radius: 5px;
    box-shadow:3px 3px 10px #aaa;
    .tab-item
      display: inline-block;
      width: 50px;
      background-color: #fff;
      text-decoration: none;
      text-align: center;
      color: black
      padding: 5px 10px;
      .icon
        width: 2.5em;
        height: 2.5em;
      .text
        /*bottom: 0px;*/
        font-size: 10px;
</style>
