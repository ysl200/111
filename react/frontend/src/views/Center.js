import React from 'react'
import {HashRouter,Redirect,Route, Switch} from 'react-router-dom'

import My from './center/my'
export default function Center() {
    return (
        <HashRouter>
            <Switch>
              
                <Route path="/" render={()=>
                    localStorage.getItem("token")?
                    <My></My>:
                    <Redirect to="/login"/>
                }/>
            </Switch>
        </HashRouter>
    )
}