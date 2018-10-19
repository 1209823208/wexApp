// pages/classic/classic.js
import {
  ClassicModel
} from '../../model/classic.js'
import {
  LikeModel
} from '../../model/like.js'
let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLast:true,
    isFirst:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    classicModel.getLastData((res) => {
      console.log('res', res);
      this.setData({
        classicData: res
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 点击喜欢
  onLike(event) {
    console.log('event', event);
    let behaviour = event.detail.behaviour;
    likeModel.changeNum(behaviour,this.data.classicData.id,this.data.classicData.type);
  },
  // 点击翻页
  tap_pre_or_next(event){
    console.log('event', event);
    let index = this.data.classicData.index;
    classicModel.getPreOrNextData(index, event.detail.behaviour,(res)=>{
      this.setData({
        classicData: res,
        isLast: classicModel.isLast(res.index),
        isFirst: classicModel.isFirst(res.index),
      })
    })
  }
})