import React from 'react'
import Logo from './home/logo'
import MoocCourseRecommond from './home/moocCourseRecommond'
import TxCourseRecommond from './home/txCourseRecommond'
import WyyCourseRecommond from './home/wyyCourseRecommond'
import Navibar from './home/Navibar'
import {Layout, Menu, Space, Input} from 'antd';

import '../css/home-logo.css'

const labels = [
    <a href='http://localhost:3000/#/home'>首页</a>, 
    <a href='http://localhost:3000/#/course'>课程</a>, 
    <a href='http://localhost:3000/#/center/friendCricle'>朋友圈</a>, 
    <a href='http://localhost:3000/#/center/creditBank'>学分银行</a>, 
    <a href='http://localhost:3000/#/center'>我的</a>
    ];

const { Header, Content} = Layout;
const items = new Array(5).fill(null).map((_, index) => ({
  key: index + 1,
  label: labels[index],
}));

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);  

export default function Home() {

    return (
        <Layout className='home'>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          
        }}
      >
        <div className="home-logo"><a href='http://localhost:3000/#/home'>终身学习</a></div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />

          <Space direction="vertical" style={{marginTop: "30px"}}>
                <Search
                  placeholder="input search text"
                  allowClear
                  onSearch={onSearch}
                  style={{
                      width: 200,
                  }}
                /> 
          </Space> 
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <div style={{
          margin:30
        }}></div>
       
             <Logo />
             <MoocCourseRecommond />
             <TxCourseRecommond />
             <WyyCourseRecommond />
             <Navibar />
      </Content>
      {/* <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
        </Layout>
    )
}