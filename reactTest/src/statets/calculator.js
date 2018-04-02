import React from 'react';
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水煮开了</p>
  }
  return <p>水并没有煮开</p>
}

 class Calculator extends React.Component {
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
    return (
      <fieldset>
        <legend>fieldset in 标签的表单: </legend>
        <input value= {temperature} onChange={this.handleChange} placeholder="请输入的摄氏度"/>
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
export default Calculator;

