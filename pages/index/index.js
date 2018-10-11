//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList:[
      {
      logo:'/images/basic-genetics.jpg',
      title:'title1',
      desc:'desc1'
      },
      {
        logo: '/images/basic-genetics.jpg',
        title: 'title2',
        desc: 'desc2'
      },
      {
        logo: '/images/basic-genetics.jpg',
        title: 'title3',
        desc: 'desc3'
      }
    ]
  },
  onLoad: function () {
  this.getData();
  },
  toDetail:function(e){
    let index = e.currentTarget.dataset.index;
    let title = this.data.proList[index].title;
    wx.setStorage({
      key: 'title',
      data: title,
    })
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
    // wx.navigateTo({
    //   url: '/pages/detail/detail?title='+title,
    // })
  },
  getData(){
    console.log('111',);
    wx.request({
      url: app.globalData.host+'/rarecode/samples-studies/', //仅为示例，并非真实的接口地址
      method:'method',
      data: {
        username: 'rit_first_reviewer2',
        system_project:'Rarecode',
        totalnumType:'project',
        list_name:'study',
        workflow_status:'first_review',
        role:'firstreviewer',
        page_index:1,
        page_size:20,
        keyword:'',
        order:'',
      },
      header: {
        'content-type': 'application/json',// 默认值
        'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MiwiZW1haWwiOiJyaXRfZmlyc3RfcmV2aWV3ZXIyQG5leHRjb2RlLnBoYXJtYXRlY2hzLmNvbSIsInVzZXJuYW1lIjoicml0X2ZpcnN0X3Jldmlld2VyMiIsImV4cCI6MTUzOTgzMjk5Nywib3JpZ19pYXQiOjE1MzkyMjgxOTcsIm1vZHVsZXMiOiJWeFU0ckZhTjhRdDJyaDVjcXVkbU9rR2FRZG40aml6bnhMUlVUaXhJM1JXU2RBR2JselRuTG5oWmNUUlkvVS9NWDNZK1JMVXpGcys1RTBZcDdJeEIzQXBsNHB4SDM5cVoxd2xwbm1kb1BvVzgrR1czTWlKRk9JNmdQcTNNc3lzeEE4VkZxWDJ0d0o2K2ljMXVXUkJaaG9TOG5zTFNCWFg4QlpMRFFla1dtZ1U9In0.Rol9F8_1A_WoQfHQoq4q9DwldWsOxnWOrQfuCjwsFAU'
      },
      success(res) {
        console.log('res',res)
      }
    })
  }
})
