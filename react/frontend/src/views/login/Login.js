// import React from 'react'
// import axios from 'axios';
// import { Form, Button, Input, message} from 'antd'
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import './Login.css'
// export default function Login(props) {

//     const onFinish = (values) => {
//         console.log(values)

//         axios.get(`http://localhost:8000/users?username=${values.username}&password=${values.password}`).then(res=>{
//             console.log(res.data)
//             if(res.data.length===0){
//                 message.error("用户名或密码不匹配")
//             }else{
//                 localStorage.setItem("token",JSON.stringify(res.data[0]))
//                 props.history.push("/home")
//             }
//         })
//     }

//     return (
//         <div style={{ backgroundColor: "gray", height: "100%" }}>

//             <div className="formContainer">
//                 <div className="logintitle">终身学习平台</div>
//                 <Form
//                     name="normal_login"
//                     className="login-form"
//                     onFinish={onFinish}
//                 >
//                     <Form.Item
//                         name="username"
//                         rules={[{ required: true, message: 'Please input your Username!' }]}
//                     >
//                         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
//                     </Form.Item>
//                     <Form.Item
//                         name="password"
//                         rules={[{ required: true, message: 'Please input your Password!' }]}
//                     >
//                         <Input
//                             prefix={<LockOutlined className="site-form-item-icon" />}
//                             type="password"
//                             placeholder="Password"
//                         />
//                     </Form.Item>
//                     <Form.Item>
//                         <Button type="primary" htmlType="submit" className="login-form-button">
//                             登录
//                      </Button>
//                     </Form.Item>
//                 </Form>
//             </div>
//         </div>
//     )
// }


import React from "react";
import { Link} from "react-router-dom";
import "./Login.css"

const Login = () => {
    return (
        <div className="auth">
      <h1>登录</h1>
      <form>
        <input
          type="text"
          placeholder="用户名"
          name="username"
        />
        <input
          required
          type="password"
          placeholder="密码"
          name="password"
        />
        <button >登录</button>
        <span>
          未注册账号? <Link to="/register">注册</Link>
        </span>
      </form>
    </div>
    )
}

export default Login