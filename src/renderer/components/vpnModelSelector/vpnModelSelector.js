const APP = {
  props: {
    mode: {
      type: Number
    },
    options: {
      type: Array
    }
  },
  data () {
    return {}
  },
  mounted () {},
  methods: {
    handleSelectItem (item) {
      // console.log(item)
      // this.mode = item.key
      this.$emit('selectMode', item.key)
    }
  }
}
export default APP
