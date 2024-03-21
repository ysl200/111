import React from 'react'
import { Table} from 'antd'



export default function userManage() {
 
    const dataSource = [
        {
          key: '1',
          name: 'admin',
          role: '管理员',
          date: '2023.09.31',
        },
        {
          key: '2',
          name: '张三',
          role: '老师',
          date: '2024.02.11',
        },
        {
          key: '3',
          name: '李四',
          role: '老师',
          date: '2024.02.11',
        },
        {
          key: '4',
          name: '王五',
          role: '学生',
          date: '2024.02.11',
        },
        {
          key: '5',
          name: '赵六',
          role: '学生',
          date: '2024.02.11',
        }
      ];
      const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '角色',
          dataIndex: 'role',
          key: 'role',
        },
        {
          title: '注册时间',
          dataIndex: 'date',
          key: 'date',
        },
      ];
    
      
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} pagination={{
              hideOnSinglePage: false,
              defaultPageSize: 4,
            }}/>;
        </div>
    )
}