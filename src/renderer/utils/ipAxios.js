import axios from 'axios'
import apiUrl from './api.js'

const useToken = false

axios.defaults.timeout = 200000
axios.defaults.baseURL = apiUrl.url
axios.defaults.withCredentials = false
axios.defaults.headers.post['Content-Type'] = 'application/json'
if (useToken) {
  axios.defaults.headers.get['token'] = localStorage.token
  axios.defaults.headers.post['token'] = localStorage.token
}
if (localStorage.access_token) {
  axios.defaults.headers.get['Authorization'] = `Bearer ${localStorage.access_token}`
  axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.access_token}`
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
      })
      .catch((err) => {
        console.log('err==>', err)
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
    axios.post(url, params)
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
