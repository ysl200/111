import React from 'react'

import { Layout, Menu } from 'antd';
import CourseTitle from './course/CourseTitle';
import CourseContent from './course/CourseContent';


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

export default function Course() {

    return (
        <Layout>
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
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <CourseTitle />
        <CourseContent />
      </Content>
    </Layout>
    )
}