import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

// 父组件
class App extends Component {
    render() {
      return (
        <div>
          {/* 类组件 */}
          <Navbar title="导航"></Navbar>
  
          {/* 函数式组件 */}
          <Sidebar bg="red" position="left"></Sidebar>
        </div>
      );
    }
  }
  //  子组件class
  class Navbar extends Component {
    //属性是父组件传来的，this.props
    render() {
      // console.log(this.props)
      let { title, leftshow } = this.props;
      return (
        <div>
          {leftshow && <button>返回</button>}
          navbar-{title}
          <button>home</button>
        </div>
      );
    }
  }
  // 函数组件
  function Sidebar(props) {
    return (
      <div style={{ background: props.bg }}>
        <ul>
          <li>11111</li>
        </ul>
      </div>
    );
  }

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
