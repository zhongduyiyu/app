const state = {
    menuList:[
        {
          key:"parentMenu1",
          parentName:"菜单一",
          child:[
            {
              key:"childMenu11",
              childName:"儿子1",
            },
            {
              key:"childMenu21",
              childName:"儿子2",
            },
            {
              key:"childMenu31",
              childName:"儿子3",
            },

          ]
        },
        {
          key:"parentMenu2",
          parentName:"菜单二",
          child:[
           {
              key:"childMenu12",
              childName:"儿子1",
            },
            {
              key:"childMenu22",
              childName:"儿子2",
            },
            {
              key:"childMenu32",
              childName:"儿子3",
            },

          ]
        },
        {
          key:"parentMenu3",
          parentName:"菜单三",
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
}
const getters = {

}

const mutations = {

}
//用来管理mutations
const actions = {

}

export default {
state,
getters,
mutations,
actions
}