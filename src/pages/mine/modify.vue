<template>
  <div class="modify">
    <div class="input-wrapper">
      <label for="username">用&nbsp;&nbsp;户&nbsp;&nbsp;名：</label>
      <input id="username" type="text" disabled placeholder="用户名" v-model="username">
    </div>
    <div class="input-wrapper">
      <label for="username">用户昵称：</label>
      <input id="username" type="text" placeholder="请输入用户名" v-model="nickname">
    </div>
    <div class="btn">
      <div class="submit" @click="updateInfo">确定</div>
      <div class="cancel" @click="cancel">取消</div>
    </div>
    <modal :msg="msg" :showModal="showModal" @hide="hideModal"></modal>
  </div>
</template>
<script>
import api from 'api/api'
import modal from 'components/modal/modal'

export default {
  data () {
    return {
      username: '',
      nickname: '',
      showModal: false,
      msg: ''
    }
  },
  mounted () {
    this.nickname = this.$route.params.nickname
    this.username = this.$route.params.username
  },
  methods: {
    updateInfo () {
      console.log('-----' + this.nickname)
      if (this.nickname.length < 2 || this.nickname.length > 16) {
        this.msg = '昵称长度为2-16位'
        this.showModal = true
        return
      }
      let nPattern = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/
      if (!nPattern.test(this.nickname)) {
        this.msg = '昵称不能包含特殊字符，只允许汉字，数字和字母'
        this.showModal = true
        return
      }
      api.updateInfo({nickname: this.nickname}).then(res => {
        if (res.code === 0) {
          this.$router.push({
            name: 'mine',
            params: {
              nickname: res.data.nickname
            }
          })
        }
      })
    },
    cancel () {
      this.$router.back()
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
.modify {
  margin: 54px 0;
  .input-wrapper {
    text-align: left ;
    background-color: #fff;
    padding: 8px 18px;
    input {
      font-size: 14px;
      padding: 8px;
      border: none;
      outline: none;
      background-color: #fff;
    }
    label {
      display: inline-block;
      // width: 70px;
      font-size: 14px;
    }
  }
  .btn {
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    align-items center
    justify-content: space-between;
    font-size: 12px;
    line-height: 48px;
    .submit {
      width: 50%
      flex: 1 1 50%;
      color: #fff;
      text-align: center;
      background-color: #6278ff;
    }
    .cancel {
      width: 50%
      flex: 1 1 50%;
      text-align: center;
      background-color: #fff;
    }
  }
}
</style>
