const menuConfig = [
    {
      key:"parentMenu1",
      parentName:"主页",
      child:[
        {
          key:"childMenu11",
          childName:"个人中心",
          path:"/dashBoard/personal"
        },


      ]
    },
    {
      key:"parentMenu2",
      parentName:"数据检查",
      child:[
       {
          key:"childMenu12",
          childName:"儿子1",
          path:"/dashBoard/checkData"
        },
        {
          key:"childMenu22",
          childName:"儿子1",
          path:"/dashBoard/checkData"
        },
        {
          key:"childMenu32",
          childName:"儿子1",
          path:"/dashBoard/checkData"
        },

      ]
    },
    {
      key:"parentMenu3",
      parentName:"数据清理",
      child:[
        {
          key:"childMenu13",
          childName:"儿子1",
        },
        {
          key:"childMenu23",
          childName:"儿子2",
        },
        {
          key:"childMenu33",
          childName:"儿子3",
        },
      ]
    },
  ]

  export default menuConfig