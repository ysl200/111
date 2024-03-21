import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

class Navbar extends Component {
    render() {
      return (
        <div style={{ background: "red" }}>
          <button
            onClick={() => {
              console.log("子通知父， 让父的isSHow 取反。", this.props.event);
  
              this.props.event(); //调用父组件传来啊的回调函数
            }}
          >
            click
          </button>
          <span>navbar</span>
        </div>
      );
    }
  }
  class Sidebar extends Component {
    render() {
      return (
        <div style={{ background: "yellow", width: "200px" }}>
          <ul>
            <li>11111</li>
          </ul>
        </div>
      );
    }
  }
  // 父组件
  class App extends Component {
    state = {
      isShow: false,
    };
  
    handleEvent = () => {
      this.setState({
        isShow: !this.state.isShow,
      });
      // console.log("父组件定义的event事件")
    };
    render() {
      return (
        <div>
          <Navbar event={this.handleEvent} />
          {/* <button onClick={()=>{
                      this.setState({
                          isShow:!this.state.isShow
                      })
                  }}>click</button> */}
          {this.state.isShow && <Sidebar />}
        </div>
      );
    }
  }

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
