import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { } from './style'
import { WriterWrapper,WriterLeft,Button,NewArticle,Diary,Writing } from './style';
class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (loginStatus) {
      return (
        <WriterWrapper>
          <WriterLeft>
            <Button>回首页</Button>
            <NewArticle><strong>+</strong>新建文集</NewArticle>
            <Diary>日记本</Diary>
            <Writing>随笔</Writing>
          </WriterLeft>
        </WriterWrapper>
      )
    }else {
      return <Redirect to='/login'></Redirect>
    }
  }
}
const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

export default connect(mapState,null)(Write);