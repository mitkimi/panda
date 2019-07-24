import VpnModelSelector from '../../components/vpnModelSelector'

const APP = {
  components: {
    VpnModelSelector
  },
  data () {
    return {
      currentMode: 0,
      modeOptions: [
        {
          key: 0,
          value: 0,
          icon: 'robot',
          name: 'PAC 自动模式',
          desc: '仅需接入 vpn 的 ip 或域名接入代理'
        },
        {
          key: 1,
          value: 1,
          icon: 'trophy',
          name: '全量模式',
          desc: '所有软件和网络端口均接入代理的全局模式'
        },
        {
          key: 2,
          value: 2,
          icon: 'pie-chart',
          name: '绕过中国 IP',
          desc: '所有属中国的 IP 不会被接入代理'
        },
        {
          key: 3,
          value: 3,
          icon: 'share-alt',
          name: '手动模式',
          desc: '手动设置'
        }
      ],
      vpnSwitch: false,
      isShowSpeed: false,
      spinText: '正在连接...',
      isLoading: false
    }
  },
  mounted () {},
  methods: {
    onChange (checked) {
      console.log(`a-switch to ${checked}`)
      if (checked) {
        // 打开
        this.spinText = '正在连接...'
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
          this.isShowSpeed = true
        }, 3000)
      } else {
        // 关闭
        this.spinText = '正在断开...'
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
          this.isShowSpeed = false
        }, 1000)
      }
    }
  }
}
export default APP
