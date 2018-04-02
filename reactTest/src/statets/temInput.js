import React from 'react';
const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水煮开了</p>
  }
  return <p>水并没有煮开</p>
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }
  handleChange(e) {
    this.setState({temperature: e.target.value});
  }
  render () {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
      <legend>Enter temperature in <b>{scaleName[scale]}</b></legend>
        <input value={temperature} onChange={this.handleChange} placeholder="请输入的摄氏度"/>
        <p>水的状态文案</p>
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
class Calculator02 extends React.Component{
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale= "f" />
      </div>
    );
  }
}
export default Calculator02;