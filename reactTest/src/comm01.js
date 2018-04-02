import React from  'react';
export default class comm01 extends React.Component {
  render () {
    return (
      <div>
      <p name={this.props.name} >名称</p>
        <p site={this.props.site} >网址</p>
      </div>
    );
  }
}