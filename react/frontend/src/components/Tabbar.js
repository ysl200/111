
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'

export default class Tabbar extends Component {
    render() {
        return (
            <div>
                <ol>
                    <NavLink to="/home" activeClassName="active">首页</NavLink>
                    <NavLink to="/course" activeClassName="active">课程</NavLink>
                    <NavLink to="/center" activeClassName="active">我的</NavLink>  
                </ol>
            </div>
        )
    }
}
