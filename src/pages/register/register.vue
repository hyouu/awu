<template>
  <div class="login">
    <p class="login-tit">欢迎注册</p>
    <div class="input-wrapper">
      <label for="username">用&nbsp;&nbsp;户&nbsp;&nbsp;名：</label>
      <input id="username" type="text" placeholder="请输入用户名" v-model="username">
    </div>
    <div class="input-wrapper">
      <label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
      <input id="password" type="password" placeholder="请输入密码" v-model="password">
    </div>
    <div class="input-wrapper">
      <label for="password">确认密码：</label>
      <input id="password" type="password" placeholder="请输入密码" v-model="comfirmed">
    </div>
    <div @click="register">
      <div class="btn-login">注册</div>
    </div>
    <router-link class="back" to="/login">
      <span class="text">已有账号</span>
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
      username: '',
      password: '',
      comfirmed: '',
      msg: '',
      showModal: false
    }
  },
  created () {

  },
  methods: {
    register () {
      var uPattern = /^[a-zA-Z0-9_-]{4,16}$/
      if (this.username === '') {
        this.msg = '请输入用户名'
        this.showModal = true
        return
      }
      if (this.password === '' || this.comfirmed === '') {
        this.msg = '密码不能为空'
        this.showModal = true
        return
      }
      if (!uPattern.test(this.username)) {
        this.msg = '只能是4-16位长度的数字字母组合'
        this.showModal = true
        return
      }
      if (this.password.length < 6 || this.password.length > 16) {
        this.msg = '密码长度为6-16位！'
        this.showModal = true
        return
      }
      if (this.password !== this.comfirmed) {
        this.msg = '两次输入密码不一致！'
        this.showModal = true
        return
      }
      api.register({
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.code === 0) {
          this.$router.push('/login')
        }
      }).catch(err => {
        console.log(err)
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
    label {
      display: inline-block;
      width: 70px;
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
    margin: 12px auto;
    text-align: center;
    .text {
      text-align: center;
      font-size: 13px;
      color: dimgrey;
    }
  }
}
</style>
