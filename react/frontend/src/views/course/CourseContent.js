import React, {Component} from 'react'

import Mooc from '../../course_list/Mooc'
import Tx from '../../course_list/Tx'
import Wy from  '../../course_list/Wyy'


export default class CourseContent extends Component {

    

    which(){
        switch (this.props.index){
            case 0:
                return <Mooc></Mooc>
            case 1:
                return <Tx></Tx>
                 
            case 2:
                return <Wy></Wy>

            default:
                return null
        }
    }


    render() {
        console.log('index value:', this.props.index)
        return (
            <div style={{
                height:"auto"
            }}>
                 {
                this.which()
               }
             
            </div>
//             <List
//             pagination={{
//                 hideOnSinglePage:true,
//                 disabled:false,
//                 defaultPageSize: 5,
//                 position:"bottom"
//             }}
//     grid={{
//       gutter: 16,
//       xs: 1,
//       sm: 2,
//       md: 4,
//       lg: 4,
//       xl: 6,
//       xxl: 3,
//     }}
//     dataSource={data}
//     renderItem={(item) => (
//       <List.Item>
//         <Card title={item.title}>Card content</Card>
//       </List.Item>
//     )}
//   />
        )
    }
    
}