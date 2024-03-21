//配置数据库和路由
const mysql = require('mysql');
const dotenv = require('dotenv').config();

const express = require('express');
const colors = require('colors')
// const dotenv = require('dotenv').config()
const app = express();
const PORT = 5003;

//定义课程列表
const wyy_courses = [];

// const {errorHandler} = require('./middleware/errorMiddleware')


// 创建数据库连接
// 直接使用root账户
const connection = mysql.createConnection({
    host: 'localhost',
    post: '3306',
    user: 'root',
    password: '123456',
    database: 'test'
  });
  
  // 连接到数据库
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return;
    }
    // 控制台输出连接id号
    console.log('Connected to MySQL database as id ' + connection.threadId);
    connection.end();
  });
  
    connection.query('SELECT name, site, imgURL FROM wy_list', (error, results, fields) => {
        if (error) {
          console.error('Error querying database: ' + error.stack);
          return;
        }
      //将查询到的课程信息保存到wyy_courses[]中
      //测试将课程数量改为30
      for (let i = 200; i < 230; i++) {
          const row = results[i];
        //   console.log(row.site);
          data = {};
          data['_id'] = i+1;
          data["course_name"] = row.name;
          data["imgUrl"] = row.imgURL;
          data["site"] = row.site;
          wyy_courses.push(data);
        }
      });

const cors = require('cors');

data = {
    _id: "",
    course_name: "",
    category: "",
    imgUrl:"",
    site:""
  };
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// 处理 GET /api/courses/ 请求，返回所有课程数据
app.get('/api/courses/', (req, res) => {
  res.json(wyy_courses);
});

// 处理 GET /api/courses/:id 请求，返回指定ID的课程数据
app.get('/api/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = wyy_courses.find(c => c.id === courseId);



  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ error: 'Course not found' });
  }
});


//访问根目录打印 hello World
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
    


