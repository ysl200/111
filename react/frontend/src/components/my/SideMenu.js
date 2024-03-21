import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import {withRouter} from 'react-router-dom';
import '../../css/logo.css';
import axios from 'axios';
import {
 
  } from '@ant-design/icons';
const {  Sider } = Layout;
const { SubMenu } = Menu;

function SideMenu(props) {

  const [meun, setMeun] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/rights?_embed=children").then(res=>{
      // console.log(res.data)
      setMeun(res.data)
    })
  },[])

  const checkPagePermission = (item)=>{
    return item.pagepermisson
  }

  const renderMenu = (menuList)=>{
    return menuList.map(item=>{
      if(item.children?.length>0 && checkPagePermission(item)){
        return <SubMenu key={item.key} icon={item.key} title={item.title}>
           { renderMenu(item.children) }
        </SubMenu>
      }

      return checkPagePermission(item) && <Menu.Item key={item.key} onClick={()=>{
        //  console.log(props)
        props.history.push(item.key)
      }}>{item.title}</Menu.Item>
    })
  }

  const selectKeys = [props.location.pathname]
  const openKeys = ["/"+props.location.pathname.split("/")[1]]

    return (
        <Sider trigger={null} collapsible collapsed={false} >
          <div className="logo" ><a href='http://localhost:3000/#/home'>终身学习</a></div>
          <Menu theme="dark" mode="inline" selectedKeys={selectKeys} className="aaaaaaa" defaultOpenKeys={openKeys}>
              {renderMenu(meun)}
          </Menu>
        </Sider>
    )
}

export default withRouter(SideMenu)