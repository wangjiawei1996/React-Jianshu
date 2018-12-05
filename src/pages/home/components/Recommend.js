import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem, RecommendDownload, RecommendAside} from '../style';
class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
      {
        this.props.list.map((item) => {
          return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
        })
      }
      <RecommendDownload>
        <img alt='' className="qrcode" src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
        <RecommendAside>
          <h3 className="title">下载简书手机App</h3>
          <p className="description">随时随地发现和创作内容</p>
        </RecommendAside>
      </RecommendDownload>
    </RecommendWrapper>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home','recommendList'])
})

export default connect(mapState,null)(Recommend);