import React from 'react';
class HelloBox extends React.Component{
  render () {
    return (
      <div>
        {'Hello' + this.props.myattr}
      </div>
    )
  }
}
export default HelloBox;