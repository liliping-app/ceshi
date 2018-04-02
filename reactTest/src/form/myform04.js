import React from 'react';
const MyForm04 = React.createClass({
  handleChange: function () {
    var inputValue = ReactDOM.findDOMNode(this.refs.jspang).value;
    console.log(inputValue);
  },
  render: function () {
    return (
      <div>
        <input type="text" onChange={this.handleChange} ref="jspang" defaultVaule="jspang"/>
      </div>
    )
  }
})