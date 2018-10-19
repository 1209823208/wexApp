import {
  HTTP
} from '../util/http.js'
class LikeModel extends HTTP {
  constructor() {
    super()
  }
  changeNum(behaviour,art_id,type) {
    let new_url = behaviour==='like'?'add':'cancel';
    this.request({
      url: 'like/'+new_url,
      method:'POST',
      data:{
        art_id:art_id,
        type:type,
      }
    })
  }
}
export {
  LikeModel
}