/*
 * @Description: 
 * @Version: 
 * @Author: liu
 * @Date: 2020-07-04 13:54:28
 */ 
const mongoose = require('mongoose').set('debug', true)
const options = {
    autoReconnect:true,
    useNewUrlParser: true
}

const url = 'mongodb://todolist:wolaile1986A@www.bl1000.cn:27017/todolist'

module.exports = {
    connect:() => {
        mongoose.connect(url, options)
        let db = mongoose.connection 
        db.on('error', console.error.bind(console, '链接错误'))
        db.once('open',() => {
            console.log('db connect success')
        })
    }
}