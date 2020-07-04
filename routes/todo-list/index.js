/*
 * @Description: 
 * @Version: 
 * @Author: liu
 * @Date: 2020-07-03 14:08:00
 */ 
const Router = require('koa-router')

const router = new Router()

router.use('/todolist',require('./getlist'))


module.exports = router.routes()