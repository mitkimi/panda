const APP = {
  data () {
    return {
      version: '0.0.1 pre',
      hasNewVersion: 'loading',
      newVersion: {
        version: '0.0.2 pre',
        url: ''
      }
    }
  },
  mounted () {
    this.fakeCheckNewVersion()
  },
  methods: {
    fakeCheckNewVersion () {
      setTimeout(() => {
        this.hasNewVersion = 'true'
        console.log(this.hasNewVersion)
      }, 6000)
    }
  }
}
export default APP
