import NavigationBar from '../../components/navigation'
const APP = {
  components: {
    NavigationBar
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
    const expriesAt = localStorage.expires_in * 1
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
  }
}
export default APP
