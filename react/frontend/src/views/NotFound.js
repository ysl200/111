import React from 'react'
import { Button, Result } from 'antd';

export default function NotFound() {
    return (
        <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary"><a href='http://localhost:3000/#/home'>返回首页</a></Button>}
      />
    )
}
