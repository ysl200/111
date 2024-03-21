import React from 'react'
import { Layout} from 'antd';
import { Switch,Route, Redirect } from 'react-router-dom'
import Credit from './credit'
import CourseList from './courseList'
import Collection from './collection'
import NotFound from '../NotFound'
import MyMessage from './myMessage'
import CreditBank from './creditBank'
import FriendCricle from './friendCricle'
import UserManage from './userManage'
// import AuditFc from '../center/friendCricle/auditFc'
// import AuditFcOk from '../center/friendCricle/auditFcOk'
// import Line from '../center/friendCricle/line'
// import PublishFc from '../center/friendCricle/publishFc'
// import userManage from './permissionManage/userManage'
// import rightManage from './permissionManage/rightManage';
import SideMenu from '../../components/my/SideMenu'
import TopHeader from '../../components/my/TopHeader'

import '../../css/my.css'

const { Content } = Layout;

export default function My() {
   
      return (
            <Layout className='center'>
                <SideMenu></SideMenu>
                <Layout className="site-layout">
                <TopHeader></TopHeader>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                <Switch>
                <Route path="/center/credit" component={Credit}/>
                <Route path="/center/courseList" component={CourseList}/>
                <Route path="/center/collection" component={Collection}/>
                <Route path="/center/mymessage" component={MyMessage}/>
                <Route path="/center/creditBank" component={CreditBank}/>
                <Route path="/center/friendCricle" component={FriendCricle}/>
                <Route path="/center/userManage" component={UserManage}/>
                {/* <Route path="/center/permissionManage/rightManage" component={rightManage}/>
                <Route path="/center/permissionManage/userManage" component={userManage}/>
                <Route path="/center/friendCricle/friendCricle" component={FriendCricle}/>
                <Route path="/center/friendCricle/auditFcOk" component={AuditFcOk}/>
                <Route path="/center/friendCricle/line" component={Line}/>
                <Route path="/center/friendCricle/publishFc" component={PublishFc}/>
                <Route path="/center/friendCricle/auditFc" component={AuditFc}/> */}
                <Redirect from="/center" to="/center/creditBank" exact/>
                <Route path="*" component={NotFound} />
                 </Switch>
            </Content>
            </Layout>
        </Layout>
      );
    }








// export default function My() {
//     return (
//         <div>
//            <SideMenu></SideMenu>
//            <TopHeader></TopHeader>

        //    <Switch>
        //         <Route path="/center/credit" component={Credit}/>
        //         <Route path="/center/courseList" component={CourseList}/>
        //         <Route path="/center/collection" component={Collection}/>
        //         <Route path="/center/mymessage" component={MyMessage}/>
               
        //         <Redirect from="/center" to="/center/courseList" exact/>
               
        //         <Route path="*" component={NotFound} />
        //     </Switch>
//         </div>
//     )
// }