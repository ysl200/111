
import React, {Component} from "react";
import { createRoot } from 'react-dom/client';

export default class App extends Component { 

    state = {
        list: [{
            id: 1,
            text: '22'
        },{
            id: 2,
            text: '22'
        },{
            id: 3,
            text: '22'
        }]
    }
    render() {
        return (
            <div>
                <ul>
                {
                    this.state.list.map((item,index)=> <li key={item.id}>{item.text}</li>)
                }
                </ul> 
            </div>
        )
    }
}


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
