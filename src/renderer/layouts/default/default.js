import Background from './background'
// import { fetch } from '../../utils/ipAxios'

const APP = {
  components: {
    Background
  },
  data () {
    return {}
  },
  mounted () {
    // 判断本地是否登录过
    if (!localStorage.code) {
      this.$router.push({
        path: '/signin'
      })
      localStorage.clear()
      return
    }
    // 判断是否超时
    const now = new Date() * 1
    const day = 15 // 15天后需要重新登录
    const expriesAt = localStorage.expires_in * 1 + day * 24 * 60 * 60 * 1000
    if (now > expriesAt) {
      this.$router.push({
        path: '/signin'
      })
      localStorage.clear()
      return
    }
    // 已登陆状态
    this.$router.push({
      path: '/dashboard/welcome'
    })
  },
  methods: {
    // async initUserInfo () {
    //   const params = {}
    //   const url = 'https://open.feishu.cn/connect/qrconnect/oauth2/user_info/'
    //   const { data: res } = await fetch(url, params)
    //   console.log(res)
    //   if (res.code === 0) {
    //     this.$router.push({
    //       path: '/dashboard/welcome'
    //     })
    //   } else {
    //     this.$router.push({
    //       path: '/signin'
    //     })
    //   }
    // }
  }
}
export default APP
