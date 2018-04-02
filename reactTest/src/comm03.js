import React from 'react';
export default class comm03 extends React.Component {
  render () {
    return (
      <div>
        <a href={this.props.site} target="_blank">{this.props.site}</a>
      </div>
    );
  }
}