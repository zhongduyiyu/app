const home = [
    {
        path:"/home",
        name:"home",
        component:()=>import('@/views/home'),
        child:{
            path:"test",
            name:"hometest",
            component:()=>import('@/views/home'),
        }
    }
]

export default home
