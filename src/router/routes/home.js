const home = [
    {
        path:"/home",
        name:"home",
        meta:{
            id:1,
            title:"主页",
            //如果后端返回是角色的话，那么这里需要存储，模块的授权对象
            authorization:[]

        },
        component:()=>import('@/views/home'),
        child:{
            path:"test",
            name:"hometest",
            component:()=>import('@/views/home'),
        }
    }
]

export default home
