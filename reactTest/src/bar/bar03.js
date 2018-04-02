import React from 'react';
export default class bar01 extends React.Component{
  render() {
    return (
      <div>标题三,传参：{this.props.match.params.param}</div>   
    )
  }
}