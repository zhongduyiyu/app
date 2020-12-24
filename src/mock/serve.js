/*
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-16 14:23:29
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-24 18:26:18
 */
let express = require('express');   //引入express
let Mock = require('mockjs');       //引入mock
let cors = require('cors');
let app = express();        //实例化express

//解决跨域问题
app.use(cors());

/*接口模拟*/

//登录
app.use('/login',function(req, res){
    res.json(Mock.mock({
        'status': 200,
        'data':{
            'userName':"麦克思",
            'avater':"",
            'department':"数据部",
            'token': "h14262G34Zfa",
            'auth':[1,3,5]
        } 
    }))
})
//检查数据详情页面
app.use('/checkDataDetail',function(req, res){
    res.json(Mock.mock({
        'status': 200,
        'data':{
            schoolName:"哈尔滨佛学院",
            schoolNum:10010,
            year:2019,
            ipTotalNum:999,
            lastRefreshTime:"2021/01/01"
        } 
    }))
})




app.listen('8090', () => {
    console.log('监听端口 8090')
})