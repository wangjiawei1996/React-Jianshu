import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper,LoginBox,Input,Button,LoginTitle, LoginNormal, LoginSubmit, LoginRegister} from './style';
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
          <Button>登录</Button>
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