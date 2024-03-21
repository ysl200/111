import React from 'react'
import { Card, Col, Row } from 'antd';

const {Meta} = Card

export default function CollectionList() {
    return (
        <Row gutter={16}>
    <Col span={6}>
    <Card
    style={{
      width: 200,
      height: 200
    }} hoverable={true}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="课程1" description="" style={{textAlign:"center"}}/>
  </Card>
    </Col>
    <Col span={6}>
    <Card
    style={{
      width: 200,
      height: 200
    }} hoverable={true}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="课程1" description="" style={{textAlign:"center"}}/>
  </Card>
    </Col>
    <Col span={6}>
    <Card
    style={{
      width: 200,
      height: 200
    }} hoverable={true}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="课程2" description="" style={{textAlign:"center"}}/>
  </Card>
    </Col>
    <Col span={6}>
    <Card
    style={{
      width: 200,
      height: 200
    }} hoverable={true}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="课程3" description="" style={{textAlign:"center"}}/>
  </Card>
    </Col>
  </Row>
    )
}