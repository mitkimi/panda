const APP = {
  data () {
    return {
      current: 'welcome'
    }
  },
  mounted () {
    // const currentRouteStr = this.$route.path.split('/')
    // this.current = currentRouteStr[currentRouteStr.length - 1]
    // console.log(this.current)
  },
  methods: {
    handleClick (e) {
      console.log('click', e)
      this.$router.push({
        path: `/dashboard/${e}`
      })
    }
  }
}
export default APP
