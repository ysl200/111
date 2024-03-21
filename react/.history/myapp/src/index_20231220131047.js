// console.log("hello world")

import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client';

class App extends Component {
    // state = {
    //     name: 'React',
    //     isLiked: false
    // }
    constructor() {
        super()
        this.state = {
            name: 'React',
            isLiked: false
        }
    }
    handleBtnClick = () => {
        this.state({
            isLiked: !this.state.isLiked
        })
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
const root = createRoot(container);
root.render(<App />);