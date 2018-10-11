// pages/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  tell:function(){
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    })
  },
  copy:function(){
    wx.setClipboardData({
      data: 'copy。。',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  }
})