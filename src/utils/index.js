import axios from 'axios'
import {Toast} from 'mint-ui'

const fetch = axios.create({
  baseURL: 'https://m.yaojunrong.com/'
})

fetch.interceptors.request.use(function(config) {
  return config
}, function(err) {
  Toast({
    position: 'bottom',
    message: '操作成功',
    iconClass: 'icon icon-danger'
  })
  return Promise.reject(err)
})

fetch.interceptors.response.use(
  function(res) {
    return res.data
  },
  function(err) {
    return Promise.reject(err)
})


export {fetch}
