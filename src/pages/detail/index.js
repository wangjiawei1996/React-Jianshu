import React, { Component } from 'react';
import { DetailWrapper, Header } from './style'

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>一个中学教师的忠告:别把你的女儿打扮得太漂亮！</Header>
        <img src="//upload-images.jianshu.io/upload_images/13530470-778baa071c046b64.jpg" />
        <p><b>每天上学前，给女儿梳个漂亮的发型，带几个好看的发卡，再穿上美丽的公主裙。。。</b>看着被你打扮得花儿一样的小美女，你打心眼里自豪。“俺家妞儿长的就是好看，长大了一定是美女才女！”</p>
        <p><b>可是，你知道吗？</b>这样做，可能会害了你的女儿！我发现:从小学三年级开始，打扮的出众的女孩子大多是班上最事多的学生。她们要么早恋，要么打成伙子比吃比穿比玩。她们在学生堆里很显眼，你一看就能猜出:这个女生不老实。</p>
        <p>有一年，周围都在传:有几个六年级的女生大白天<b>喝醉</b>了，躺在大马路上耍酒疯。大人们都在唏嘘:现在的小孩子这么猖狂！这都是谁家的闺女呀，爹妈是怎么管教的呀！我并没见过这几个女生，但是在当年七年级的新生里，我还是猜到了几个女生。她们的共同特征是:会穿衣，会打扮，发型别致，有的长得还很漂亮，她们经常三五成群像连体婴一样。</p>
      </DetailWrapper>
    )
  }
}
export default Detail;