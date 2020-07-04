/*
 * @Description: 返回消息统一封装
 * @Version: 
 * @Author: liu
 * @Date: 2020-07-04 10:17:26
 */ 

 let responseBeautifier = new class{
    constructor(){
        this.response = {
            code:'',
            data:{},
            msg:''
        },
        this.StatusCode = new Map()
        this.registeStatusCode("0","success")
        this.registeStatusCode("-1","ERROR")
    }

    registeStatusCode(code, description){
        this.StatusCode.set(code, description)
    }

    registeStatusCodes(arr){
        for(let [code,description] of arr){
            this.StatusCode.set(code, description)
        }
    }

    set(data, code="0", msg){
        code = code.toString()
        if(this.StatusCode.has(code)){
            return {code, data, msg:this.StatusCode.get(code)}
        }else{
            return {
                code, data, msg:msg||"Unresolvable Status Code :" + code
            }
        }
    }

    err(code="-1",msg){
        code = code.toString()
        if(this.StatusCode.has(code)){
            return {
                code,data:{},msg:this.StatusCode.get(code)
            }
        }else{
            return {
                code,data:{},msg:msg||"Unresolvable Status Code :" + code
            }
        }
    }
 }()


 responseBeautifier.registeStatusCodes([
     ['404','NotFound'],
     ['201','success'],
     ['1','等待中'],
 ])

 module.exports = responseBeautifier;