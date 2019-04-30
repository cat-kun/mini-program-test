//app.js
App({
  onLaunch: function () {

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.log('登录', res)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 获取用户授权的位置信息
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
      },
      fail() {
        console.log('用户拒绝获取地理位置')
        wx.showModal({
          title: '',
          content: '团购服务需要您的地理位置',
          showCancel: true,
          confirmText: '去开启',
          confirmColor: '#f00',
          success: (res) => {
            if(res.confirm) {
              console.log('用户允许获取地理位置信息')
              wx.openSetting({
                success() {
                  console.log(res.authSetting)
                }
              })
            }else if(res.cancel) {
              console.log('用户拒绝获取地理位置信息')
            }
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    // 购物车数量
    cartNum: '10',
    BASE_API: 'http://rap2api.taobao.org/app/mock/167083'
  }
})