// const express = require('express')

// // 引入页面返回控制器
// const pagesController = require('./controllers/pagesController')
// const userController = require('./controllers/userController')
// var router = express.Router()
// // 前台
// router.get('/', pagesController.getIndexPage)
//     .get('/list', pagesController.getListPage)
//     .get('/detail', pagesController.getDetailPage)



//     // 后台
//     .get('/admin', pagesController.getAdminIndexPage)
//     .get('/admin/categories', pagesController.getCategoriesPage)
//     .get('/admin/comments', pagesController.getCommentsPage)
//     .get('/admin/index', pagesController.getIndexPage)
//     .get('/admin/login', pagesController.getLoginPage)
//     .get('/admin/nav-menus', pagesController.getNavmenusPage)
//     .get('/admin/password-reset', pagesController.getPasswordresetPage)
//     .get('/admin/post-add', pagesController.getPostaddPage)
//     .get('/admin/posts', pagesController.getPostsPage)
//     .get('/admin/profile', pagesController.getnProfilePage)
//     .get('/admin/settings', pagesController.getnSettingsPage)
//     .get('/admin/slides', pagesController.getnSlidesPage)
//     .get('/admin/users', pagesController.getUsersPage)
//     // 业务
//     .post('/login', userController.login)
// // 暴露
// module.exports = router


const express = require('express')

// 引入页面返回控制器
const pagesController = require('./controllers/pagesController.js')
const userController = require('./controllers/userController.js')
var router = express.Router()

// 配置路由
// 路由中间件的回调函数，不是我们自己调用的，而是服务器响应请求时进行调用的
// 在调用的时候，会给这个回调函数传入两个参数：req,res
// 后台页面
router.get('/admin',pagesController.getAdminIndexPage)
      .get('/admin/categories',pagesController.getAdminCategoriesPage)
      .get('/admin/login',pagesController.getAdminLoginPage)
      .get('/admin/comments',pagesController.getAdminCommentsPage)
      .get('/admin/nav-menus',pagesController.getAdminNavMenusPage)
      .get('/admin/password-reset',pagesController.getAdminPasswordResetPage)
      .get('/admin/post-add',pagesController.getAdminPostAddPage)
      .get('/admin/posts',pagesController.getAdminPostsPage)
      .get('/admin/profile',pagesController.getAdminProfilePage)
      .get('/admin/slides',pagesController.getAdminSlidesPage)
      .get('/admin/settings',pagesController.getAdminSettingsPage)
      .get('/admin/users',pagesController.getAdminUsersPage)

// 前台页面
      .get('/',pagesController.getIndexPage)
      .get('/list',pagesController.getListPage)
      .get('/detail',pagesController.getDetailPage)

      // 业务处理路由
      .post('/login',userController.login)

// 暴露
module.exports = router