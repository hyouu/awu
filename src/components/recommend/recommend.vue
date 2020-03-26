<template>
    <div class="recommend">
      <!-- <tab></tab>
      <split></split> -->
      <div class="note-content" v-for="(item,index) in dataList" :key="index" :post="item"  @click="toPage(item._id)">
        <div class="note-date">{{item.created_time | dateFormat }}</div>
        <div class="content-container">
          <div class="title">{{item.title}}</div>
          <div class="content">{{item.content}}</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Tab from 'components/tab/tab'
import split from 'components/split/split'
import notes from 'components/notes/notes'
import modal from 'components/modal/modal'
import Footer from 'components/footer/footer'
import api from 'api/api'
import parseTime from 'common/js/format'

export default {
  name: 'recommend',
  data () {
    return {
      dataList: [],
      msg: ''
    }
  },
  activated () {
    this.getList()
  },
  methods: {
    getUser () {
      // let that = this
      this.$store.dispatch('getInfo').then(() => {

      }).catch(res => {
        // this.$store.dispatch('logOut').then(() => {
        //   that.msg = '获取用户信息失败，请重新登录！'
        //   that.showModal = true
        //   this.$router.push('/login')
        // })
      })
    },
    getList () {
      api.getAllPost().then(res => {
        if (res.code === 0) {
          this.dataList = res.data
        }
      })
    },
    toPage (e) {
      this.$router.push({
        path: '/detail',
        query: {
          id: e
        }
      })
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
  },
  components: {
    Tab,
    split,
    notes,
    modal,
    Footer
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.recommend {
  margin:50px 0 54px;
  .note-content {
    position: relative;
    width: 95%;
    margin: 0 auto;
    padding: 0 6px 18px;
    border-radius: 5px;
    border-left: 1px solid #ccc;
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 6px;
      height: 6px;
      background-color: #6278ff;
      opacity: 0.5;
      border-radius: 50%;
      top: 0px;
      left: -3px;
    }
    .note-date {
      font-size: 10px;
      color: #666;
      margin: 0 0 12px;
      // padding-top: 12px;
      // border-top: 1px solid #ccc;
    }
    .content-container {
      margin-top: 5px;
      background-color: #fff;
      border-radius: 6px
      .image-container {
        height: 180px;
        overflow: hidden;
        .image {
          width: 100%;
        }
      }
      .title {
        padding: 10px;
        color: #000;
        font-size: 13px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .content {
        padding: 10px;
        color: #8e8e8e;
        font-size: 11px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
