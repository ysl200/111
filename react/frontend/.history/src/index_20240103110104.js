import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

class App extends Component {
    // myusername = React.createRef()
    state = {
      username: "kerwin",
    };
    render() {
      return (
        <div>
          <h1>登录页</h1>
          <input
            type="text"
            value={this.state.username}
            onChange={(evt) => {
              console.log("onChange", evt.target.value);
  
              this.setState({
                username: evt.target.value,
              });
            }}
          />
  
          <button
            onClick={() => {
              console.log(this.state.username);
            }}
          >
            登录
          </button>
          <button
            onClick={() => {
              this.setState({
                username: "",
              });
            }}
          >
            重置
          </button>
          {/* <Child myvalue={this.state.username}/> */}
        </div>
      );
    }
  }

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
