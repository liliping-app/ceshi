import React from 'react';
export default class bar01 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      power: false
    }
    this.changePower = this.changePower.bind(this);
  }
  changePower() {
    alert('start....');
    this.setState({
      power: !this.state.power
    })
  }
  render() {
    return (
      <div>
        标题二
        <button onClick= {this.changePower}>按钮{this.state.power}-{this.state.power? '你好' : '大家好'}</button>  
      </div>  
    )
  }
}