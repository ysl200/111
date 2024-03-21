import React from 'react'
import { Descriptions } from 'antd';

const items = [
    {
      key: '1',
      label: '用户名',
      children: 'Zhou Maomao',
    },
    {
      key: '2',
      label: '电话号码',
      children: '1810000000',
    },
    {
      key: '3',
      label: '定位',
      children: 'Hangzhou, Zhejiang',
    },
    {
      key: '4',
      label: 'Remark',
      children: 'empty',
    },
    {
      key: '5',
      label: 'Address',
      children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    },
  ];

export default function MyMessage() {
    return (
        <Descriptions title="个人信息" items={items} />
    )
}