/*
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-16 14:23:29
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-29 10:04:58
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
//分配任务的用户数据
app.use('/getUserList',function(req, res){
    res.json(Mock.mock({
        'status': 200,
        'data':[{
            category:"数据分析部",
            id:1,
            list:[
            {
            category:"第一组",
            id:11,
                list:[
                {userName:"张三",userId:"11"},
                {userName:"李四",userId:"12"},
                {userName:"王五",userId:"13"},
                {userName:"赵六",userId:"14"},
                {userName:"钱八",userId:"15"},
                ]
            },
            {
            category:"第二组",
            id:12,
                list:[
                {userName:"张三2",userId:"21"},
                {userName:"李四2",userId:"22"},
                {userName:"王五2",userId:"23"},
                {userName:"赵六2",userId:"24"},
                {userName:"钱八2",userId:"25"},
                ]
            },
            ]
        },]   
    }))
})




app.listen('8090', () => {
    console.log('监听端口 8090')
})