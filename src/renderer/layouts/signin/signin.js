import { fetch } from '../../utils/ipAxios'
const APP = {
  data () {
    return {
      timer: null,
      signIn: {
        url: null
      }
    }
  },
  mounted () {
    const uri = 'https://api.panda.ipietech.com/login/login.html'
    const redirectUri = encodeURIComponent(uri)
    const appId = 'cli_9dbc613a9d7f510c'
    const url = `https://open.feishu.cn/connect/qrconnect/page/sso/?redirect_uri=${redirectUri}&app_id=${appId}&state=panda_login`
    console.log(url)
    this.signIn.url = url
    this.timer = setInterval(() => {
      // 测试
      this.queryLoginStatus()
    }, 1)
  },
  methods: {
    async initUserLoginStatus (code) {
      const params = {
        code
      }
      const url = '/passport/sheckUserSignStatus'
      const { data: res } = await fetch(url, params)
      if (res.code === 0) {
        localStorage.expires_in = res.data.expires_in * 1000
        localStorage.open_id = res.data.open_id
        localStorage.access_token = res.data.access_token
        localStorage.code = code
        this.$message.success('登录成功')
        this.getUserInfo() // 获取用户信息
        this.$router.push({
          path: '/dashboard/welcome'
        })
      } else {
        this.$message.error(res.msg)
      }
    },
    async getUserInfo () {
      const url = '/passport/getUserInfo'
      const params = {
        user_access_token: localStorage.access_token
      }
      const { data: res } = await fetch(url, params)
      if (res.code >= 0) {
        localStorage.avatar_url = res.data.AvatarUrl
        localStorage.name = res.data.Name
        localStorage.email = res.data.Email
        this.avatar = res.data.AvatarUrl
        this.name = res.data.Name
        this.email = res.data.Email
      }
    },
    queryLoginStatus () {
      const fullPath = this.$refs.webview.src
      const flag = fullPath.indexOf('?')
      const search = fullPath.substr(flag, fullPath.length - flag)
      var url = search
      var nameValue
      var paraString = url.substring(url.indexOf('?') + 1, url.length).split('&')
      var paraObj = {}
      for (let i = 0; i < paraString.length; i += 1) {
        nameValue = paraString[i]
        var name = nameValue.substring(0, nameValue.indexOf('=')).toLowerCase()
        var value = nameValue.substring(nameValue.indexOf('=') + 1, nameValue.length)
        if (value.indexOf('#') > -1) {
          value = value.split('#')[0]
        }
        paraObj[name] = value
      }
      // 有相关参数说明已经走过登录流程了
      if (!paraObj.app_id) {
        console.log('已经登录')
        this.initUserLoginStatus(paraObj.code)
        clearInterval(this.timer)
      }
    }
  }
}
export default APP
