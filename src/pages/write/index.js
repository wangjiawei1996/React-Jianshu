import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { } from './style'
import { WriterWrapper,WriterLeft,Button,NewArticle,NewPart,Input,Diary,Writing,Submit,Cancel,WritingAntd,Setting,Question,WritingMiddle,Article,NoTitle,NoArticle,NoPicture,Number,PictureSetting } from './style';
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
            <WritingAntd>
              <Setting>设置</Setting>
              <Question>遇到问题？</Question>
            </WritingAntd>
          </WriterLeft>
          <WritingMiddle>
            <Article><strong>+</strong>新建文集</Article>
            <NoTitle>
              <NoArticle>无标题文章</NoArticle>
              <NoPicture>
                <img className='pic' alt='' src='http://img2.imgtn.bdimg.com/it/u=2277892914,4166593710&fm=26&gp=0.jpg' />
              </NoPicture>
              <Number>字数:0</Number>
              <PictureSetting>
                <img className='setting' alt='' src='http://img2.imgtn.bdimg.com/it/u=3399896936,280204770&fm=26&gp=0.jpg' />
              </PictureSetting>
            </NoTitle>
          </WritingMiddle>
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