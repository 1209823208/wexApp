import {
  config
} from '../config.js'
const tips = {
  1: 'error',
  401: 'appkey无效',
  3000: '不存在'
}
export class HTTP {
  request(params) {
    if (!params.method) {
      params.method = "GET"
    }
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json', // 默认值
        'appkey': config.appkey
      },
      success: (res) => {
        let code = res.statusCode.toString();
        params.success&&params.success(res.data)
        // if (code.startsWith('2')) {
        //   params.success(res.data)
        // } else {
        //   this._show_error(res.statusCode)
        // }
      },
      fail: (err) => {
        this._show_error(res.statusCode)
      }
    })
  };
  _show_error(error_code) {
    if (!error_code) {
      error_code = 1;
    }
    wx.showToast({
      title: 'Error:' + tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }
}