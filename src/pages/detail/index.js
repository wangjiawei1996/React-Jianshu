import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from './style'
import { getIn } from 'immutable';

class Detail extends Component {
  render() {
    const writer = this.props;
    return (
      <DetailWrapper>
        <Header>{ writer.title }</Header>
        <Content 
        dangerouslySetInnerHTML={{__html: writer.content}}
        />
      </DetailWrapper>
    )
  }
}
const mapState = (state) => ({
  title: state.getIn(['detail','title']),
  content: state.getIn(['detail','content'])
})
export default connect(mapState,null)(Detail);