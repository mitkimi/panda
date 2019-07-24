const { shell } = require('electron')

const APP = {
  props: {
    data: {
      type: Object
    },
    type: {
      type: String
    }
  },
  data () {
    return {}
  },
  mounted () {},
  methods: {
    handleLink (url) {
      shell.openExternal(url)
    }
  }
}
export default APP
