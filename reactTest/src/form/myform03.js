import React from 'react';
const MyForm03 = React.createClass({
  getInitialState: function () {
    return {value: 'jspang'}
  },
  handleChange: function () {
    this.setState({value: event.target.vaule});
    console.log(this.state.value);
  },
  render: function () {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
})