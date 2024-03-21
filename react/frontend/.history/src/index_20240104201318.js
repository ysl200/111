
import React, {Component} from "react";
import { createRoot } from 'react-dom/client';

export default class App extends Component { 

    // 假设服务器端返回如下
    state={books:['巴黎圣母院','悲惨世界','爱的教育','简·爱','钢铁是怎样炼成的','安徒生童话']}

    booklist(){
        // 把服务器端返回的字符串数组转换为JSX数组
        let arr=[]
        for(let i=0; i<this.state.books.length; i++){
            arr.push( <li key={i}>《{this.state.books[i]}》</li> )
        }
        return arr
    }

    render() {
        return (
            <div>
                <ul>
                    {this.booklist()}
                </ul>
            </div>
        )
    }
}


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
