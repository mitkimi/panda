import PanelCard from '../../components/panelCard'

const APP = {
  components: {
    PanelCard
  },
  data () {
    return {
      tools: [
        {
          icon: '',
          name: 'NAS',
          desc: '没什么想说的',
          url: 'http://nas.ipietech.com'
        },
        {
          icon: '',
          name: '神秘工具',
          desc: '更多神秘工具即将上线，敬请期待',
          url: null
        }
      ]
    }
  },
  mounted () {},
  methods: {
  }
}
export default APP
