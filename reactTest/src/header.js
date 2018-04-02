import React from 'react';
class Notes extends React.Component{
  render () {
    return (
      <div className="header01">
        <div className="header_main">
          <h2>React 笔记</h2>
          <input type="button" value="添加笔记" className="add_note_btn" onClick={ this.props.onToggleForm} /> 
        </div>
      </div>   
    )
  }
}
export default Notes;