import React from 'react';
var MyForm = React.createClass({
  getinitialState: function () {
    return {
      username: '',
      gender: 'man',
      checked: true
    }
  },
  handleChange: function (name, event) {
    var newState = {};
    newState[name] = name == "checked" ? event.target.checked: event.target.value;
    this.setState(newState);
    console.log(newState);
  },
  submithandler: function (e) {
    e.preventDefault();
    var is = this.state.checked ? 'Yes' : 'No';
    let gender = this.state.gender == "man" ? 'sunshile' : 'guile';
    alert(this.state.username + is + gender + '.');
  },
  render: function () {
    return (
      <form onSubmit = {this.submitHandler}>
        <label htmlFor="username">请输入您的姓名：</label>
        <input type="text" name="username" onChange={this.handleChange.bind(this, "username")} value={this.state.username} id="username" /><br/>
        <label htmlFor="checkbox">是或否</label>
        <input type="checkbox" id="checkbox" value="是否" name="checked" onChange={this.handleChange.bind(this, "checked")} checked={this.state.checked} />
        <br/>
        <label htmlFor="username">请选择</label>
        <select name="gender" onChange={this.handleChange.bind(this, "gender")} value={this.state.gender}>
          <option value="man">帅哥</option>
          <option value="woman">美女</option>
        </select>
        <br/>
        <button type="submit">提交</button>
      </form>
    );
  }
});
export default MyForm;