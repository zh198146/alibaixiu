const userModel = require('../model/userModel')
exports.login = (req,res) => {
    // 接收参数
    // 业务处理--调用数据模块
    userModel.login(参数,回调函数)
    // 返回结果
}