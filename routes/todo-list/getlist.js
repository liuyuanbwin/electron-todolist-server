/*
 * @Description: 
 * @Version: 
 * @Author: liu
 * @Date: 2020-07-03 14:09:11
 */ 
const Router = require('koa-router')
const R =  require('../../tools/responseBeautifier')
const Item = require('../../models/todoItem')
const router = new Router()

router.get('/', async ctx => {
    let result = await Item.find({})
    ctx.body = R.set(result)
})
router.post('/add',async (ctx, next) => {
    let data = ctx.request.body
    let body = await Item.create(data) 
    ctx.body = R.set(body)
})
module.exports = router.routes()