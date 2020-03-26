<template>
<div class="detail-container">
  <div class="detail">
    <div class="title">{{detail.title}}</div>
    <div class="user">
      <span class="name">{{username}}</span>
      <span class="time">{{detail.created_time | dateFormat}}</span>
    </div>
    <div class="content">
      {{detail.content}}
    </div>
    <div class="image" v-if="detail.images!==''">
      <img :src="detail.images" alt="">
    </div>
  </div>
  <div class="back" @click="back">
    <span class="text">返回上一页</span>
  </div>
</div>
</template>
<script>
import api from 'api/api'
import parseTime from 'common/js/format'

export default {
  data () {
    return {
      id: '',
      detail: {},
      username: ''
    }
  },
  // created () {
  //   this.id = this.$route.query.id
  //   console.log(this.id)
  //   this.getDetail()
  // },
  activated () {
    this.id = this.$route.query.id
    this.getDetail()
  },
  methods: {
    getDetail () {
      api.getDetail(this.id).then(res => {
        if (res.code === 0) {
          this.detail = res.data
          if (this.detail.user.nickname && this.detail.user.nickname.length > 0) {
            this.username = this.detail.user.nickname
          } else {
            this.username = this.detail.user.username
          }
        }
      })
    },
    back () {
      this.detail = ''
      this.$router.back()
    }
  },
  watch: {
    '$route' (to, from) {
      // this.$router.go(0)
    }
  },
  filters: {
    dateFormat (time) {
      // time = +time * 1000
      const d = new Date(time)
      const now = Date.now()

      const diff = (now - d) / 1000
      if (diff < 30) {
        return '刚刚'
      } else if (diff < 3600) { // less 1 hour
        return Math.ceil(diff / 60) + '分钟前'
      } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前'
      } else if (diff < 3600 * 24 * 2) {
        return '1天前'
      }
      return parseTime(time)
    }
  }
}
</script>
<style lang="stylus" scoped>
.detail {
  box-sizing: border-box;
  width: 100%;
  margin: 54px 0 0;
  background-color #fff
  padding: 12px 12px 24px;
  .title {
    // width: 100%;
    background-color: #fff;
    font-size: 14px;
  }
  .user {
    margin: 6px 0;
    .name {
      font-size: 11px;
      color: #999;
    }
    .time {
      font-size: 11px;
      color: #999;
      margin-left: 6px;
    }
  }
  .content {
    margin-top: 24px;
    font-size: 13px;
    color: #666;
    word-wrap: break-word;
    white-space:pre-line  }
  .image {
    margin: 18px 0 0;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.back {
    display: block;
    padding: 10px 5px;
    text-decoration: none;
    margin: 6px auto;
    text-align: center;
    .text {
      text-align: center;
      font-size: 13px;
      color: dimgrey;
    }
  }
</style>
