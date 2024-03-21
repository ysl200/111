import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

class App extends Component {
    a = 1;
    // state = {
    //     mytext:"收藏",
    //     myShow:true
    // }
  
    constructor() {
      super();
      this.state = {
        mytext: "收藏",
        myShow: true,
        myname: "kerwin",
      };
    }
  
    render() {
      // var text="收藏"
  
      return (
        <div>
          <h1>欢迎来到react开发-{this.state.myname}</h1>
  
          <button
            onClick={() => {
              //    this.state.mytext = "取消" //不用直接修改状态
  
              this.setState({
                // mytext:"取消收藏"
                myShow: !this.state.myShow,
                myname: "xiaoming",
              }); // 间接修改状态
  
              if (this.state.myShow) {
                console.log("收藏的逻辑");
              } else {
                console.log("取消收藏的逻辑");
              }
            }}
          >
            {this.state.myShow ? "收藏" : "取消收藏"}
            {this.state.myShow ? {myname: "xiaoming"} : {myname: "kerin"}}
          </button>
        </div>
      );
    }
  }

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
