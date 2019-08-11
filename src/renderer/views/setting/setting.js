const APP = {
  data () {
    return {
      name: localStorage.name,
      email: localStorage.email || '未设置邮箱',
      modelVisible: false
    }
  },
  mounted () {},
  methods: {
    handleExit () {
      this.modelVisible = true
    },
    handleConfirm () {
      localStorage.clear()
      this.$router.push({
        path: '/signin'
      })
      this.$message.success('您已安全退出 Panda tools')
    },
    handleCancel () {
      document.getElementById('exitModal').classList.remove('fadeIn')
      document.getElementById('exitModal').classList.add('fadeOut')
      setTimeout(() => {
        this.modelVisible = false
      }, 1200)
    }
  }
}
export default APP
