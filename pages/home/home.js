// pages/home/home.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      { url: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', id: 1},
      { url: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', id: 2},
      { url: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640', id: 3}
    ],
    autoplay: false,
    interval: 5000,
    current: 0,
    active: 0,
    currentTab: 0,
    height: '',
    // 列表
    list: {
      // '全部商品', '特价秒杀', '甄选鲜果', '营养蔬菜', '禽蛋肉类'
      tabTitle: [
        { id: 10, title: '全部商品' },
        { id: 20, title: '特价秒杀' },
        { id: 30, title: '甄选鲜果' },
        { id: 40, title: '营养蔬菜' },
        { id: 50, title: '禽蛋肉类'},
      ],
      tabCont: [
        {
          id: 1,
          img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
          title: '1泰国山竹泰国山竹泰国山竹泰国山竹',
          price: '100.00',
          sale: '9.99',
          inventory: '3333',
          sold: '9992222'
        },
        {
          id: 1,
          img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
          title: '1泰国山竹泰国山竹泰国山竹泰国山竹',
          price: '100.00',
          sale: '9.99',
          inventory: '3333',
          sold: '9992222'
        },
        {
          id: 1,
          img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
          title: '1泰国山竹泰国山竹泰国山竹泰国山竹',
          price: '100.00',
          sale: '9.99',
          inventory: '3333',
          sold: '9992222'
        },
        {
          id: 1,
          img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
          title: '1泰国山竹泰国山竹泰国山竹泰国山竹',
          price: '100.00',
          sale: '9.99',
          inventory: '3333',
          sold: '9992222'
        },
        {
          id: 1,
          img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
          title: '1泰国山竹泰国山竹泰国山竹泰国山竹',
          price: '100.00',
          sale: '9.99',
          inventory: '3333',
          sold: '9992222'
        },
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    if(app.globalData.cartNum != 0) {
      wx.setTabBarBadge({
        index: 2,
        text: app.globalData.cartNum
      })
    }
    

    wx.getSystemInfo({
      success: res => {
        this.setData({
          height: res.windowHeight
        })
      }
    })

    wx.request({
      url: 'http://rap2api.taobao.org/app/mock/167083/example/1556422071811',
      success: res => {
        console.log('接口返回', res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 轮播图
   */
  onChange(e) {
    this.setData({
      current: e.detail.current
    })
  },

  onTab(e) {
    let index = e.detail.index
    let id = this.data.list.tabTitle[index].id

    wx.showLoading({
      title: '加载中...',
      // mask: true
    })

    setTimeout(() => {
      this.setData({
        'list.tabCont': [
            {
              id: 1,
              img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
              title: '1000泰国山竹泰国山竹泰国山竹泰国山竹',
              price: '100.00',
              sale: '9.99',
              inventory: '3333',
              sold: '9992222'
            },
            {
              id: 1,
              img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
              title: '200泰国山竹泰国山竹泰国山竹泰国山竹',
              price: '100.00',
              sale: '9.99',
              inventory: '3333',
              sold: '9992222'
            },
            {
              id: 1,
              img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
              title: '30泰国山竹泰国山竹泰国山竹泰国山竹',
              price: '100.00',
              sale: '9.99',
              inventory: '3333',
              sold: '9992222'
            },
            {
              id: 1,
              img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
              title: '40泰国山竹泰国山竹泰国山竹泰国山竹',
              price: '100.00',
              sale: '9.99',
              inventory: '3333',
              sold: '9992222'
            },
            {
              id: 1,
              img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
              title: '50泰国山竹泰国山竹泰国山竹泰国山竹',
              price: '100.00',
              sale: '9.99',
              inventory: '3333',
              sold: '9992222'
            },
          ]        
      })
      wx.hideLoading()
    }, 2000)
    
    // if(this.data.currentTab != e.target.dataset.current) {
    //   this.setData({
    //     currentTab: e.target.dataset.current
    //   })
    // }
  },

  // 滑到底部加载更多
  onReachBottom() {
    console.log('加载更多')
    wx.showLoading({
      title: '加载中...',
      // mask: true
    })

    setTimeout(() => {
      this.setData({
        'list.tabCont': [
            {
              id: 1,
              img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
              title: '10泰国山竹泰国山竹泰国山竹泰国山竹',
              price: '100.00',
              sale: '9.99',
              inventory: '3333',
              sold: '9992222'
            },
            {
              id: 1,
              img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
              title: '20泰国山竹泰国山竹泰国山竹泰国山竹',
              price: '100.00',
              sale: '9.99',
              inventory: '3333',
              sold: '9992222'
            },
            {
              id: 1,
              img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
              title: '30泰国山竹泰国山竹泰国山竹泰国山竹',
              price: '100.00',
              sale: '9.99',
              inventory: '3333',
              sold: '9992222'
            },
            {
              id: 1,
              img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
              title: '40泰国山竹泰国山竹泰国山竹泰国山竹',
              price: '100.00',
              sale: '9.99',
              inventory: '3333',
              sold: '9992222'
            },
            {
              id: 1,
              img: 'https://img.alicdn.com/bao/uploaded/i1/TB1Q593L9zqK1RjSZFHSuv3CpXa.jpg_640x480Q60s0.jpg',
              title: '50泰国山竹泰国山竹泰国山竹泰国山竹',
              price: '100.00',
              sale: '9.99',
              inventory: '3333',
              sold: '9992222'
            },
          ]        
      })
      wx.hideLoading()
    }, 2000)
  }


})