import Background from './background'
import { larkPost } from '../../utils/ipAxios'
const APP = {
  components: {
    Background
  },
  data () {
    return {}
  },
  mounted () {
    console.log(localStorage.code)
    // this.$router.push({
    //   path: '/signin'
    // })
    this.initUserLoginStatus()
  },
  methods: {
    async initUserLoginStatus () {
      const obj = {
        appId: this.$appInfo.appId,
        appSecret: this.$appInfo.appSecret,
        grantType: 'authorization_code'
      }
      const url = 'https://open.feishu.cn/connect/qrconnect/oauth2/access_token/'
      const params = {}
      const { data: res } = await larkPost(url, params, obj)
      console.log('aaaa=>', res)
    }
  }
}
export default APP
