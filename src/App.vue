<template>
  <div id="app">
    <t-header></t-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import THeader from './components/t-header/theader'
export default {
  name: 'App',
  components: {
    THeader
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  body,html{
    line-height: 1.2;
    font-family: 'PingFang SC','STHeitiSC-Light','Helvetica-Light',Arial,sans-serif,'Droid Sans Fallback';
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    background: #f0f3ef;
  }
</style>
