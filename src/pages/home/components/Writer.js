import React, { Component} from 'react';
import { WriterWrapper, Writers, WriterItem } from '../style';

class Writer extends Component {
  render() {
    return (
      <WriterWrapper>
        <h3 className="title">
          <span className="desc">推荐作者</span>
          <span className="page-change">
            <i className="iconfont change">o</i>
            换一换
          </span>
        </h3>
        <Writers className="writers">
          <WriterItem>
            <div className="item-inner avatar">
              <img alt="" src="http://upload.jianshu.io/users/upload_avatars/2587459/0c7e061f-e78e-4b09-b511-340846c4ea0f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
            </div>
            <div className="item-inner desc">
              <h3 className="name">穿着prada挤地铁</h3>
              <p className="title">写了340.2k字 · 3.3k喜欢</p>
            </div>
            <div className="item-inner follow">
              <span>+关注</span>
            </div>
          </WriterItem>
        </Writers>
      </WriterWrapper> 
    )
  }
}
export default Writer;