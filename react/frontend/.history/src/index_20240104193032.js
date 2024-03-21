import React, { Component } from "react";
import { createRoot } from 'react-dom/client';


class TodoList extends Component {
    render() {
        return (
            <div>
                <input type="text" />

                {/* ：如果逻辑过不多，此写法推荐 */}
                {/* 可以直接访问this，无需手动绑定 */}
                <button onClick={()=>{ 
                     console.log(0)
                     console.log(this)
                }}>add</button>

                {/* ：此写法不推荐 */}
                {/* 不可以直接访问this，需手动绑定 --  .bind(this)*/}
                <button onClick={this.handelClick.bind(this)}>add2</button>

                {/* ：此写法推荐 */}
                {/* 可以直接访问this，无需手动绑定,handelClick2是箭头函数，可以绑定外部this ：此写法推荐 */}
                <button onClick={this.handelClick2}>add3</button>

                {/* ：此写法比较推荐，传参数很方便 */}
                {/* 可以直接访问this，无需手动绑定,onClick调用的是箭头函数，可以绑定外部this */}
                <button onClick={(e)=> this.handelClick3(e)}>add4</button>
            </div>
        );
    }

    handelClick () {
        console.log(1)
        console.log(this)
    }

    // 箭头函数 
    handelClick2 = (evt) => {
        console.log(2)
        console.log(this)

        // 打印 Event 对象
        console.log(evt)
    }

    // 箭头函数 
    handelClick3 = (evt) => {
        console.log(3)

        // 打印 Event 对象
        console.log(evt)
    }
}

export default TodoList;

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<TodoList />);
