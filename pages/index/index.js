// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    state: false,
    first_click: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let categories = [{ 'id': 0, 'name': '推荐接单' }, { 'id': 1, 'name': '待取单' }, { 'id': 3, 'name': '待送达' }]

   
    this.setData({
      // 选中样式
      categories: categories,
      //起始选中第一个
      categorySelected: categories[0].id,
    })
  },

  onCategoryClick: function (e) {
    let id = e.currentTarget.dataset.id;
    this.categoryClick = true;
    this.setData({
      categorySelected: id
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