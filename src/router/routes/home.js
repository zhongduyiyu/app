/*
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-14 09:47:42
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-24 16:06:20
 */
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
            path:"/dashBoard/checkDataList",
            name:"checkDataList",
            component:()=>import('@/views/checkData/checkDataList'),
            },
            {
            path:"/dashBoard/checkDataDetail",
            name:"checkDataDetail",
            component:()=>import('@/views/checkData/checkDataDetail')
            },
        ]
    }
]

export default home
