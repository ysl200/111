import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

class App extends Component {
    state = {
      myhtml: `
          <div class="top-rated">
             <h1>标题</h1>
          </div>`,
    };
  
    render() {
      return (
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: this.state.myhtml,
            }}
          ></div>
        </div>
      );
    }
  }

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
