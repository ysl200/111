import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useHistory} from "react-router-dom";
import "./Login.css"

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    userphone: "",
    password: "",
  });
  
  const [err, setError] = useState(null);
  const history = useHistory();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      history("/login");
    } catch (err) {
      setError(err.response.data);
    }
    
  };
    return (
        <div className="auth">
      <h1>注册</h1>
      <form>
        <input
          type="text"
          placeholder="用户名"
          name="username"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="手机号"
          name="userphone"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="密码"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>注册</button>
        {err && <p>{err}</p>}
        <span>
          已有账号？ <Link to="/login">登录</Link>
        </span>
      </form>
    </div>
    )
}

export default Register