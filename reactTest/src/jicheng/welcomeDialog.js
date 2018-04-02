import React from 'react';
function FancyBorder (props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>{props.children}</div>
  );
}
function WelcomeDialog () {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">wecome</h1>
      <p className = "Dialog-message">Thank you for visiting out spacecraft !</p>
    </FancyBorder>
  )
}
export default WelcomeDialog;