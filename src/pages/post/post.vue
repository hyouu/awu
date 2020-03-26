<template>
  <div class="post">
    <div class="title">
      <input type="text" placeholder="请输入标题" v-model="title">
    </div>
    <div class="content">
      <textarea name="" id="" rows="18" placeholder="请输入内容..." v-model="content"></textarea>
    </div>
    <div class="image">
      <div class="image-wrapper">
        <input
              type="file"
              accept="image/*"
              mutiple="mutiple"
              @change="handleFileChange"
              ref="upload"
            >
      </div>
            <div class="pre-image" v-show="fileUrl!==''">
              <div class="img" :style="{backgroundImage: 'url(' + fileUrl + ')', backgroundSize:'cover'}"></div>
              <div class="icon-close" @click="removeImg"></div>
            </div>
    </div>
    <div class="btn">
      <div class="submit" @click="postNew">发表动态</div>
      <div class="cancel" @click="cancel">取消</div>
    </div>
    <modal :showModal="showModal" :msg="msg" @hide="hideModal"></modal>
  </div>
</template>
<script>
import modal from 'components/modal/modal'
import api from 'api/api'
export default {
  data () {
    return {
      fileUrl: '',
      file: '',
      title: '',
      content: '',
      showModal: false,
      msg: ''
    }
  },
  methods: {
    postNew () {
      if (this.title === '') {
        this.msg = '请输入标题'
        this.showModal = true
        return
      }
      if (this.content === '') {
        this.msg = '请输入内容'
        this.showModal = true
        return
      }
      let formData = new FormData()
      formData.append('file', this.file)
      formData.append('title', this.title)
      formData.append('content', this.content)
      api.createNewPost(formData).then(res => {
        if (res.code === 0) {
          this.fileUrl = ''
          this.file = ''
          this.title = ''
          this.content = ''
          this.$router.push('/recommend')
        } else {
          this.msg = res.msg
          this.showModal = true
        }
      })
    },
    handleFileChange (e) {
      let _this = this
      let file = e.target.files[0]
      if (window.FileReader) {
        let reader = new FileReader()
        if (file) {
          let size = Math.floor(file.size / 1024)
          if (size > 1024) {
            _this.msg = '图片不能大于1M!'
            _this.showModal = true
            return
          }
          _this.file = file
          reader.readAsDataURL(file)
          reader.onload = function (e) {
            // console.log(e.target)
            _this.fileUrl = e.target.result
          }
        }
      }
    },
    cancel () {
      this.$router.back()
    },
    removeImg () {
      this.file = ''
      this.fileUrl = ''
      this.$refs.upload.value = null
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
.post {
  margin: 54px 0 0;
  .title {
    background-color: #fff;
    width: 100%;
    padding: 6px 0;
    input {
      border: none;
      outline: none;
      padding: 8px;
      font-size: 14px;
    }
  }
  .content {
    margin-top: 12px;
    textarea {
      box-sizing: border-box;
      width: 100%;
      border: none;
      outline: none;
      padding: 12px;
      font-size: 14px;
    }
  }
  .image {
    position relative;
    box-sizing: border-box;
    background-color: #fff;
    width: 78px;
    height: 78px;
    margin-top: 8px;
    border-radius: 3px;
    border: 1px solid #ddd;
    .image-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: #fff;
      overflow: hidden;
      &:before {
      width: 1px;
      height: 25px;
      content: " ";
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      background-color: #ccc;
      }
      &:after {
        width: 25px;
        height: 1px;
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        background-color: #ccc;
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
      }
    }
    .pre-image {
      position: relative;
      height: 100%;
      width: 100%;
      border-radius: 3px;
      background-size: cover;
      overflow: hidden;
      background-color: #fff;
      .img {
        width: 100%;
        height: 100%;
      }
      .icon-close {
        position: absolute;
        width 15px;
        height 15px;
        background-color: rgba(0,0,0,0.5);
        border-radius: 50%;
        top: 5px;
        right: 5px;
        text-align: center
        &:before {
          width: 1px;
          height: 9px;
          content: " ";
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%,-50%);
          -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%) rotate(45deg);
          background-color: #ccc;
          }
          &:after {
            width: 9px;
            height: 1px;
            content: " ";
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%,-50%) rotate(25deg);
            -ms-transform: translate(-50%,-50%) rotate(25deg);
            transform: translate(-50%,-50%) rotate(45deg);
            background-color: #ccc;
          }
      }
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
