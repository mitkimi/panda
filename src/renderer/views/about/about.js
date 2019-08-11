import { fetch } from '../../utils/ipAxios'
const { shell } = require('electron')

const APP = {
  data () {
    return {
      version: '0.0.1',
      name: 'pre',
      hasNewVersion: 'loading',
      newVersion: {
        version: localStorage.new_version,
        name: localStorage.new_name,
        url: localStorage.new_url,
        desc: localStorage.new_desc
      }
    }
  },
  mounted () {
    this.checkLastVersion()
  },
  methods: {
    checkNewVersion () {
      setTimeout(async () => {
        const url = '/version/latest'
        const params = {
          client_version: this.version
        }
        const { data: res } = await fetch(url, params)
        if (res.code === 0) {
          this.hasNewVersion = 'false'
        }
        if (res.code === 1) {
          this.newVersion = {
            version: res.data.version,
            name: res.data.name,
            url: process.platform === 'darwin' ? res.data.mac : res.data.win,
            desc: res.data.desc
          }
          localStorage.new_version = res.data.version
          localStorage.new_name = res.data.name
          localStorage.new_url = process.platform === 'darwin' ? res.data.mac : res.data.win
          localStorage.new_desc = res.data.desc
          this.hasNewVersion = 'true'
          localStorage.lastCheckUpdate = new Date() * 1
        }
      }, 6000)
    },
    checkLastVersion () {
      // 设置超时时间
      const period = 5 * 24 * 60 * 60 * 1000
      if (new Date() * 1 - localStorage.lastCheckUpdate * 1 < period) {
        this.hasNewVersion = 'true'
      } else {
        this.checkNewVersion()
      }
    },
    openWindow (url) {
      shell.openExternal(url)
    }
  }
}
export default APP
