
import React, {Component} from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

class TodoList extends Component {

    myref = React.createRef()  // 推荐此种写法

    render() {
        return (
            <div>
                <input type="text" ref={this.myref} /> 
                <button onClick={()=>  this.handelClick()}>add</button> 
            </div>
        );
    }

    handelClick () {
        console.log(1) 
        console.log(this.myref.current.value)
    } 
}

export default TodoList;


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<TodoList />);
