import Background from './background'
const APP = {
  components: {
    Background
  },
  data () {
    return {}
  },
  mounted () {
    // setTimeout(() => {
    //   this.$router.push({
    //     path: '/signin'
    //   })
    // }, 1000)
    setTimeout(() => {
      const redirectUri = encodeURIComponent('https://www.mitkimi.com')
      const url = `https://open.feishu.cn/connect/qrconnect/page/sso/?redirect_uri=${redirectUri}&app_id=${this.$appInfo.appId}&state=1`
      window.open(url)
      console.log(url)
    }, 1000)
  },
  methods: {
  }
}
export default APP
