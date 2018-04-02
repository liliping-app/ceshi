import React from 'react';
class Children extends React.Component{
  propTypes: {
    title: React.propTypes.string.isRequired
  }
  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ol>
          {
            React.Children.map(this.props.children, function (child) {
              return <li>{child}</li>
            })
          }
        </ol>
      </div>
    );
  }
}
export default Children;