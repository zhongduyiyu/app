<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-21 15:05:31
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-24 18:15:55
-->
<template>
    <div class="checkDataList">
        <div class="listHeader">
            <span
            v-for="item in projectType"
            :key="item"
            :class="['projectTypeList',{active:item==defaultCheckedType}]"
            @click="handleProjectTypeClick(item)"
            >{{item}}</span>
        </div>
        <div class="filter">
            <div class="left">
                <div>
                    <span class="planStatus">任务状态：</span>
                    <a-dropdown 
                    :trigger="['click']"
                    >
                    <a-menu slot="overlay" @click="handleMenuClick">
                        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
                        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
                        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
                    </a-menu>
                    <a-button style="margin-left: 8px"> 全部 <a-icon type="down" /> </a-button>
                    </a-dropdown>
                </div>
                <div>
                    <span class="schoolName">学校名称/编码：</span>
                    <a-input-search placeholder="请输入学校名称或编码" style="width: 200px" @search="onSearch" />
                    
                </div>
            </div>
            <div class="right">
                
                <ui-reload :stopLoading ="stopLoading"/>
                
                <ui-select-wrapper>
                    <a-checkbox>
                        Checkbox1s
                    </a-checkbox>
                    <a-checkbox>
                        Checkbox1s
                    </a-checkbox>
                    <a-checkbox>
                        Checkbox1s
                    </a-checkbox>
                </ui-select-wrapper>
            </div>
        </div>
        <div class="table">
            <a-table 
            :columns="columnConfig" 
            :data-source="data" 
            :customRow="rowClick"
            >
                <a slot="action"
                v-for="item in tableAction"
                :key="item.id"
                @click="handleTableActionClick(item.id)"
                >{{item.name}}</a>
               
            </a-table>

        </div>
    </div>
</template>

<script>
import columnConfig from "@/systemConfig/dataTableConfig"
import {projectType,defaultCheckedType} from "@/systemEnum/projectType"
import uiSelectWrapper from "@/components/UI/ui-select-wrapper"
import uiReload from "@/components/UI/ui-reload"
    export default {
        components: {
            'ui-select-wrapper':uiSelectWrapper,
            'ui-reload':uiReload,
        },
 
        data(){
            return {
                stopLoading:false,//赋值为true 暂停图标
                push:false,//触发跳转
                defaultCheckedType,
                projectType,
                columnConfig,
                showFieldFilterList:false,
                currentRowData:{},
                tableAction:[
                    {
                        name:"详情",
                        id:"detail"
                    },
                    {
                        name:"分配任务",
                        id:"taskAssign"
                    },
                    {
                        name:"标记为未检查",
                        id:"markAsNoCheck"
                    },
                    {
                        name:"再次赋权",
                        id:"givePermissionAgain"
                    },
                    ],
                data:[
                        {
                            key: '1',
                            name: 'John Brown',
                            age: 32,
                            address: 'New York Park',
                            id:1213123
                        },
                        {
                            key: '2',
                            name: 'Jim Green',
                            age: 40,
                            address: 'London Park',
                            id:1213123
                        },
                        {
                            key: '3',
                            name: 'Jim Green',
                            age: 40,
                            address: 'London Park',
                            id:1213123
                        },
                        {
                            key: '4',
                            name: 'Jim Green',
                            age: 40,
                            address: 'London Park',
                            id:1213123
                        },
                    
                ]
            
            }
        },
        methods:{
            rowClick(record, index){
                return {
                    on: {
                    click: () => {
                        this.currentRowData=record
                        if(this.push){
                            this.$router.push(`/dashBoard/checkDataDetail?id=${this.currentRowData.id}`)
                        }
                    }
                    }
                }
            },
            handleProjectTypeClick(typeName){
                this.defaultCheckedType = typeName
            },
          
            handleTableActionClick(actionId){
                switch (actionId) {
                    case "detail":this.push = true
                    break;
                    case "taskAssign":console.log("taskAssign");
                    break;
                    case "markAsNoCheck":console.log("markAsNoCheck");
                    break;
                    case "givePermissionAgain":console.log("givePermissionAgain");
                    break;             
                    default:
                        break;
                }
            },
            handleMenuClick(){},
            onSearch(){}
        }
    }
</script>

<style lang="less" scoped>
@import url("./checkDataList");
</style>