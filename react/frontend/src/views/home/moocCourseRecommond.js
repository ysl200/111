
import React, {Component} from 'react';
import axios from "axios";
import { Card, List} from 'antd';




export default class MoocCourseRecommond extends Component {
  constructor(){
    super()     
    this.state = {
        mcList:[],
        mytext:""
    }
    axios({
        url:"http://localhost:5000/api/courses/",
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
      <div style={{marginBottom: "15px"}}><h3>MOOC课程推荐</h3></div>
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


// const data = [
//   {
//     title: <Card
//     hoverable
//     style={{
//       width: 270,
//       height: 200
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//   </Card>,
//     description: "课程描述1"
//   },
//   {
//     title: <Card
//     hoverable
//     style={{
//       width: 270,
//       height: 200
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//   </Card>,
//   description: "课程描述2"
//   },
//   {
//     title: <Card
//     hoverable
//     style={{
//       width: 270,
//       height: 200
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//   </Card>,
//   description: "课程描述3"
//   },
//   {
//     title: <Card
//     hoverable
//     style={{
//       width: 270,
//       height: 200
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//   </Card>,
//   description: "课程描述4"
//   },
//   {
//     title: <Card
//     hoverable
//     style={{
//       width: 270,
//       height: 200
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//   </Card>,
//   description: "课程描述5"
//   },
//   {
//     title: <Card
//     hoverable
//     style={{
//       width: 270,
//       height: 200
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//   </Card>,
//   description: "课程描述6"
//   },
//   {
//     title: <Card
//     hoverable
//     style={{
//       width: 270,
//       height: 200
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//   </Card>,
//   description: "课程描述7"
//   },
//   {
//     title: <Card
//     hoverable
//     style={{
//       width: 270,
//       height: 200
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//   </Card>,
//   description: "课程描述8"
//   },
//   {
//     title: <Card
//     hoverable
//     style={{
//       width: 270,
//       height: 200
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//   </Card>,
//   description: "课程描述9"
//   },
//   {
//     title: <Card
//     hoverable
//     style={{
//       width: 270,
//       height: 200
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//   </Card>,
//   description: "课程描述10"
//   },
//   {
//     title: <Card
//     hoverable
//     style={{
//       width: 270,
//       height: 200
//     }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//   </Card>,
//   description: "课程描述11"
//   },
// ];
// export default function CourseRecommond(){
//     return (
//         <div style={{margin:"20px"}}> 
//             <div style={{marginBottom: "15px"}}><h3>课程推荐</h3></div>
//             <List 
//                   pagination={{
//                       defaultPageSize: 5,
//                       position: 'bottom'
//                   }}
//                   grid={{
//                           gutter: 20,
//                           column: 5,
//                           xs:1,
//                           sm:2,
//                           md:2,
//                           lg:3
//                   }}
//                   dataSource={data}
//                   renderItem={(item) => (
                
//                 <List.Item>
//                     <Card title={item.title}>
//                         {item.description} 
//                         <div><h5 style={{display:'inline'}}>课程评价</h5> <Rate /> </div>  
//                     </Card>
//                 </List.Item>
//                 )}
//             />
//         </div>
//     )
    
// }

