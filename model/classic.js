import {
  HTTP
} from '../util/http.js'
class ClassicModel extends HTTP {
  constructor() {
    super();
    this.allData = [{
        "content": "人生不能像做菜，把所有的料准备好才下锅",
        "fav_nums": 280,
        "id": 1,
        "image": "http://bl.7yue.pro/images/movie.4.png",
        "index": 1,
        "like_status": 0,
        "pubdate": "2018-06-22",
        "title": "movie",
        "type": "movie"
      },
      {
        "content": "你陪我步入蝉夏 越过城市喧嚣",
        "fav_nums": 30,
        "id": 1,
        "image": "http://bl.7yue.pro/images/music.1.png",
        "index": 2,
        "like_status": 0,
        "pubdate": "2018-06-22",
        "title": "纸短情长",
        "type": 'music',
        "url": 'http://music.163.com/song/media/outer/url?id=557581284.mp3'
      },
      {
        "content": "人备好才下锅",
        "fav_nums": 20,
        "id": 1,
        "image": "http://bl.7yue.pro/images/movie.8.png",
        "index": 3,
        "like_status": 0,
        "pubdate": "2018-06-22",
        "title": "李安<<饮食男女>>",
        "type": "movie"
      },

      {
        "content": "这个夏天又是一个毕业季",
        "fav_nums": 580,
        "id": 1,
        "image": "http://bl.7yue.pro/images/music.3.png",
        "index": 4,
        "like_status": 0,
        "pubdate": "2018-06-22",
        "title": "未名",
        "type": 'music',
        "url": 'http://music.163.com/song/media/outer/url?id=557581287.mp3'
      },
      {
        "content": "像做菜，把所有",
        "fav_nums": 2,
        "id": 1,
        "image": "http://bl.7yue.pro/images/sentence.6.png",
        "index": 5,
        "like_status": 0,
        "pubdate": "2018-06-22",
        "title": "李安<<sentence>>",
        "type": 'sentence'
      },

      {
        "content": "把所有的料准备好才下锅",
        "fav_nums": 10,
        "id": 1,
        "image": "http://bl.7yue.pro/images/movie.4.png",
        "index": 6,
        "like_status": 0,
        "pubdate": "2018-06-22",
        "title": "岁月神偷",
        "type": 'movie'
      },
      {
        "content": "人生不能像做菜，把所有的料准备好才下锅",
        "fav_nums": 80,
        "id": 1,
        "image": "http://bl.7yue.pro/images/music.5.png",
        "index": 7,
        "like_status": 0,
        "pubdate": "2018-06-22",
        "title": "李安<<music>>",
        "type": 'music',
        "url": 'http://music.163.com/song/media/outer/url?id=557581285.mp3'
      },
      {
        "content": "好才下锅",
        "fav_nums": 7,
        "id": 1,
        "image": "http://bl.7yue.pro/images/sentence.2.png",
        "index": 8,
        "like_status": 0,
        "pubdate": "2018-06-22",
        "title": "sentence",
        "type": 'sentence'
      },
      {
        "content": "人生不能像做菜，把所有的料准备好才下锅",
        "fav_nums": 5000,
        "id": 1,
        "image": "http://bl.7yue.pro/images/music.5.png",
        "index": 9,
        "like_status": 0,
        "pubdate": "2018-06-22",
        "title": "李安<<music>>",
        "type": 'music',
        "url": 'http://music.163.com/song/media/outer/url?id=557581286.mp3'
      }
    ];
    this.likeData = [{
        "content": "人生不能像做菜，把所有的料准备好才下锅",
        "fav_nums": 1,
        "id": 1,
        "image": "http://bl.7yue.pro/images/movie.4.png",
        "pubdate": "2018-06-22",
        "title": "李安<<饮食男女>>",
        "type": "movie"
      },
      {
        "content": "你陪我步入蝉夏 越过城市喧嚣",
        "fav_nums": 0,
        "id": 3,
        "image": "http://bl.7yue.pro/images/music.1.png",
        "index": 1,
        "like_status": 0,
        "pubdate": "2018-06-22",
        "title": "纸短情长",
        "type": "music",
        "url": "http://music.163.com/song/media/outer/url?id=557581284.mp3"
      },
      {
        "content": "像做菜，把所有",
        "fav_nums": 2,
        "id": 1,
        "image": "http://bl.7yue.pro/images/sentence.6.png",
        "index": 5,
        "like_status": 0,
        "pubdate": "2018-06-22",
        "title": "李安<<sentence>>",
        "type": 'sentence'
      }
    ]
  }
  getLastData(sComeback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        res = this.allData[8];
        sComeback(res);
      }
    })
  };
  getPreOrNextData(index, preOrNext, sComeback) {
    if (preOrNext === 'previous') {
      index = index - 2;
    } else {
      index = index;
    }
    this.request({
      url: '/classic/' + index + '/' + preOrNext,
      success: (res) => {
        res = this.allData ? this.allData[index] : {};
        sComeback(res);
        this.setLastIndexStorage(res.index);
      }
    })
  };
  isLast(index) {
    return index === 9 ? true : false;
  };
  isFirst(index) {
    return index === 1 ? true : false;
  };
  getLastIndexStorage() {
    wx.getStorage({
      key: 'lastStroge'
    })
  };
  setLastIndexStorage() {
    wx.setStorage({
      key: 'lastStroge',
      data: '9',
    })
  };
  getLiskData(sComeback) {
    this.request({
      url: '/classic/favor',
      success: (res) => {
        res = this.likeData;
        sComeback(res);
      }
    })
  }
}
export {
  ClassicModel
}