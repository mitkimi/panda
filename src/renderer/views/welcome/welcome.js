import PanelCardStatus from '../../components/panelCardStatus'
const APP = {
  components: {
    PanelCardStatus
  },
  data () {
    return {
      userInfo: {
        name: localStorage.name
      },
      statusCheck: [
        {
          icon: '',
          name: '内网联通性',
          status: 'pending',
          pending: '正在检测内网联通性',
          success: '可以正常接入内网',
          fail: '无法访问内网，请连 VPN'
        },
        {
          icon: '',
          name: '安全检测简报',
          status: 'pending',
          pending: '正在检测网络安全性',
          success: '未发现任何安全隐患或异常',
          fail: '发现高危问题，请注意防范'
        },
        {
          icon: '',
          name: 'VPN',
          status: 'pending',
          pending: '正在检测 VPN 链接状态',
          success: 'VPN 已链接',
          fail: '无法链接 VPN，请检查网络设置'
        }
      ],
      recentAccess: []
    }
  },
  mounted () {
    this.mockFastAccessStatus()
  },
  methods: {
    mockFastAccessStatus () {
      setTimeout(() => {
        this.statusCheck[0].status = 'success'
      }, 1000)
      setTimeout(() => {
        this.statusCheck[1].status = 'success'
      }, 2000)
      setTimeout(() => {
        this.statusCheck[2].status = 'fail'
      }, 5000)
    }
  }
}
export default APP
