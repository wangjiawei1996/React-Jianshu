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
    id: 2,
    title: '三毛：我们终其一生，就是要摆脱他人的期待，找到真正的自己',
    desc: '很多人看三毛，是在初高中的时候看的。 那个年纪，我们敏感、困惑， 开始懵懵懂懂地思考人生，以及向往远方， 却又被摁在压抑的狭小的课桌前， 面对升...',
    imgUrl: '//upload-images.jianshu.io/upload_images/1439852-7b654570a7b8cc65?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 3,
    title: 'Github上 10 个开源免费且优秀的后台控制面板',
    desc: 'Web 开发中几乎的平台都需要一个后台管理，但是从零开发一套后台控制面板并不容易，幸运的是有很多开源免费的后台控制面板可以给开发者使用，那么有哪...',
    imgUrl: '//upload-images.jianshu.io/upload_images/6085094-1f331183efa39db4.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 4,
    title: '不是你好看，而是你看起来很好追',
    desc: '文/番茄十八 刚刚在网上看到有人说：“好看的皮囊太多，温柔的灵魂才是重点，我有一同学，颜值5分，普普通通，保守文静，放人堆儿里也不出挑，身边却有...',
    imgUrl: '//upload-images.jianshu.io/upload_images/6511360-abe3fe6bd6b9f08d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 5,
    title: '她选择了和崔永元一样沦为“疯子”，确是国人心中的女神。',
    desc: '来源‖煮酒论政 崔永元因“阴阳合同”事件， 一直被推向风口浪尖， 他本是一往无前的斗士， 却被很多人看做是“疯子”， 但就是这样的“疯子”， 敢...',
    imgUrl: '//upload-images.jianshu.io/upload_images/6167143-a1cb175205943c61.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }],
  recommendList:[{
    id: 1,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
  }, {
    id: 2,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
  }, {
    id: 3,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
  }, {
    id: 4,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  }, {
    id: 5,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
  }],
  writerList:[{
    id: 1,
    name: '穿着prada挤地铁',
    title: '写了340.2k字 · 3.3k喜欢',
    imgUrl: 'http://upload.jianshu.io/users/upload_avatars/2587459/0c7e061f-e78e-4b09-b511-340846c4ea0f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"'
  }, {
    id: 2,
    name: '遛遛心情的溜妈',
    title: '写了542.5k字 · 2.1k喜欢',
    imgUrl: 'http://upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }, {
    id: 3,
    name: '琪官Kafka',
    title: '写了364.6k字 · 3.7k喜欢',
    imgUrl: 'http://upload.jianshu.io/users/upload_avatars/6539412/824c3d2f-b0d2-43a6-885a-d2acd37fd364.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }, {
    id: 4,
    name: '徐林Grace',
    title: '写了586.3k字 · 4.7k喜欢',
    imgUrl: 'http://upload.jianshu.io/users/upload_avatars/5545154/1a3d5ed6-9ad1-44b3-9457-3e6a29dd1b71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }, {
    id: 5,
    name: '木清琳',
    title: '写了209.5k字 · 2k喜欢',
    imgUrl: 'http://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }]
});
  
  export default (state = defaultState,action) => {
    switch(action.type) {
      default:
        return state;
    }
  }