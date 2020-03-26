<template>
  <div class="login">
    <p class="login-tit">欢迎登陆</p>
    <div class="input-wrapper">
      <label for="username">用户名：</label>
      <input id="username" type="text" placeholder="请输入用户名" v-model="user.username">
    </div>
    <div class="input-wrapper">
      <label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
      <input id="password" type="password" placeholder="请输入密码" v-model="user.password">
    </div>
    <div @click="login">
      <div class="btn-login">登录</div>
    </div>
    <router-link class="back" to="/register">
      <span class="text">注册账号</span>
    </router-link>
    <modal :msg="msg" :showModal="showModal" @hide="hideModal"></modal>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import api from 'api/api'
import modal from 'components/modal/modal'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      msg: '',
      showModal: false
    }
  },
  created () {

  },
  methods: {
    login () {
      if (this.user.username === '') {
        this.msg = '请输入用户名！'
        this.showModal = true
        return
      }
      if (this.user.password === '') {
        this.msg = '请输入密码！'
        this.showModal = true
        return
      }
      this.$store.dispatch('login', this.user).then(() => {
        // console.log(this.$store.user.token)
        console.log('登录成功')
        this.$router.push('/')
      }).catch(err => {
        this.msg = err.msg
        this.showModal = true
      })
    },
    hideModal () {
      this.showModal = false
    }
  },
  components: {
    modal
  }
}
</script>
<style lang="stylus" scoped>
.login {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding-top: 84px;
  .login-tit {
    font-size: 18px;
  }
  .input-wrapper {
    text-align: center;
    background-color: #fff;
    padding: 12px 18px;
    input {
      font-size: 14px;
      padding: 8px;
      border: none;
      outline: none;
    }
  }
  .btn-login {
    width: 280px;
    background-color: #6278ff;
    padding: 12px 0;
    margin-top: 12px;
    text-align: center;
    color: #fff;
    border-radius: 6px;
  }
  .back {
    display: block;
    padding: 10px 5px;
    text-decoration: none;
    margin: 0 auto;
    text-align: center;
    .text {
      text-align: center;
      font-size: 13px;
      color: dimgrey;
    }
  }
}
</style>
