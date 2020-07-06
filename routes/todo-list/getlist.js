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
router.post('/update', async (ctx, next) => {
    let data = ctx.request.body
    console.log('2222',data)
    //let body = await 
    let result = await Item.update({_id:data.id},{$set:{done:data.done}})
    // result(err, docs){
    //     console.log('err ',err, docs)
    //     if(err){
    //         ctx.body = R.set(err, 500)
    //     }
    //     ctx.body = R.set(docs)
    // }
    console.log(`result    `,result)
    ctx.body = R.set(result)
})
module.exports = router.routes()