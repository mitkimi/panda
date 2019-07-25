import axios from 'axios'
import router from '../router'
import qs from 'qs'

const useToken = true

axios.defaults.timeout = 200000
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json'
if (useToken) {
  axios.defaults.headers.get['token'] = localStorage.token
  axios.defaults.headers.post['token'] = localStorage.token
}

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    })
      .then((response) => {
        resolve(response)
        if (response.data.code * 1 === 333) {
          router.push({
            path: '/signin'
          })
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 封装post方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then(function (response) {
        resolve(response)
        // 在所有 post 接口出现 -1000 状态时直接跳去登录
        if (response.data.code * 1 === 333) {
          router.push({
            path: '/signin'
          })
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

/**
 * 封装larkpost方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function larkPost (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
