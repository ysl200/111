import React, { Component } from 'react'
import { HashRouter,Redirect,Route,Switch} from 'react-router-dom'
import Home from '../views/Home'
import Course from '../views/Course'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Login from '../views/login/Login'
import Register from '../views/login/Register'

function isAuth(){
    return localStorage.getItem("token")
}

// BrowserRouter 没有#的路径，好看 ，真正朝后端发请求要页面，后端没有对应的路径处理路径， 就会404， 不好看。
export default class IndexRouter extends Component {
    render() {
        return (
            <HashRouter>
                {this.props.children}
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/course" component={Course} />
                    <Route path="/center" render={()=>{
                        return isAuth()?<Center/>:<Redirect to="/login"/>
                    }}/>

                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                   {/* 精确匹配  exact */}
                    <Redirect from="/" to="/home" exact/>                  
                    <Route component={NotFound}/>
                </Switch>
                
            </HashRouter>
        )
    }
}