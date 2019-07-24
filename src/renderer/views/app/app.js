import PanelCard from '../../components/panelCard'
const APP = {
  components: {
    PanelCard
  },
  data () {
    return {
      office: [
        {
          icon: '',
          name: 'Chrome',
          desc: '更易用、更安全、更快速的高效浏览器',
          linkText: '去下载',
          url: 'https://www.google.cn/intl/zh-CN/chrome/'
        },
        {
          icon: '',
          name: 'Lark 飞书',
          desc: '新一代企业生产力套件',
          linkText: '去下载',
          url: 'https://www.feishu.cn/download'
        }
      ]
    }
  },
  mounted () {},
  methods: {
  }
}
export default APP
