const home = [
    {
        path:"/dashBoard",
        name:"index",
        meta:{
            id:1,
            title:"主页",
            //如果后端返回是角色的话，那么这里需要存储，模块的授权对象
            authorization:[]
        },
        component:()=>import('@/views/index'),
        redirect:"/dashBoard/personal",
        children:[
            {
            path:"/dashBoard/personal",
            name:"personal",
            component:()=>import('@/views/personal/personal'),
            },
            {
            path:"/dashBoard/checkData",
            name:"checkData",
            component:()=>import('@/views/checkData/checkData'),
            }
        ]
    }
]

export default home
