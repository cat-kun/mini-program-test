// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    loading: false,
    start: 0,
    height: '',
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

    wx.request({
      url: 'https://www.koocv.com/h5-view/v/movie/list/',
      success: (res) => {
        // console.log(res)
        let { subjects } = res.data
        this.setData({
          list: subjects,
          start: 10
        })
      }
    })
  },

  onScroll() {
    console.log('滚动了')
  },

  loadmore() {
    console.log('到底了')
    let { loading, list, start } = this.data
    if(loading) {
      return
    }
    this.setData({
      loading: true
    })
    wx.showLoading({
      title: '拼命加载中…',
    })
    wx.request({
      url: `https://www.koocv.com/h5-view/v/movie/list?page_start=${start}`,
      success: (res) => {
        // console.log(res)
        let { subjects } = res.data
        start += 10
        this.setData({
          list: [...list, ...subjects],
          start,
          loading: false
        })
        wx.hideLoading()
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
  
  }
})