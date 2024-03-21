import React from 'react'
import { Card, Col, Row } from 'antd';

const {Meta} = Card
export default function Credit() {
    return (
        <Row gutter={16}>
    <Col span={8}>
    <Card
    style={{
      width: 200,
      height: 200
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="证书1" description="" style={{textAlign:"center"}}/>
  </Card>
    </Col>
    <Col span={8}>
    <Card
    style={{
      width: 200,
      height: 200
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="证书2" description="" style={{textAlign:"center"}}/>
  </Card>
    </Col>
    <Col span={8}>
    <Card
    style={{
      width: 200,
      height: 200
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="证书3" description="" style={{textAlign:"center"}}/>
  </Card>
    </Col>
  </Row>
    )
}