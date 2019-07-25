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
    // this.$router.push({
    //   path: '/signin'
    // })
    this.initUserLoginStatus()
  },
  methods: {
    async initUserLoginStatus () {
      const params = {
        app_id: this.$appInfo.appId,
        app_secret: this.$appInfo.appSecret,
        grant_type: 'authorization_code',
        code: localStorage.code
      }
      const url = 'https://open.feishu.cn/connect/qrconnect/oauth2/access_token/'
      const { data: res } = await larkPost(url, params)
      console.log('aaaa=>', res)
    }
  }
}
export default APP
