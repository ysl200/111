import React, { Component } from "react";
import { createRoot } from 'react-dom/client';


function onClick(event) {
    console.log(event); // =>无效的对象
    console.log(event.type); // => "click"
    var eventType = event.type; // => "click"
  
    setTimeout(function() {
      console.log(event.type); // => null
      console.log(eventType); // => "click"
    }, 0);
  
    this.setState({clickEvent: event}); // 不起作用.this.state.clickEvent 将只包含空值.
    this.setState({eventType: event.type}); // 您依然可以导出事件属性
  }

export default onClick;

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<onClick />);
