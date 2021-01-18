/*
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-16 09:20:56
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-18 18:38:00
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全局引入antCss文件 --上线前需按需引入
import 'ant-design-vue/dist/antd.css'
//全局引入antd核心文件
import Antd from "ant-design-vue"

//引入quill富文本编辑器
import QuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'
//注入Vue-quill-editor
Vue.use(QuillEditor)

//滚动条
import vuescroll from 'vuescroll';
Vue.use(vuescroll, {
  ops: {}, // 在这里设置全局默认配置
});
//开启dev模式
Vue.config.productionTip = true
//注入antd
Vue.use(Antd)

//引入表格插件
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
VXETable.setup({
  // size: null, // 全局尺寸
  // zIndex: 100, // 全局 zIndex 起始值，如果项目的的 z-index 样式值过大时就需要跟随设置更大，避免被遮挡
  // version: 0, // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据
  // table: {
  //   showHeader: true,
  //   keepSource: false,
  //   delayHover: 250,
  //   showOverflow: null,
  //   showHeaderOverflow: null,
  //   showFooterOverflow: null,
  //   size: null,
  //   resizable: false,
  //   autoResize: false,
  //   stripe: false,
  //   border: false,
  //   round: false,
  //   radioConfig: {
  //     trigger: 'default'
  //   },
  //   checkboxConfig: {
  //     strict: false,
  //     highlight: false,
  //     range: false,
  //     trigger: 'default'
  //   },
  //   sortConfig: {
  //     remote: false,
  //     trigger: 'default',
  //     orders: ['asc', 'desc', null],
  //     sortMethod: null
  //   },
  //   filterConfig: {
  //     remote: false,
  //     filterMethod: null
  //   },
  //   expandConfig: {
  //     trigger: 'default',
  //     showIcon: true
  //   },
  //   treeConfig: {
  //     children: 'children',
  //     hasChild: 'hasChild',
  //     indent: 20,
  //     showIcon: true
  //   },
  //   tooltipConfig: {
  //     theme: 'dark',
  //     enterable: false
  //   },
  //   menuConfig: {
  //     visibleMethod () {}
  //   },
  //   rowId: '_XID', // 行数据的唯一主键字段名
  //   editConfig: {
  //     mode: 'cell',
  //     showAsterisk: true
  //   },
  //   importConfig: {
  //     modes: ['insert', 'covering']
  //   },
  //   exportConfig: {
  //     modes: ['current', 'selected']
  //   },
  //   customConfig: {
  //    storage: false
  //   },
    scrollX: {
      enabled: false
    },
  //   scrollY: {
  //     gt: 100
  //   }
  // },
  // grid: {
  //   size: null,
  //   zoomConfig: {
  //     escRestore: true
  //   },
  //   pagerConfig: {
  //     perfect: false
  //   },
  //   toolbarConfig: {
  //     perfect: false
  //   },
  //   proxyConfig: {
  //     autoLoad: true,
  //     message: true,
  //     props: {
  //       list: null, // 用于列表，读取响应数据
  //       result: 'result', // 用于分页，读取响应数据
  //       total: 'page.total' // 用于分页，读取总条数
  //     }
  //     beforeItem: null,
  //     beforeColumn: null,
  //     beforeQuery: null,
  //     afterQuery: null,
  //     beforeDelete: null,
  //     afterDelete: null,
  //     beforeSave: null,
  //     afterSave: null
  //   }
  // },
  // pager: {
  //   size: null,
  //   autoHidden: false,
  //   perfect: true,
  //   pageSize: 10,
  //   pagerCount: 7,
  //   pageSizes: [10, 15, 20, 50, 100],
  //   layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']
  // },
  // form: {
  //   preventSubmit: false
  //   validConfig: {
  //     autoPos: true
  //   },
  //   size: null,
  //   colon: false,
  //   titleAsterisk: true
  // },
  // input: {
  //   size: null,
  //   transfer: false
  //   parseFormat: 'yyyy-MM-dd HH:mm:ss.SSS',
  //   labelFormat: '',
  //   valueFormat: '',
  //   startWeek: 1,
  //   digits: 2,
  //   controls: true
  // },
  // textarea: {
  //   size: null
  //   autosize: {
  //     minRows: 1,
  //     maxRows: 10
  //   }
  // },
  // select: {
  //   size: null,
  //   transfer: false,
  //   multiCharOverflow: 8
  // },
  // toolbar: {
  //   size: null,
  //   import: {
  //     mode: 'covering'
  //   },
  //   export: {
  //     types: ['csv', 'html', 'xml', 'txt']
  //   },
  //   custom: {
  //     isFooter: true
  //   },
  //   buttons: []
  // },
  // button: {
  //   size: null,
  //   transfer: false
  // },
  // radio: {
  //   size: null
  // },
  // checkbox: {
  //   size: null
  // },
  // switch: {
  //   size: null
  // },
  // modal: {
  //   // size: null,
  //   minWidth: 340,
  //   minHeight: 200,
  //   lockView: true,
  //   mask: true,
  //   duration: 3000,
  //   marginSize: 0,
  //   dblclickZoom: true,
  //   showTitleOverflow: true
  //   storage: false
  // },
  // list: {
  //   scrollY: {
  //     gt: 100
  //   }
  // }
})

Vue.use(VXETable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
