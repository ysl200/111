// console.log("hello world")

import React from 'react'
import ReactDOM from 'react-dom'

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
                        className: 'title'},
                        "欢迎进入React的世界"
                ),
                React.createElement(
                    'p',
                    null,
                    "React.js是一个构建页面UI的库"
                )
            )
            )
    }
}

ReactDOM.render(
    React.cloneElement(App),
    document.getElementById('root')
)