// components/book/book-detail/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detailData:{
      type:Object
    }
  },
  attached: function () {
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLink(){
      wx.navigateTo({
        url: `/pages/book-detail/book-detail?bid=${this.properties.detailData.id}`,
      })
    }
  }
})
