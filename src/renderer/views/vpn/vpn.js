import VpnModelSelector from '../../components/vpnModelSelector'
const ip = require('ip')
const APP = {
  components: {
    VpnModelSelector
  },
  data () {
    return {
      pageData: {
        ip: '0.0.0.0',
        dns: '0.0.0.0'
      },
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
      isLoading: false,
      lane: {
        choose: 'hk1',
        all: [
          {
            groupName: '香港',
            children: [
              {
                name: 'hk1',
                speed: 32
              },
              {
                name: 'hk2',
                speed: 35
              }
            ]
          },
          {
            groupName: '北美',
            children: [
              {
                name: 'sf-1',
                speed: 107
              }
            ]
          },
          {
            groupName: '中关村',
            children: [
              {
                name: '中关村1',
                speed: 2094
              },
              {
                name: '中关村2',
                speed: -1
              }
            ]
          }
        ]
      }
    }
  },
  mounted () {
    this.getIP()
  },
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
    },
    getIP () {
      this.pageData.ip = ip.address()
    },
    handleSelectMode (key) {
      this.currentMode = key
    }
  }
}
export default APP
