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




app.listen('8090', () => {
    console.log('监听端口 8090')
})