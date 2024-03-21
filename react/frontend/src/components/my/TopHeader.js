import React from 'react'
import { Layout, Menu, Dropdown, Avatar} from 'antd';
import {
    // MenuUnfoldOutlined,
    // MenuFoldOutlined,
    UserOutlined
  } from '@ant-design/icons';
  import {withRouter} from 'react-router-dom'
const { Header } = Layout;

function TopHeader(props) {
    // const [collapsed, setCollapsed] = useState(false)
    // const changeCollapsed = () => {
    //     setCollapsed(!collapsed)
    // }
    const menu = (
        <Menu>
            <Menu.Item >
                <a href='http://localhost:3000/#/center/courseList'>我的课程</a>
            </Menu.Item>
            <Menu.Item>
            <a href='http://localhost:3000/#/center/collection'>我的收藏</a>
            </Menu.Item>
            <Menu.Item>
            <a href='http://localhost:3000/#/center/creditBank'>学分银行</a>
            </Menu.Item>
            <Menu.Item>
            <a href='http://localhost:3000/#/center/credit'>我的证书</a>
            </Menu.Item>
            <Menu.Item danger onClick={()=>{
                localStorage.removeItem("token")
                props.history.replace("/login")
            }}>退出</Menu.Item>
        </Menu>
    );
    return (
        <Header className="site-layout-background" style={{ padding: '0 16px', height:'55px', backgroundColor:'white'}}>
            {/* {
                collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} /> : <MenuFoldOutlined onClick={changeCollapsed} />
            } */}

            <div style={{ float: "right" }}>
                <span style={{margin:"10px"}}>欢迎回来</span>
                <Dropdown overlay={menu}>
                    <Avatar icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    )
}

export default withRouter(TopHeader)
