import React, { Component } from "react";
import ReactDOM from 'react-dom';

class App extends Component {
    myref = React.createRef();
    render() {
      return (
        <div>
          {/* <input ref="mytext"/> */}
          <input ref={this.myref} />
          <button
            onClick={() => {
              // console.log("click1",this.refs.mytext.value)
  
              console.log("click", this.myref.current.value);
            }}
          >
            add1
          </button>
  
          <button onClick={this.handleClick2}>add2</button>
        </div>
      );
    }
  
    handleClick2 = () => {
      console.log("click2", this.myref.current.value);
    };
  }

ReactDOM.render(
    <App />,
    document.getElementById('root')
)