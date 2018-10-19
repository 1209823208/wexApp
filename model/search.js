import {
  HTTP
} from '../util/http-p.js';
class SearchModel extends HTTP {
  constructor() {
    super();
    this.hotData = [
      "Fluent Python",
      "Python",
      "小程序Java核心编程",
      "慕课网7七月",
      "微信小程序开发入门与实践",
      "C++"
    ]
  }
  getHistoryData() {
    return wx.getStorageSync('p') || [];
  }
  getHotData() {
    return this.request({
      url: `/book/hot_keyword`
    }).then((res) => {
      if (res.statusCode === 401) {
        return this.hotData
      }
    })
  }
  setHistoryData(keyword) {
    let data = wx.getStorageSync('p') || [];
    if (!data.includes(keyword)) {
      data.unshift(keyword);
      if (data.length > 10) {
        data.pop();
      }
      wx.setStorageSync('p', data);
    }
  }
}
export {
  SearchModel
}