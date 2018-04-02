import React from 'react';
class Clicklike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: false,
      enable: '晚安'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({power: !this.state.power});
    this.setState({enable: '早安'});
  }
  render () {
    return (
      <p>
        <input disabled={this.state.power} />{this.state.enable} {this.state.power ? '你好' : '大家好'}
        <button onClick={this.handleClick}>改变textbox状态</button>
      </p>
    )
  }
}
export default Clicklike;