/*
 * @Description: 
 * @Version: 
 * @Author: liu
 * @Date: 2020-07-04 14:40:42
 */ 
const mongoose = require('mongoose')
const mongo = require('../config/mongo')
mongoose.Promise = global.Promise

const Schema = mongoose.Schema 
const ObjectId = mongoose.Types.ObjectId 

const itemSchema = new Schema({
    //_id:{type:ObjectId()},
    title:{type:String},
    content:{type:String, required:[true, '内容不能为空']},
    create_time:{type:Date, default:new Date()},
    done:{type:Boolean, default:false}
},{
    _id:true
})

const item = mongoose.model('item',itemSchema)

module.exports = item