// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
        },,
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
    wx.getSystemInfo({
      success: res => {
        this.setData({
          height: res.windowHeight
        })
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

  onTab(e) {
    let index = e.detail.index
    let id = this.data.list.tabTitle[index].id
    
    // if(this.data.currentTab != e.target.dataset.current) {
    //   this.setData({
    //     currentTab: e.target.dataset.current
    //   })
    // }
  },

  onScroll() {
    console.log('onScroll')
  },
  lower(e) {
    console.log(e)
  }
})