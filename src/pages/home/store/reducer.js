import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
  }, {
    id: 2,
    title: '手绘',
    imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
  }, {
    id: 3,
    title: '@IT·互联网',
    imgUrl: '//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
  }, {
    id: 4,
    title: '旅行·在路上',
    imgUrl: '//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
  }, {
    id: 5,
    title: '生活家',
    imgUrl: '//upload.jianshu.io/collections/images/25920/enhanced-buzz-wide-16461-1372163238-8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
  }, {
    id: 6,
    title: '连载小说',
    imgUrl: '//upload.jianshu.io/collections/images/61/0__15815600_401_00.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
  }, {
    id: 7,
    title: '程序员',
    imgUrl: '//upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
  }, {
    id: 8,
    title: '简书交友',
    imgUrl: '//upload.jianshu.io/collections/images/509834/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20170810142951.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
  }],
  articleList: [{
    id: 1,
    title: '你看懂《这个杀手不太冷》了吗？除了爱情，同样令人深思',
    desc: '今天分享一部电影——《这个杀手不太冷》，想必大家都不陌生，该作品是由法国著名导演吕克·贝松编剧并执导，于1994年在法国上映，不得不说，该片的诞...',
    imgUrl: '//upload-images.jianshu.io/upload_images/3890084-5459c2711f738d0d.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 1,
    title: '你看懂《这个杀手不太冷》了吗？除了爱情，同样令人深思',
    desc: '今天分享一部电影——《这个杀手不太冷》，想必大家都不陌生，该作品是由法国著名导演吕克·贝松编剧并执导，于1994年在法国上映，不得不说，该片的诞...',
    imgUrl: '//upload-images.jianshu.io/upload_images/3890084-5459c2711f738d0d.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 2,
    title: '你看懂《这个杀手不太冷》了吗？除了爱情，同样令人深思',
    desc: '今天分享一部电影——《这个杀手不太冷》，想必大家都不陌生，该作品是由法国著名导演吕克·贝松编剧并执导，于1994年在法国上映，不得不说，该片的诞...',
    imgUrl: '//upload-images.jianshu.io/upload_images/3890084-5459c2711f738d0d.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 3,
    title: '你看懂《这个杀手不太冷》了吗？除了爱情，同样令人深思',
    desc: '今天分享一部电影——《这个杀手不太冷》，想必大家都不陌生，该作品是由法国著名导演吕克·贝松编剧并执导，于1994年在法国上映，不得不说，该片的诞...',
    imgUrl: '//upload-images.jianshu.io/upload_images/3890084-5459c2711f738d0d.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 4,
    title: '你看懂《这个杀手不太冷》了吗？除了爱情，同样令人深思',
    desc: '今天分享一部电影——《这个杀手不太冷》，想必大家都不陌生，该作品是由法国著名导演吕克·贝松编剧并执导，于1994年在法国上映，不得不说，该片的诞...',
    imgUrl: '//upload-images.jianshu.io/upload_images/3890084-5459c2711f738d0d.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
});
  
  export default (state = defaultState,action) => {
    switch(action.type) {
      default:
        return state;
    }
  }