// pages/book/book.js
// pages/classic/classic.js
import {
  random
} from '../../util/util.js'

import {
  BookModel
} from '../../model/book.js'
let bookModel = new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookData: [],
    count:0,
    keyword: '',
    searing: false,
    more: '',
    is_sering:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getAllData();
  },
  getAllData: function() {
    bookModel.getBookData()
      .then(res => {
        this.setData({
          bookData: res
        })
      }, error => {
        console.log('error', error);
      })
  },
  showSearch() {
    this.setData({
      searing: true,
      is_sering:true
    })
  },
  hideSearch(event) {
    this.setData({
      searing: false
    })
  },
  onReachBottom: function(event) {
    console.log(111);
    this.setData({
      more: random(16)
    });
    let start = this.data.bookData.length, count = this.data.count;
    if (start < count && this.data.is_sering){
      this.getRequestData(start, this.data.keyword);
    }
   
  },
  searchEvent(event) {
    let showMask = event.detail.showMask,
      q = event.detail.q;
    this.setData({
      searing: showMask,
      keyword: q,
      bookData: []
    })
    if (!q) {
      return
    }
    this.getRequestData(0,q);
  },
  getRequestData(start=0,q='') {
    bookModel.getBookSearch(start, q)
      .then(res => {
        let newData = [...this.data.bookData, ...res.bookData];
        let count = res.count;
        this.setData({
          bookData: newData,
          count
        })
      }, error => {
        console.log('error', error);
      })
  },
  clear(){
    this.getAllData();
    this.setData({
      keyword:'',
      is_sering:false,
    })
  }
})