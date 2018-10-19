// components/classic/essay/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      observer: function (newVal, oldVal, changedPath) {
        let newValue = newVal < 10 ? '0' + newVal : newVal;
        this.setData({
          _index: newValue
        })
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    month: '七月',
    year: '2018',
    _index:'',
    monthList:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },
  attached: function() {
    let new_data = new Date();
    let year = new_data.getFullYear();
    let month = new_data.getMonth();
    this.setData({
      month: this.data.monthList[month] ,
      year
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})