
import React, {Component} from "react";
import { createRoot } from 'react-dom/client';

export default class App extends Component { 

    state = {
        todos: []
      }
    
      onEnter = evt => {
        if (evt.keyCode === 13) {
          let title = evt.target.value.trim()
    
          // 方案1
          // let todos = this.state.todos.concat({ id: Date.now(), title, done: false })
          // this.setState({ todos })
    
          // 方案2
          // this.state.todos.push({ id: Date.now(), title, done: false })
          // this.forceUpdate() // 这里也可以写成这一句：this.setState({})
    
          // 如果你setState写了一个空对象，则它会更新视图一次
          // this.setState({})
          // 如果你写了为null,setState不会做任何事件，相当于没有调用
          // this.setState(null)
    
          // 方案3：更新数据，推荐，确保数据的完整性
          this.setState(state => ({
            todos: [...state.todos, { id: Date.now(), title, done: false }]
          }), () => evt.target.value = '')
        }
      }
      del = tid => () => {
        this.setState(state => ({
          todos: state.todos.filter(({ id }) => id != tid)
        }))
      }
    
      delIndex = index => () => {
        this.state.todos.splice(index, 1)
        this.setState({})
      }
    
      render() {
        return (
          <div>
            <div>
              <input type="text" onKeyUp={this.onEnter} />
            </div>
            <hr />
            <ul>
              {
                this.state.todos.map((item, index) => (
                  <li key={item.id}>
                    <span>{item.title}</span>
                    {/* 按 id 删除 */}
                    <span onClick={this.del(item.id)}>删除</span>
                    {/* 按索引删除 */}
                    <span onClick={this.delIndex(index)}>删除</span>
                  </li>
                ))
              }
            </ul>
          </div>
        );
      }
    }


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
