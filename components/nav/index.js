// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLast: {
      type: Boolean,
      value: true
    },
    isFirst: {
      type: Boolean,
      value: false
    },
    title: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftImage: 'images/triangle.dis@left.png',
    leftImage: 'images/triangle@left.png',
    disRightImage: 'images/triangle.dis@right.png',
    rightImage: 'images/triangle@right.png',
  },
  attached: function() {},

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft(event) {
      if (!this.properties.isLast) {
        this.triggerEvent('preornest', {
          behaviour: 'next'
        })
      }
    },
    onRight(event) {
      if (!this.properties.isFirst) {
        this.triggerEvent('preornest', {
          behaviour: 'previous'
        })
      }
    }
  }
})