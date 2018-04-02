import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contains from './container/container';
import Comm01 from './comm01';
import Comm03 from './comm03';
import Clicklike from './clicklike';
import Notes from './header';
import HelloBox from './HelloBox';
import Bar01 from './bar/bar01';
import Bar02 from './bar/bar02';
import Bar03 from './bar/bar03';
import Nav from './bar/nav';
import {BrowserRouter as Router , Route , Switch , Redirect } from 'react-router-dom';
import Error from './bar/error';
// import Hello from './hello';
import Children from './children';
import Clock from './clock';
import Ref from './ref';
// import MyForm from './form/myform';
import Toggle from './event/toggle';
import LogginButton from './event/logginbutton';
import Page from './page';
import Greeting from './if/isLoggedIn';
import LoginControl from './if/loginControl';
import Mailbox from './if/mailbox';
import NumberList from './listitems/numberlist';
import Blog from './listitems/Blog';
import NumList from './listitems/numlist';
import Calculator from './statets/calculator';
import Calculator02 from './statets/temInput';
import Calculator03 from './statets/calculator03';
import WelcomeDialog from './jicheng/welcomeDialog';
import SplitPane from './jicheng/splitPane';
import Contacts from './jicheng/contacts';
import Chat from './jicheng/chat';
import SignUpDialog from './jicheng/signup';
let i = 13;
let myStyle = {
  fontSize: 10,
  color: '#ff0000'
}

let arr = [
  <h1 key="1">菜鸟驿站</h1>,
  <h2 key="2">学的不仅是技术，更是梦想！</h2>,
  <h3 key="3">坚持不懈，勇敢之强！</h3>
]
const messages = ['React', 'Re: React', 'Re:Re: React'];

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => 
  <li key={number.toString()}>{number}</li>
);


const numbers2 = [1, 3, 6, 7];

const nums = ['你好', '我好', '大家好', '中国好滴'];

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React !'},
  {id: 2, title: 'Installation', content: 'You can install React from npm .'}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // notes: [],
      formDisplayed: false,
      count: 1
    };
    
  }
  onToggleForm () {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
    console.log(564);
  }
  // getInitialState () {
  //   console.log('1.getInitialState');
  //   return {count: 1};
  // }
  componentWillMount () {
        console.log('2...componentWillMount');
      }
  componentDidMount () {
        console.log('3...componentDidMount');
      }
  componentWillUpdate () {
    console.log('4...componentWillUpdate');
  }
  handleClick = () => {
    console.log('5....handleClick');
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React_Hello</h1>
        </header>
        <div>{arr}</div>
        <div className="App-contain">
          <p className="App-title">你好吗?{ i  === 1 ? 'True!' : 'False'}</p>
          <h1 style= {myStyle} >菜鸟教程</h1>
        </div>
        <p data-myattribute ="somevalue">这是一个很不错的Javascript库！{1 + 1}</p>
        <Contains name="Runoob" />
        <Comm01 name="lili" site="liliping03.com"/>
        <Comm03 site="www.baidu.com"/>
        <Notes onToggleForm={ this.onToggleForm.bind(this) } />
        <Clicklike />
        <HelloBox myattr="world" />
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path='/' component = {Bar01} />
              <Route path = '/Bar02' component = {Bar02} />
              <Route path = "/Bar03/:param" component = {Bar03} />
              <Redirect from ="/redirect" to = '/Bar02' />
              <Route component={Error} />
            </Switch>
          </div>
        </Router>
        <p>
          {this.state.count}<br/>
          <button onClick={this.handleClick}>Add</button>
        </p>
        <Children title="liliping">
        <span>hello</span>
        <span>world</span>
        </Children>
        <Clock />
        <Ref />
        <Toggle />
        <LogginButton />
        <Page />
        <Greeting isLoggedIn= {false} />
        <LoginControl />
        <Mailbox unreadMessages = {messages} />
        <p>渲染多个组件</p>
        <ul>{listItems}</ul>
        <h2>基本列表组件</h2>
        <NumberList numbers2= {numbers2} />
        <h2>使用数据中的ID作为关键字</h2>
        <Blog posts= {posts} />
        <NumList nums = {nums} />
        <h2>提升状态之组件中套用组件</h2>
        <Calculator />
        <Calculator02 />
        <Calculator03 />
        { /*--<p>注释方法</p>--> */ }
        <WelcomeDialog />
        <SplitPane left={<Contacts />} right={<Chat />} />
        <SignUpDialog />
      </div>
    );
  }
}
export default App;
