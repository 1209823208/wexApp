import {
  HTTP
} from '../util/http-p.js';
import {
  booksData
} from './book-data.js';
class BookModel extends HTTP {
  constructor() {
    super();
    this.searchAllData = {
        "books": [{
            "author": "Luciano Ramalho",
            "id": 20,
            "image": "https://img3.doubanio.com/lpic/s27935775.jpg",
            "isbn": "9781491946008",
            "price": "USD 39.99",
            "title": "Fluent Python",
            "comment": [{
                "content": "2w2w2i hate6!",
                "nums": 32
              },
              {
                "content": "i hate6!",
                "nums": 1
              },
            ]
          },
          {
            "author": "David Gariff",
            "id": 21,
            "image": "https://img3.doubanio.com/lpic/s27145681.jpg",
            "isbn": "9787511719164",
            "price": "98.00元",
            "title": "艺术谱系",
            "comment": [{
                "content": "2w2w2i hate6!",
                "nums": 32
              },
              {
                "content": "i hate6!",
                "nums": 1
              },
            ]
          }
        ],
        "count": 2,
        "start": 0,
        "total": 2
      },
      this.allData = [{
          "author": "陈儒",
          "fav_nums": 0,
          "id": 0,
          "image": "https://img3.doubanio.com/lpic/s3435132.jpg",
          "like_status": 0,
          "title": "Python源码剖析",
          "desc": "没过多久，Jackson 一家驾驶破拖车踏上巡演征途，处女登场演出费敲定七块，不想观众反响热烈，拼命向台上扔钱。这家人很快闯出了名气，喜获黑人音乐传奇厂牌Motown一纸合约。签字当天五个孩子给工作人员留下了深刻 印象：“他们静静地坐在走廊里，不跑、不闹、不说笑。”几位假装活泼的老成少年发行了一系列百万级销量的唱 片，最著名的单曲《ABC》将Beatles的《Let it be》拉下冠军宝座，ABC电视台还为他们制作了整整两季动画片。\\n音乐事业如火如荼，导致业务繁忙的Michael无法按时到校，只好聘请私人家教；于是步入青春期后，他的世界在 越变越大的同时也越变越小，考试、球场、社团活动…全都远在外太空，伴随他的只有歌迷的欢呼，更夸张的是虽 然他的音乐挑逗意味浓厚，本人却直到三十岁都不曾交过女友。台下的天王与台上判若两人，他内敛羞涩，不懂拉 帮结派，但凡社交总会令他手足无措，长期独居于豪华酒店，每逢下楼都乘坐货梯，为的就是躲避与“正常”人 的“正常”交流；他还常常变装上街，偶尔甚至会穿上女裙，曾因裹得太严实被警察当成小偷拷走。\\n在一个人的成长过程中，每一张录取通知书都只是一个起点。什么才是让一个人适应未来发展、赢得“人生长跑”的根源能力呢？这些能力又如何获得呢？",
          "comment": [{
              "content": "i hate6!Python源码剖析",
              "nums": 1
            },
            {
              "content": "i hate6!",
              "nums": 14
            },
            {
              "content": "i hate6!",
              "nums": 21
            },
            {
              "content": "i hate6!",
              "nums": 78
            },
            {
              "content": "i hate6!",
              "nums": 210
            },
            {
              "content": "i hatPython源码剖析e6!",
              "nums": 432
            },
            {
              "content": "i hate6!",
              "nums": 89
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 10,
          "id": 1,
          "image": "https://img3.doubanio.com/lpic/s29631790.jpg",
          "like_status": 0,
          "title": "Dive Into Python",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 30,
          "id": 2,
          "image": "https://img3.doubanio.com/lpic/s4059293.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 6,
          "id": 3,
          "image": "https://img3.doubanio.com/lpic/s4059294.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 4,
          "image": "https://img3.doubanio.com/lpic/s4059295.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 5,
          "image": "https://img3.doubanio.com/lpic/s4059296.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 6,
          "image": "https://img3.doubanio.com/lpic/s4059297.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 7,
          "image": "https://img3.doubanio.com/lpic/s4059298.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 8,
          "image": "https://img3.doubanio.com/lpic/s4059299.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 9,
          "image": "https://img3.doubanio.com/lpic/s4059210.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 10,
          "image": "https://img3.doubanio.com/lpic/s4059211.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 11,
          "image": "https://img3.doubanio.com/lpic/s4059212.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 12,
          "image": "https://img3.doubanio.com/lpic/s4059213.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 13,
          "image": "https://img3.doubanio.com/lpic/s4059214.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 14,
          "image": "https://img3.doubanio.com/lpic/s4059215.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 15,
          "image": "https://img3.doubanio.com/lpic/s4059216.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 16,
          "image": "https://img3.doubanio.com/lpic/s4059217.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 17,
          "image": "https://img3.doubanio.com/lpic/s4059218.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 18,
          "image": "https://img3.doubanio.com/lpic/s4059219.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        },
        {
          "author": "MarkPilgrim",
          "fav_nums": 0,
          "id": 19,
          "image": "https://img3.doubanio.com/lpic/s4059220.jpg",
          "like_status": 0,
          "title": "Dive Into Python 3",
          "disc": '这是\\n一本\\n好书',
          "comment": [{
              "content": "2w2w2i hate6!",
              "nums": 32
            },
            {
              "content": "i hate6!",
              "nums": 1
            },
          ]
        }
      ]
  }
  getBookData() {
    return this.request({
      url: '/book/hot_list'
    }).then((res) => {
      if (res.statusCode === 401) {
        return this.allData
      }
    })
  };
  getDataDetail(bid) {
    return this.request({
      url: `/book/${bid}>/detail`
    }).then((res) => {
      if (res.statusCode === 401) {
        if (!this.allData[bid]) {
          return this.allData[0];
        }
        return this.allData[bid]
      }
    })
  };
  getComment(bid) {
    return this.request({
      url: `/book/${bid}/short_comment`
    }).then((res) => {
      if (res.statusCode === 401) {
        if (!this.allData[bid]) {
          return this.allData[0]['comment']
        }
        return this.allData[bid]['comment']
      }
    })
  };
  getBookSearch(start=0,keyword='',count=20) {
    return this.request({
      url: `/book/search`,
      data: {
        start,
        count,
        summary:1,
        q: keyword
      }
    }).then((res) => {
      if (res.statusCode === 401) {
        console.log(start, count);
        let newData = booksData.slice(start, start+count);
        console.log(newData); 
        return {bookData:newData,count:61};
      }
    })
  };

}
export {
  BookModel
}