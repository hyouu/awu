import api from 'api/api'
import { getToken, setToken, removeToken } from 'common/js/auth'

const user = {
  state: {
    token: getToken(),
    username: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, username) => {
      state.username = username
    }
  },
  actions: {
    login ({ commit, state }, user) {
      return new Promise((resolve, reject) => {
        api.login(user).then(res => {
          if (res.code === 0) {
            const data = res.data
            setToken(data)
            commit('SET_TOKEN', data)
            resolve()
          } else {
            reject(res)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    getInfo ({commit}) {
      return new Promise((resolve, reject) => {
        api.getUserInfo().then(res => {
          const data = res.data
          commit('SET_NAME', data.username)
          resolve(res)
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },
    logOut ({commit}) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
