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
      // this.modelVisible = true
      this.$Modal.confirm({
        title: '安全退出',
        content: '是否退出 Panda Tools？',
        type: 'info',
        onOk: async () => {
          localStorage.clear()
          this.$router.push({
            path: '/signin'
          })
          this.$message.success('您已安全退出 Panda Tools')
        }
      })
    }
  }
}
export default APP
