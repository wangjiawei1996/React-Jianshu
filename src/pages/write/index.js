import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { } from './style'
import { WriterWrapper,WriterLeft,Button,NewArticle,NewPart,Input,Diary,Writing,Submit,Cancel } from './style';
class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (loginStatus) {
      return (
        <WriterWrapper>
          <WriterLeft>
            <Button>回首页</Button>
            <NewArticle><strong>+</strong>新建文集</NewArticle>
            <NewPart>
              <Input placeholder='请输入文集名...'/>
              <Submit>提&nbsp;交</Submit>
              <Cancel>取&nbsp;消</Cancel>
            </NewPart>
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