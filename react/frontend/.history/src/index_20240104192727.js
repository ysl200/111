import React, { Component } from "react";
import { createRoot } from 'react-dom/client';



class TodoList extends Component {
    render() {
        return (
            <div>
                <input type="text" />

                <button onClick={()=>{
                    alert(1)
                }}>add</button>

                <button onClick={this.handelClick}>add2</button>

                <button onClick={this.handelClick2}>add3</button>

                <button onClick={()=>{
                   this.handelClick3()
                }}>add4</button>
            </div>
        );
    }

    handelClick () {
        console.log(1)
        console.log(this)
    }

    // 箭头函数 
    handelClick2 = () => {
        console.log(2)
        console.log(this)
    }

    // 箭头函数 
    handelClick3 = () => {
        console.log(3)
        console.log(this)
    }
}

export default TodoList;

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<TodoList />);
