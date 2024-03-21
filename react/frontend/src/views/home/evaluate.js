
import React from 'react';
import { Card, List } from 'antd';

const data = [
  {
    title: <Card
    hoverable
    style={{
      width: 270,
      height: 200
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  </Card>,
    description: "课程描述1"
  },
  {
    title: <Card
    hoverable
    style={{
      width: 270,
      height: 200
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  </Card>,
  description: "课程描述2"
  },
  {
    title: <Card
    hoverable
    style={{
      width: 270,
      height: 200
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  </Card>,
  description: "课程描述3"
  },
  {
    title: <Card
    hoverable
    style={{
      width: 270,
      height: 200
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  </Card>,
  description: "课程描述4"
  },
  {
    title: <Card
    hoverable
    style={{
      width: 270,
      height: 200
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  </Card>,
  description: "课程描述5"
  },
  {
    title: <Card
    hoverable
    style={{
      width: 270,
      height: 200
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  </Card>,
  description: "课程描述6"
  },
  {
    title: <Card
    hoverable
    style={{
      width: 270,
      height: 200
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  </Card>,
  description: "课程描述7"
  },
  {
    title: <Card
    hoverable
    style={{
      width: 270,
      height: 200
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  </Card>,
  description: "课程描述8"
  },
  {
    title: <Card
    hoverable
    style={{
      width: 270,
      height: 200
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  </Card>,
  description: "课程描述9"
  },
  {
    title: <Card
    hoverable
    style={{
      width: 270,
      height: 200
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  </Card>,
  description: "课程描述10"
  },
  {
    title: <Card
    hoverable
    style={{
      width: 270,
      height: 200
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  </Card>,
  description: "课程描述11"
  },
];
export default function Evaluate(){
    return (
        <div style={{margin:"20px"}}> 
            <div style={{marginBottom: "15px"}}><h3>精选直播</h3></div>
            <List 
                pagination={{
                      defaultPageSize: 5,
                      position: 'bottom'
                      }}
                grid={{
                      gutter: 20,
                      column: 5,
                      xs:1,
                      sm:2,
                      md:2,
                      lg:3
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={item.title}>{item.description}</Card>
                    </List.Item> 
                    )}
            />
        </div>
    )
    
}

