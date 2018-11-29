import React, { Component} from 'react'
import { TopicWrapper,TopicItem } from '../style'
class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img
            className='topic-pic '
            src = '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp' 
          />
          社会热点
        </TopicItem>
      </TopicWrapper>
    )
  }
}
export default Topic;