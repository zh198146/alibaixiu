// // 1.引入模块，搭建服务器
// const express = require('express');

// const app = express();

// const router =require('./router')

// // 2.端口监听
// app.listen(8080, () => {
//     console.log('http://127.0.0.1:8080')
// })

// // 3托管静态资源
// app.use('/assets', express.static('assets'))//数据
// app.use('/uploads', express.static('uploads'))//图片

// // 4.配置ejs模板
// app.set('view engine','ejs');
// // 配置默认目录
// app.set('views',__dirname+'/views');
// // // 路由模板
// // app.get('/', (req, res) => {

// //     res.render('admin')

// // })

// // app使用router管理
// app.use(router);




// 1.引入express
const express = require('express')
const router = require('./router')
// 2.创建服务器
const app = express()
// 3.添加端口监听
app.listen(3000,() => {
    console.log('http://127.0.0.1:3000')
})

// 5.托管静态资源
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))

// 6.配置ejs模板引擎
app.set('view engine','ejs')
// 下面这句代码是进行ejs模板文件查询的默认目录配置，下面这句代码写完之后，以后所有的ejs资源都会云指定的__dirname+"/views"
app.set('views',__dirname+"/views")

// 让app使用Router进行路由管理
app.use(router)
