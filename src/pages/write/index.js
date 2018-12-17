import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { WriterWrapper,WriterLeft,Button,NewArticle,NewPart,Input,Diary,Writing,Submit,Cancel,WritingAntd,Setting,Question,WritingMiddle,Article,NoTitle,NoArticle,NoPicture,Number,DownArticle,WritingRight,Saved,NoTitleArticle,WriterIconfont,IconfontB,WriterPic,HeadPic,Divide,Formual,Breakout,History} from './style';
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
            </NoTitle>
            <DownArticle><strong>+</strong>在下方新建文件</DownArticle>
          </WritingMiddle>
          <WritingRight>
            <Saved>已保存</Saved>
            <NoTitleArticle>无标题文章</NoTitleArticle>
            <WriterIconfont>
              <IconfontB />
              <WriterPic />
              <HeadPic />
              <Divide />
              <Formual />
              <Breakout />
              <History />
            </WriterIconfont>
          </WritingRight>
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