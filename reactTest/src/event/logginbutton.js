import React from 'react';
export default class LogginButton extends React.Component{
  handleClick () {
    console.log('this is', this);
  }
  UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  GuestGreeting(props) {
    return <h1>Please sign up </h1>;
  }
  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>Click Me</button>
    ); 
  }
}