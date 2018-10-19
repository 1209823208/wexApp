import {
  config
} from '../config.js'
const tips = {
  1: 'error',
  401: 'appkey无效',
  3000: '不存在'
}
export class HTTP {
  request({ url, data = {}, method = "GET" }){
    return new Promise((resolve, reject)=>{
      return this._request({ url, resolve, reject, data, method })
    })
  };
  _request({ url, resolve, reject, data={}, method="GET"}) {
    
    wx.request({
      url: config.api_base_url + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json', // 默认值
        'appkey': config.appkey
      },
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject();
        this._show_error(res.statusCode)
      }
    })
  };
  _show_error(error_code) {
    if (!error_code) {
      error_code = 1;
    }
    let des = tips[error_code] ? tips[error_code] : tips[1];
    wx.showToast({
      title: 'Error:' + des,
      icon: 'none',
      duration: 2000
    })
  }
}