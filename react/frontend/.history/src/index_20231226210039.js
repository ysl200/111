
import React, { Component } from 'react'
import ReactDOM from 'react-dom'


const people = [{
    id: 1,
    name: 'Leo',
    age: 35
    }, {
    id: 2,
    name: 'XiaoMing',
    age: 16
    }]


class App extends Component {
    state = {
        name: 'React',
        isLiked: false
    }


    handleBtnClick = () => {
        this.setState((prevState, props) => {
            return {
            isLiked: !prevState.isLiked
            }
            }, () => {
            console.log('回调里的',this.state.isLiked)
            })
            console.log('setState外部的',this.state.isLiked)
           
    }

    render () {
        return (
            <div>
                    <h1 style={{color:"red"}}>欢迎来到{this.state.name}的世界</h1>
                <button onClick={this.handleBtnClick}>
                {
                    this.state.isLiked ? '❤取消' : '🖤收藏'
                }
                </button>
                {people.map(person => {
                    return (
                    <dl key={person.id}>
                    <dt>{person.name}</dt>
                    <dd>age: {person.age}</dd>
                    </dl>
                    )
                })}

            </div>
            )
    }
}
ReactDOM.render(
<App/>,
document.getElementById('root')
)
