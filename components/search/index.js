// components/search/index.js
import {
  SearchModel
} from '../../model/search.js';
let searchModel = new SearchModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    historyData: [],
    hotData: [],
    searchList: []
  },
  attached: function() {
    this.setData({
      historyData: searchModel.getHistoryData(),
    })
    searchModel.getHotData().then(res => {
      this.setData({
        hotData: res
      })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    searchInput(event) {
      let keyword = event.detail.value || event.detail.content,
        _this = this;
      searchModel.setHistoryData(keyword);
      this.triggerEvent('searchEvent', {
        showMask: false,
        q: keyword
      })
    }
  }
})