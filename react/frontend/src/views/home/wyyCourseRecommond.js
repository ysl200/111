
import React, {Component} from 'react';
import axios from "axios";
import { Card, List} from 'antd';




export default class WyyCourseRecommond extends Component {
  constructor(){
    super()     
    this.state = {
        mcList:[],
        mytext:""
    }
    axios({
        url:"http://localhost:5003/api/courses/",
        headers:{    
        }
    }).then(res=>{
        this.setState({
            mcList:res.data.slice(0,15) 
        })}).catch(err=>{
        console.log(err)
    })
}

render() {
  return(
    <div>
      <div style={{marginBottom: "15px"}}><h3>网易云课堂课程推荐</h3></div>
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
                  dataSource={this.state.mcList}
                  renderItem={(item) => (
                
                <List.Item>
                  <a href={item.site} target="_blank" rel="noreferrer">
                  <Card 
                            hoverable
                            style={{
                                width: "270",
                                height: "200",
                                padding:"20"
                            }}
                            cover={<img alt="content" src={item.imgUrl} referrerPolicy="no-referrer"/>}>
                                {item.course_name}
                            </Card>
                    </a>
                </List.Item>
                )}
            />
    </div>
  )
}

}