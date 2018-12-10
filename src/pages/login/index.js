import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper,LoginBox,Input,Button,LoginTitle, LoginNormal, LoginSubmit, LoginRegister, LoginBtn, RememberBtn,MoreSign, ThreeSociety, Others} from './style';
class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <LoginTitle>
            <LoginNormal>
              <LoginSubmit>登录</LoginSubmit>
              <LoginRegister>注册</LoginRegister>
            </LoginNormal>
          </LoginTitle>
          <Input placeholder='手机号或邮箱'/>
          <Input placeholder='密码'/>
          <LoginBtn>
            <RememberBtn>
              <input type="checkbox" value="true" checked="checked" />
              <span className="remember">记住我</span>
              <p className="forget">登录遇到问题？</p>
            </RememberBtn>
          </LoginBtn>
          <Button>登录</Button>
          <MoreSign>
            <h6 className="society">——————&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社交账号登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——————</h6>
            <ThreeSociety>
             <img alt='' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544441212055&di=a704ff5a34188723d10c4ebd5a8707c4&imgtype=0&src=http%3A%2F%2Fwww.9669.com%2Fuploadfile%2F2016%2F1117%2F20161117033005998.jpg"/>
             <img alt='' src="https://f11.baidu.com/it/u=2637631149,908982834&fm=72"/>
             <img alt='' src="http://img5.imgtn.bdimg.com/it/u=2716092914,1740098833&fm=26&gp=0.jpg"/>
             <Others>其他</Others>
            </ThreeSociety>
          </MoreSign>
        </LoginBox>
      </LoginWrapper>
    )
  }
}
const mapState = (state) => ({
  
});
const mapDispatch = (dispatch) =>({
  
})
export default connect(mapState,mapDispatch)(Login);