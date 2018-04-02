import React from 'react';
class Hello extends React.Component{
  constructor(props){
    super(props);
    let getInitialState = () => {
      console.log('sdfjs');
      return {opacity: 1.0};
    }
    let componentDidMount = () => {
      setInterval(function () {
        let opacity = this.state.opacity;
        opacity -= 0.05;
        if (opacity < 0.1) {
          opacity = 1.0;
        }
        this.setState({
          opacity: opacity
        });
      }.bind(this), 100);
    }
  }
  render () {
      return (
        <div style={{opacity: this.state.opacity}}>
        <h2>Hello {this.props.name}</h2>
        </div>
      );
  }
}
export default Hello;