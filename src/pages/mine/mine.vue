<template>
  <div class="mine">
    <div class="info-container">
      <img src="./avatar.png" class="avatar">
      <div>
        <p class="username">{{nickname?nickname:username}}</p>
      </div>
    </div>
    <div class="mine-item" @click="toModify">- 修改资料</div>
    <div class="mine-item" @click="toPage('/my')">- 我的动态</div>
    <div class="back" @click="logOut">
      <span class="text">退出登录</span>
    </div>
  <Footer></Footer>
  <modal :msg="msg" :showModal="showModal" @hide="hideModal"></modal>
  </div>
</template>
<script>
import Footer from 'components/footer/footer'
import modal from 'components/modal/modal'

export default {
  data () {
    return {
      nickname: '',
      username: '',
      msg: '',
      showModal: false
    }
  },
  mounted () {
    // this.nickname = this.$route.params.nickname
    this.getUser()
  },
  watch: {
    '$route' (to, from) {
      if (from.name === 'modify' && this.$route.params.nickname) {
        this.getUser()
      }
    }
  },
  methods: {
    logOut () {
      this.$store.dispatch('logOut').then(() => {
        this.$router.push('/login')
      // eslint-disable-next-line handle-callback-err
      }).catch(err => {
        this.msg = err.msg
        this.showModal = true
      })
    },
    getUser () {
      let that = this
      this.$store.dispatch('getInfo').then((res) => {
        this.username = res.data.username
        this.nickname = res.data.nickname
      }).catch(res => {
        this.$store.dispatch('logOut').then(() => {
          that.msg = '获取用户信息失败，请重新登录！'
          that.showModal = true
          this.$router.push('/login')
        })
      })
    },
    toModify () {
      this.$router.push({
        name: 'modify',
        params: {
          username: this.username,
          nickname: this.nickname
        }
      })
    },
    toPage (e) {
      this.$router.push(e)
    },
    hideModal () {
      this.showModal = false
    }
  },
  components: {
    Footer,
    modal
  }
}
</script>
<style lang="stylus" scoped>
.mine {
  margin: 54px 0 58px;
  .info-container {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow:3px 3px 10px #aaaaaa;
    margin-bottom: 32px;
    .avatar {
      height 54px;
      height 54px
      border 1px solid #ccc;
      border-radius: 50%;
    }
    .username {
      margin-left: 8px;
      font-size: 14px;
      color: #333;
    }
  }
  .mine-item {
    box-sizing: border-box;
    height: 48px;
    width: 100%;
    padding: 0 12px;
    color: #666;
    font-size: 14px;
    line-height: 48px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
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
}
</style>
