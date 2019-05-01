// pages/cart/cart.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartNum: app.globalData.cartNum,
    cartList: [],
    startX: 0,
    startY: 0,
    minusStatus: false,
    // 是否选中
    isAllSelect: false,
    // 购物车选中的数量
    selectedItem: 0,
    // 合计
    total: 0,
    // 总额
    totalPrice: 0,
    // 优惠
    sale: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cartNum: '99'
    })
    wx.setTabBarBadge({
      index: 2,
      text: this.data.cartNum
    })

    wx.showLoading({
      title: '加载中...'
    })
    wx.request({
      url: `${app.globalData.BASE_API}/cart`,
      data: {
        openid: 'aaaaa'
      },
      success: res => {
        let {data} = res.data
        // 通过给每项数据加 isTouchMove 标识是否显示删除按钮
        data.forEach(item => {
          item.isTouchMove = false
          item.isChecked = false
        })

        this.setData({
          cartList: data
        })
        wx.hideLoading()
        console.log('cartList', this.data.cartList)
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

  onGoShopping() {
    wx.switchTab({
      url: '/pages/home/home'
    })
  },

  onTap(e) {
    // console.log('tap', e)
    // let { cartList } = this.data
    // cartList = cartList.filter(item => item.id != e.currentTarget.dataset.id)

    // console.log('cartList', cartList)

    // this.setData({cartList})
  },

  touchstart(e) {
    // 开始触摸时，重置所有删除按钮
    this.data.cartList.forEach(item => {
      if(item.isTouchMove) {
        item.isTouchMove = false
      }
    })

    this.setData({
      // 记录 startX
      startX: e.changedTouches[0].clientX,
      // 记录 startY
      startY: e.changedTouches[0].clientY,
      cartList: this.data.cartList
    })
  },

  // 滑动
  touchmove(e) {
    let index = e.currentTarget.dataset.index
    let startX = this.data.startX
    let startY = this.data.startY
    // 滑动变化坐标
    let touchMoveX = e.changedTouches[0].clientX
    let touchMoveY = e.changedTouches[0].clientY

    let self = this
    let angle = this.angle(
      { X: startX, Y: startY }, 
      { X: touchMoveX, Y: touchMoveY }
    )

    this.data.cartList.forEach((item, i) => {
      item.isTouchMove = false
      // 滑动超过30度角
      if (Math.abs(angle) > 30) return

      if(i == index) {
        // 右滑
        if(touchMoveX > startX) {
          item.isTouchMove = false
        }else {
          item.isTouchMove = true
        }
      }
    });
    this.setData({
      cartList: this.data.cartList
    })
  },

  /**
   * @method 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 结束坐标
   */
  angle(start, end) {
    const X = end.X - start.X
    const Y = end.Y - start.Y
    // 返回角度 / Math.atan()返回数字的反正切值
    return 360 * Math.atan(Y / X) / (2 * Math.PI)
  },

  // 侧滑删除
  del(e) {
    console.log('删除', e)
    // this.data.cartList.splice(e.currentTarget.dataset.index, 1)

    let { cartList } = this.data
    cartList = cartList.filter(item => item.id != e.currentTarget.dataset.id)

    // console.log('cartList', cartList)

    // console.log('删除后的数据', this.data.cartList)

    this.setData({cartList})
  },

  // 商品加
  changeQty(e) {
    const index = e.target.dataset.index
    let quantity = e.target.dataset.number

    if(e.target.dataset.flag == 'add') {
      this.data.cartList[index].number = ++quantity
    }else {
      if(quantity >= 2) {
        this.data.cartList[index].number = --quantity
      }
    }
    this.setData({
      cartList: this.data.cartList
    })
  },

  // 输入框失去焦点
  onInputBlur(e) {
    const index = e.target.dataset.index

    if(e.detail.value == '') {
      console.log(e.detail.value)
      e.detail.value = 1
      this.data.cartList[index].number = 1
    }else {
      console.log(e.detail.value)
      this.data.cartList[index].number = e.detail.value
    }
    
    this.setData({
      cartList: this.data.cartList
    })
  },

  // 商品选中
  itemSelect(e) {
    // 获取商品的id和数组的下标值
    const id = e.target.dataset.id
    // const index = 
    console.log('id', id)
  }
})