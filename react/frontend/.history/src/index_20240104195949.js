
import React, {Component} from "react";
import { createRoot } from 'react-dom/client';

export default class App extends Component { 

    constructor() { 
        super() 
        this.state = { 
            name: 'React', 
            isLiked: false 
            } 
        }
    
        handleBtnClick = () => { 
            this.setState({ 
                isLiked: !this.state.isLiked 
                }
            ) 
        }

    render () { 
        return (
             <div> 
                <h1>欢迎来到{this.state.name}的世界</h1>
                <button> 
                    { 
                        this.state.isLiked ? '❤取消' : '🖤收藏' 
                    }
                </button> 
            </div> 
        )
    } 
}


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
