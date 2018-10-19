// pages/my/my.js
import {
  ClassicModel
} from '../../model/classic.js'
let classicModel = new ClassicModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 查看是否授权
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              this.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    });
    this.getLikeData();
  },
  getuserinfo(event) {
    if (event.detail.userInfo) {
      this.setData({
        userInfo: event.detail.userInfo
      })
    }
  },
  getLikeData(){
    classicModel.getLiskData(res=>{
      console.log('res', res);
      this.setData({
        likeData: res
      })
    })
  }
})