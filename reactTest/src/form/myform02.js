import React from 'react';
const MyForm02 = React.createClass({
  getInitialState: function () {
    return {
      username: '',
      gender: 'man',
      checked: true
    }
  },
  handleChange: function (event) {
    var newState = {};
    newState[evnet.tareget.name] = event.target.name == "checked" ? event.target.checked : event.target.value;
    this.setState(newState);
    console.log(newState);
  },
  submitHandler: function () {
    e.preventDefault();
    var is = this.state.checked ? '是' : '不是';
    var gender = this.state.gender == "man" ? "帅哥" : '美女';
    alert(this.state.username + is + gender + '.');
  },
  render: function () {
    return (
      <form onSubmit = {this.submitHandler}>
        <label htmlFor = "username">请输入您的姓名</label>
        <input type="text" name="username" onChange= {this.handleChange} value= {this.state.username} id="username" />
        <br/>
        <label htmlFor="checkbox">是或否</label>
        <input id="checkbox" type="checkbox" value="是否" name="checkbox" onChange= {this.handleChange} checked= {this.state.checked}/>
        <br/>
        <label htmlFor="username">请选择 </label>
        <select name="gender" onChange= {this.handleChange} value= {this.state.gender}>
          <option value="man">帅哥</option>
          <option value="woman">美女</option>
        </select>\
        <br/>
        <button type="submit">提交</button>
      </form>
    )
  }
})