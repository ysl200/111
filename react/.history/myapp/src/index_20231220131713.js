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
        this.setState({
            isLiked: !this.state.isLiked
            
        })
        console.log('click')
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

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
//     )

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);