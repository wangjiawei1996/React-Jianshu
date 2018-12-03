import React, { Component} from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, Writers, WriterItem } from '../style';

class Writer extends Component {
  render() {
    let { writers } = this.props;
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
          {
            writers.map((item) => {
              return (
                <WriterItem key={item.get('id')}>
                  <div className="item-inner avatar">
                    <img alt="" src={item.get('imgUrl')} />
                  </div>
                  <div className="item-inner desc">
                    <h3 className="name">{item.get('name')}</h3>
                    <p className="title">{item.get('title')}</p>
                  </div>
                  <div className="item-inner follow">
                    <span>+关注</span>
                  </div>
                </WriterItem>
              )
            })
          }
        </Writers>
      </WriterWrapper> 
    )
  }
}
const mapState = (state) => ({
  writers:state.getIn(['home','writerList'])
})
export default connect(mapState, null)(Writer);