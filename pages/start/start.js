//index.js
//获取应用实例
const app = getApp()
console.log("缓存成功没有")
Page({
  data: {
    motto: '欢迎来到,荟优鲜',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    var errMsg = e.detail.errMsg;
    
    console.log("缓存成功"+wx.getStorageSync(e.detail.errMsg))
    wx.setStorageSync('User', e.detail.errMsg)
    let data = wx.getStorageSync("User")
    console.log(data);
    if (data == "getUserInfo:ok") {
      setTimeout(function () {
        wx.reLaunch({
          url: '../index/index'
        })
      }, 3000)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
    // if (errMsg == "getUserInfo:ok" ){
    //   setTimeout(function () {
    //     wx.reLaunch({
    //       url: '../index/index'
    //     })
    //   }, 3000)
    //   app.globalData.userInfo = e.detail.userInfo
    //   this.setData({
    //     userInfo: e.detail.userInfo,
    //     hasUserInfo: true
    //   })
    // }
  },
  // goindex: function (e) {
  //   wx.navigateTo({
  //     url: "/pages/index/index"
  //   })
  // },

})
// // 三秒自动跳转到主页
// setTimeout(function () {
//  if(getuserinfo){
//    wx.reLaunch({
//      url: '../index/index'
//    })
//  }

// }, 3000)