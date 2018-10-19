// pages/book-detail/book-detail.js
import {
  BookModel
} from '../../model/book.js'
let bookModel = new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: {},
    comment: [],
    poing:false,
    book:{
      "publisher": "人民邮电出版社",
      "pubdate": "201005",
      "pages": "1038",
      "price": "149.00元",
      "binding": "平装",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('options', options);
    this.getData(options.bid);
  },
  getData: function(bid) {
    wx.showLoading();
    const detailData = bookModel.getDataDetail(bid);
    const comment = bookModel.getComment(bid);
    // detailData.then((res) => {
    //   this.setData({
    //     detailData: res
    //   })
    // })
    // comment.then((res) => {
    //   this.setData({
    //     comment: res
    //   })
    // })
    Promise.all([detailData, comment]).then(res=>{
      this.setData({
        detailData: res[0],
        comment: res[1]
      })
      wx.hideLoading()
    })
  },
  onLike(event){
    console.log('onLike',event);
  },
  showMaskComment(){
    console.log('this.data.poing', this.data.poing);
    let poing = !this.data.poing;
    this.setData({
      poing
    })
  },
  addBookShortComment(event){
    let content = event.currentTarget.dataset.content||event.detail.value;
    let args = this.data.comment;
    args.unshift({
      content: content,
      nums:1
    })
    this.setData({
      comment: args,
      poing:false
    })
    wx.showToast({
      title: '+1' ,
      icon: 'none',
    })
  }
})