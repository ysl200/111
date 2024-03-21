import React, {Component} from "react";
import axios from "axios";
import { Card, List } from 'antd';

export default class Mooc extends Component {
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
                mcList:res.data,
                // bakmcList:res.data   
            })}).catch(err=>{
            console.log(err)
        })
    }
    
    render() {
        return (   
           
        <div>
           
            <List
                pagination={{
                    hideOnSinglePage:true,
                    disabled:false,
                    defaultPageSize: 12,
                    position:"bottom"
                }}
                grid={{
                gutter: 20,
                column: 4,
                xs:1,
                sm:2,
                md:2,
                lg:3
                }}
                size="small"
                dataSource={this.state.mcList}
                renderItem={(item) => (
              
                
                
                    // <List.Item>
                    //     <a href={item.site} target="_blank" rel="noreferrer">   
                    //     {this.getMcList().map(item=>
                        
                    //          <Card
                    //          hoverable
                    //          style={{ width:"200"
                    //                  }}
                    //          cover={<img alt="content" src={item.imgUrl} referrerPolicy="no-referrer"/>}
                    //      >
                    //      <Meta title={item.course_name} />
                    //      </Card>
                    //     )       
                    //  }
                    // </a>
                        
                    // </List.Item>
                    
                
                <List.Item>
                        <a href={item.site} target="_blank" rel="noreferrer">
                            {/* <Card
                                hoverable
                                style={{
                                        width:"270",
                                        height:"200"
                                    }}
                                cover={<img alt="content" src={item.imgUrl} referrerPolicy="no-referrer"/>}
                            >
                            <Meta title={item.course_name} />
                            </Card> */}
                            <Card 
                            hoverable
                            style={{
                                width: "270",
                                height: "200"
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

    getMcList(){
        return this.state.mcList.filter(item=>item.course_name.toUpperCase().includes(this.state.mytext.toUpperCase()) || 
        item.course_name.toUpperCase().includes(this.state.mytext.toUpperCase())
        )
    }
}