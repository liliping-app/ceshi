import React from 'react';
class Ref extends React.Component {
  handleClick () {
    this.ref.myTextInput.focus();
  }
  render () {
    return (
      <div>
      <input type="text" ref="myTextInput" />
      <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
}
export  default Ref;