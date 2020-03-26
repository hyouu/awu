<template>
  <div class="modal" v-if="showModal">
      <div class="modal-content">
        {{msg}}
      </div>
      <div class="modal-btns">
        <div class="comfirm" @click="hideModal">确 定</div>
        <div class="cancel" v-if="showCancel" @click="hideModal">取 消</div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    msg: {
      type: String,
      default: '提示信息'
    },
    showComfirm: {
      type: Boolean,
      default: false
    },
    showCancel: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    hideModal () {
      // this.isShow = false
      this.$emit('hide')
    }
  }
}
</script>
<style lang="stylus" scoped>
.modal {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.3)
  .modal-content {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 70%;
    color: #868686;
    padding: 48px 4px 40px;
    font-size: 14px;
    background-color: #fff;
    border-radius: 6px 6px 0 0;
    line-height: 1.2;
  }
  .modal-btns {
    display: flex;
    box-sizing: border-box;
    width: 70%;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 0 0 6px 6px;
    .comfirm {
      flex: 1;
      font-size: 14px;
      padding: 12px;
      text-align: center;
      color: #108ee9;
    }
    .cancel {
      flex: 1;
      font-size: 14px;
      padding: 12px;
      text-align: center;
      border-left: 1px solid #d9dce6;
    }
  }
}
</style>
