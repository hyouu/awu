import request from 'common/js/request'

export default{
  login (user) {
    return request.post('/api/login', user)
  },
  register (user) {
    return request.post('/api/register', user)
  },
  getUserInfo () {
    return request.post('/api/user')
  },
  createNewPost (data) {
    return request.post('/api/post/upload', data)
  },
  getAllPost () {
    return request.get('/api/post/queryPostList')
  },
  getMyPost () {
    return request.post('/api/post/queryMyList')
  },
  getDetail (id) {
    return request.get('/api/post/detail?id=' + id)
  },
  updateInfo (user) {
    return request.post('/api/update', user)
  }
}
