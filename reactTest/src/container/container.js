import React from 'react';
import './container.css';
export default class contains extends React.Component {
  render () {
    return (
      <div className="color">
        React 的内容
        <p className="jieshao">React 使用 JSX 来替代常规的 JavaScript。{this.props.name}这是组件中插入的name名称

JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。</p>
      </div>
    )
  }
}