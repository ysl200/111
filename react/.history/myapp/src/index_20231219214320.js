// console.log("hello world")

import React from 'react'
// import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client';

class App extends React.Component {
    render () {
        return (
            React.createElement(
                "div",
                {
                    className: 'app',
                    id: 'appRoot'
                },
                React.createElement(
                    "h1",
                    {
                        className: 'title',
                      
                    },
                        "欢迎进入React的世界"
                ),
                React.createElement(
                    'p',
                    null,
                    "React.js是一个构建页面UI的库"
                )
                React.createElement(
                    <p style={{color:'red'}}> hello</p>
                )
            )
            )
    }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);