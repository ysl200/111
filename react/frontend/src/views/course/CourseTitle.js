
import React, { Component } from 'react';
import {Col, Row} from 'antd';
import CourseContent from './CourseContent';
import '../../css/course.css';

export default class CourseTitle extends Component {
    state = {
        list:[
            {
                id:1,
                text:"慕课"
            },
            {
                id:2,
                text:"腾讯课堂"
            },
            {
                id:3,
                text:"网易云课堂"
            },
            {
                id:4,
                text:"123课堂"
            },
        ],
        current:0,
        isshow:false
        }
    
    // which(){
    //     switch (this.state.current){
    //         case 0:
    //             return <Mooc></Mooc>
    //         case 1:
    //             return <Tx></Tx>
                 
    //         case 2:
    //             return <Wy></Wy>

    //         default:
    //             return null
    //     }
    // }

    render() {
        return (
            
            <div>
               {/* {
                this.which()
               } */}
                <Row style={{
                    height: "50px",
                    textAlign: "center",
                    lineHeight: "45px"
                }}>
                    {
                        this.state.list.map( (item,index)=>
                        <Col span={6} key={item.id} className={this.state.current=== index? 'active':''} onClick={()=>this.handleClick(index)}>{item.text}</Col>    
                        )
                    }
                </Row>
                <CourseContent index = {this.state.current} />
            </div>)
    }

    handleClick(index){
        // console.log(index)

        this.setState({
            current:index
        })
    }
}






