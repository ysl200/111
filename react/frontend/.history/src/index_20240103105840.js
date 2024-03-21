import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

class App extends Component {
    state = {
      list: [
        {
          id: 1,
          text: "1111",
        },
        {
          id: 2,
          text: "2222",
        },
        {
          id: 3,
          text: "3333",
        },
      ],
    };
  
    render() {
      // var newlist = this.state.list.map(item=><li>{item}</li>)
      return (
        <div>
          <ul>
            {this.state.list.map((item, index) => (
              <li key={index}>
                {item.id}--{index}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
