import React, { Component } from 'react';

import {
  HeaderWrapper,
  Logo,
  NAV
} from './style';
class Header extends Component {
  render(){
    return (
      <HeaderWrapper>
        <Logo href='/'/>
        <NAV>

        </NAV>
      </HeaderWrapper>
    )
  }
}

export default Header;