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
    const appId = this.$appInfo.appId
    const url = `https://open.feishu.cn/connect/qrconnect/page/sso/?redirect_uri=${redirectUri}&app_id=${appId}&state=panda_login`
    this.signIn.url = url
    this.timer = setInterval(() => {
      // 测试
      this.queryLoginStatus()
    }, 1000)
  },
  methods: {
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
      if (!paraObj.app_id) {
        console.log('已经登录')
        localStorage.code = paraObj.code
        this.$router.push({
          path: '/',
          query: {
            from: 'login'
          }
        })
        clearInterval(this.timer)
      }
    }
  }
}
export default APP
