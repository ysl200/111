
import React, {Component} from "react";
import { createRoot } from 'react-dom/client';

export default class App extends Component { 

    state = {
        carts: [
          { id: 1, name: '水果手机14', price: 1, num: 1 },
          { id: 2, name: '大米手机14', price: 1, num: 2 },
          { id: 3, name: '一般手机14', price: 1, num: 3 },
        ]
      }
      setNum = (n, index) => {
        // 方案1
        this.state.carts[index]['num'] += n
        if (this.state.carts[index]['num'] <= 1) this.state.carts[index]['num'] = 1
        if (this.state.carts[index]['num'] >= 5) this.state.carts[index]['num'] = 5
        this.setState({})
    
        // 方案2
        // this.setState(state => {
        //   state.carts[index]['num'] += n
        //   let carts = state.carts
        //   return { carts }// 同等于 return {carts:carts}
        // })
      }
    
      totalPrice = () => {
        return this.state.carts.reduce((p, c) => {
          p += c.num * c.price
          return p
        }, 0)
      }
    
      render() {
        return (
          <div>
            <table width='600' border='1'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>名称</th>
                  <th>价格</th>
                  <th>数量</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.carts.map((item, index) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <button onClick={() => this.setNum(-1, index)}>---</button>
                        <span>{item.num}</span>
                        <button onClick={() => this.setNum(1, index)}>+++</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <hr />
            <h3>{this.totalPrice()}</h3>
          </div>
        );
      }
    }


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
