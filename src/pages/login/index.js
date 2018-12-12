import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper,LoginBox,Input,Button,LoginTitle, LoginNormal, LoginSubmit, LoginRegister, LoginBtn, RememberBtn,MoreSign, ThreeSociety, Others} from './style';
import { actionCreators } from './store';
class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <LoginTitle>
              <LoginNormal>
                <LoginSubmit>登录</LoginSubmit>
                <LoginRegister>注册</LoginRegister>
              </LoginNormal>
            </LoginTitle>
            <Input placeholder='账号或手机号' ref={(input) => {this.account = input}}/>
            <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
            <LoginBtn>
              <RememberBtn>
                <input type="checkbox" value="true" />
                <span className="remember">记住我</span>
                <p className="forget">登录遇到问题？</p>
              </RememberBtn>
            </LoginBtn>
            <Button onClick={() => this.props.login(this.account,this.password)}>登录</Button>
            <MoreSign>
              <h6 className="society">——————&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社交账号登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——————</h6>
              <ThreeSociety>
               <img alt='' src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3115168863,408086351&fm=11&gp=0.jpg"/>
               <img alt='' src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=487628588,2307382441&fm=26&gp=0.jpg"/>
               <img alt='' src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1567381953,3687108361&fm=26&gp=0.jpg"/>
               <Others>其他</Others>
              </ThreeSociety>
            </MoreSign>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
      return <Redirect to='/'></Redirect>
    }
  }
}
const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) => ({
  login(accountElement,passwordElement){
      dispatch(actionCreators.login(accountElement.value,passwordElement.value));
  }
})
export default connect(mapState,mapDispatch)(Login);