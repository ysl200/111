
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    state = {
        name: 'React',
        isLiked: false
    }

    handleBtnClick = () => {
        this.setState({
        isLiked: !this.state.isLiked
        })
    }

    render () {
        return (
            <div>
                    <h1>欢迎来到{this.state.name}的世界</h1>
                <button onClick={this.handleBtnClick}>
                {
                    this.state.isLiked ? '❤取消' : '🖤收藏'
                }
                </button>
            </div>
            )
    }
}
ReactDOM.render(
<App/>,
document.getElementById('root')
)
