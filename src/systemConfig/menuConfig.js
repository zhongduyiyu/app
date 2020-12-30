/*
 * @Description: menu参数
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-18 10:25:28
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-30 18:34:17
 */

const menuConfig={
    singleType:{
      list:[
        {
        key:"parentMenu1",
        parentName:"首页",
        //图标 类型为antd内置的icon type
        icon:"home",
        // key:"childMenu11",
        childName:"个人中心",
        path:"/dashBoard/personal"
        },
        {
          key:"parentMenu2",
          parentName:"数据检查",
          icon:"file-search",
          // key:"childMenu12",
          childName:"全部数据",
          path:"/dashBoard/checkDataList"
        },
        
    ]
    },
    multipleType:{
      type:1,
      list:[
        {
            key:"parentMenu3",
            parentName:"数据清理",
            icon:"filter",
            child:[
              {
                key:"childMenu13",
                childName:"儿子1",
                path:"/dashBoard/cleankData"
              },
              {
                key:"childMenu23",
                childName:"儿子2",
                path:"/dashBoard/cleankData"
              },
              {
                key:"childMenu33",
                childName:"儿子3",
                path:"/dashBoard/cleankData"
              },
            ]
          },
          {
            key:"parentMenu4",
            parentName:"配置报告",
            icon:"form",
            child:[
              {
                key:"childMenu14",
                childName:"儿子1",
                path:"/dashBoard/setForm"
              },
              {
                key:"childMenu24",
                childName:"儿子2",
                path:"/dashBoard/setForm"
              },
              {
                key:"childMenu34",
                childName:"儿子3",
                path:"/dashBoard/setForm"
              },
            ]
          },
          {
            key:"parentMenu5",
            parentName:"报告检查",
            icon:"check-square",
            child:[
              {
                key:"childMenu15",
                childName:"儿子1",
                path:"/dashBoard/checkForm"
              },
              {
                key:"childMenu25",
                childName:"儿子2",
                path:"/dashBoard/checkForm"
              },
              {
                key:"childMenu35",
                childName:"儿子3",
                path:"/dashBoard/checkForm"
              },
            ]
          },
          {
            key:"parentMenu6",
            parentName:"设置管理",
            icon:"setting",
            child:[
              {
                key:"childMenu16",
                childName:"儿子1",
                path:"/dashBoard/systemSetup"
              },
              {
                key:"childMenu26",
                childName:"儿子2",
                path:"/dashBoard/systemSetup"
              },
              {
                key:"childMenu36",
                childName:"儿子3",
                path:"/dashBoard/systemSetup"
              },
            ]
          },
      ]
    }
}

export default menuConfig