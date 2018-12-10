import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper,LoginBox,Input,Button,LoginTitle, LoginNormal, LoginSubmit, LoginRegister, LoginBtn, RememberBtn,MoreSign} from './style';
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