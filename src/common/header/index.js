import React, { Component } from 'react';

import {
  HeaderWrapper,
  Logo,
  NAV,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style';
class Header extends Component {
  render(){
    return (
      <HeaderWrapper>
        <Logo href='/'/>
        <NAV>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch></NavSearch>
            <i className="iconfont">&#xe614;</i>
          </SearchWrapper>
        </NAV>
        <Addition>
          <Button className='writting'>
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header;