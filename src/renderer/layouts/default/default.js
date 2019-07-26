import Background from './background'
import { larkGet, larkPost } from '../../utils/ipAxios'

const APP = {
  components: {
    Background
  },
  data () {
    return {}
  },
  mounted () {
    if (!localStorage.code) {
      this.$router.push({
        path: '/signin'
      })
      return
    }
    if (this.$route.query.from && this.$route.query.from === 'login') {
      this.initUserLoginStatus()
      console.log(1)
    } else {
      this.initUserInfo()
      console.log(2)
    }
    if (!localStorage.access_token) {
      this.$router.push({
        path: '/signin'
      })
    }
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
      if (res.code === 0) {
        localStorage.name = res.name
        localStorage.access_token = res.access_token
        localStorage.avatar_url = res.avatar_url
        localStorage.expires_in = res.expires_in
        localStorage.open_id = res.open_id
        localStorage.refresh_token = res.refresh_token
        localStorage.tenant_key = res.tenant_key
        localStorage.token_type = res.token_type
        this.$router.push({
          path: '/dashboard/welcome'
        })
      } else {
        this.$router.push({
          path: '/signin'
        })
      }
    },
    async initUserInfo () {
      const params = {}
      const url = 'https://open.feishu.cn/connect/qrconnect/oauth2/user_info/'
      const { data: res } = await larkGet(url, params)
      if (res.code === 0) {
        this.$router.push({
          path: '/dashboard/welcome'
        })
      } else {
        this.$router.push({
          path: '/signin'
        })
      }
    }
  }
}
export default APP
