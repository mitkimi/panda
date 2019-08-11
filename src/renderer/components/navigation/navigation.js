const APP = {
  data () {
    return {
      openKeys: [],
      current: ['welcome']
    }
  },
  mounted () {
    const currentRouteStr = this.$route.path.substring(1, this.$route.path.length)
    this.current = [currentRouteStr]
  },
  watch: {
    openKeys (val) {
      console.log('openKeys', val)
    }
  },
  methods: {
    handleClick (e) {
      console.log('click', e)
      this.$router.push({
        path: `/dashboard/${e.key}`
      })
    },
    titleClick (e) {
      console.log('titleClick', e)
    }
  }
}
export default APP
