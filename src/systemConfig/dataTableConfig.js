/*
 * @Description: 数据清理与检查数据的table的表头配置
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-23 17:52:58
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-23 17:57:04
 */

const columnConfig = [
    { title: '任务状态',  width: 100,dataIndex: 'name', key: 'name' },
    { title: '项目名称',  dataIndex: 'age', key: 'age' },
    { title: '项目类型', dataIndex: 'address', key: '1' },
    { title: '当前届次/学年', width: 140,dataIndex: 'address', key: '2' },
    { title: '学校名称', dataIndex: 'address', key: '3' },
    { title: '学历层次', width: 150,dataIndex: 'address', key: '4' },
    { title: '分配人', width: 100,dataIndex: 'address', key: '5' },
    { title: '分配时间', width: 130,dataIndex: 'address', key: '6' },
    { title: '更新时间', width: 130,dataIndex: 'address', key: '7' },  
    {
        title: '操作',
        key: 'operation',
        width: 250,
        scopedSlots: { customRender: 'action' },
    },
    ]

export default columnConfig