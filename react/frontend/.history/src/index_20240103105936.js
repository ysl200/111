import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

class App extends Component {
    myusername = React.createRef();
    render() {
      return (
        <div>
          <h1>登录页</h1>
          <input type="text" ref={this.myusername} defaultValue="kerwin" />
  
          <button
            onClick={() => {
              console.log(this.myusername.current.value);
            }}
          >
            登录
          </button>
          <button
            onClick={() => {
              this.myusername.current.value = "";
            }}
          >
            重置
          </button>
          {/* <Child myvalue={this.myusername.current.value}/> */}
        </div>
      );
    }
  }

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
