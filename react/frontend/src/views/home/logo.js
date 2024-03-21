import React from 'react'
import { Button, Popover, ConfigProvider, Carousel} from 'antd';


const contentStyle = {
    margin: 0,
    marginLeft: "auto",
    marginRight: "auto",
    height: '200px',
    width: "500px",
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  
  const buttonWidth = 100;

export default function Logo() {
    return (
        <span 
          style={{display: "flex"}}
        >
          
          <ConfigProvider
            button={{
              style: { width: buttonWidth, margin: 2},
            }}
            
          >   
            <div className="demo" 
                style={{ marginLeft: "auto", marginRight: "4px"}}
            >
            
            <div style={{ width: buttonWidth, marginTop: "10px"}}>
                <Popover placement="leftTop" content={content}>
                    <Button>认证学习</Button>
                </Popover>
                <Popover placement="left" content={content}>
                    <Button>计算机</Button>
                </Popover>
                <Popover placement="leftBottom" content={content}>
                    <Button>外语</Button>
                </Popover>
                <Popover placement="leftBottom" content={content}>
                    <Button>理学</Button>
                </Popover>
                <Popover placement="leftBottom" content={content}>
                    <Button>工学</Button>
                </Popover>
               
            </div>
          
          </div>
          </ConfigProvider>
        
          <Carousel speed={300} style={{
            width: "500px",
            height: "200px",
            // margin: "auto",
          }}>
              <div>
                <h3 style={contentStyle}>MOOC</h3>
              </div>
              <div>
                <h3 style={contentStyle}>腾讯课堂</h3>
              </div>
              <div>
                <h3 style={contentStyle}>网易云课堂</h3>
              </div>
          </Carousel>
        
          
          <ConfigProvider
              button={{
                style: { width: buttonWidth, margin: 2 },
              }}
          >
            <div className="demo" 
                style={{marginRight: "auto"}}
            >
              
            <div style={{ width: buttonWidth, marginTop: "10px"}}>
                <Popover placement="rightTop" content={content}>
                    <Button>考研</Button>
                </Popover>
                <Popover placement="right" content={content}>
                    <Button>期末突击</Button>
                </Popover>
                <Popover placement="rightBottom" content={content}>
                    <Button>专升本</Button>
                </Popover>
                <Popover placement="rightBottom" content={content}>
                    <Button>职场</Button>
                </Popover>
                <Popover placement="rightBottom" content={content}>
                    <Button>设计</Button>
                </Popover>
          </div>
        
        </div>
          </ConfigProvider>

        </span>
    )
}




