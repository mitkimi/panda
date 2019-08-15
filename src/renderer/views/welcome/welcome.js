import PanelCardStatus from '../../components/panelCardStatus'
import { fetch } from '../../utils/ipAxios'
const APP = {
  components: {
    PanelCardStatus
  },
  data () {
    return {
      userInfo: {
        name: localStorage.name,
        avatar: localStorage.avatar_url || null,
        email: localStorage.email || null
      },
      statusCheck: [
        {
          icon: 'md-wifi',
          name: '网络链接',
          status: 'pending',
          pending: '正在检测网络链接',
          success: '可以正常接入网络',
          fail: '无法接入网络，请检查网络链接'
        },
        {
          icon: 'md-attach',
          name: '内网联通性',
          status: 'pending',
          pending: '正在检测内网联通性',
          success: '可以正常接入内网',
          fail: '无法访问内网，请连 VPN'
        },
        // {
        //   icon: '',
        //   name: '安全检测简报',
        //   status: 'pending',
        //   pending: '正在检测网络安全性',
        //   success: '未发现任何安全隐患或异常',
        //   fail: '发现高危问题，请注意防范'
        // },
        {
          icon: 'md-link',
          name: 'VPN',
          status: 'pending',
          pending: '正在检测 VPN 链接状态',
          success: 'VPN 已链接',
          fail: '未链接 VPN，请前往链接'
        }
      ],
      recentAccess: []
    }
  },
  mounted () {
    this.initStatusCheck()
    this.getUserInfo()
    this.initNetworkStatus()
  },
  methods: {
    initStatusCheck () {
      setTimeout(() => {
        setInterval(() => {
          // console.log(navigator.onLine ? 'online' : 'offline')
          this.statusCheck[0].status = this.initNetworkStatus()
        }, 10)
      }, 1000)
      setTimeout(() => {
        this.statusCheck[2].status = 'fail'
      }, 2000)
      setTimeout(() => {
        this.statusCheck[1].status = 'success'
      }, 5000)
    },
    async getUserInfo () {
      const url = '/passport/getUserInfo'
      const params = {
        user_access_token: localStorage.access_token
      }
      const { data: res } = await fetch(url, params)
      if (res.code >= 0) {
        localStorage.avatar_url = res.data.AvatarUrl
        localStorage.name = res.data.Name
        localStorage.email = res.data.Email
        this.asyncUserInfo()
      }
    },
    asyncUserInfo () {
      this.userInfo.avatar = localStorage.avatar_url
      this.userInfo.name = localStorage.name
      this.userInfo.email = localStorage.email
    },
    initNetworkStatus () {
      return navigator.onLine ? 'success' : 'fail'
    }
  }
}
export default APP
