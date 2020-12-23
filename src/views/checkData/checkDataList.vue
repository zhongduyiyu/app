<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-21 15:05:31
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-23 18:06:20
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
                <div 
                class="reload"
                @click="setReloadStatus"
                >
                    <a-icon :type="reload?'loading':'loading-3-quarters'" /> <span>刷新</span>
                </div>
                <div class="fieldFilter">
                    <a-icon type="funnel-plot" /> <span>筛选字段</span>
                </div>
            </div>
        </div>
        <div class="table">
            <a-table :columns="columnConfig" :data-source="data" >
                <a slot="action"  href="javascript:;">action</a>
            </a-table>

        </div>
    </div>
</template>

<script>
import columnConfig from "@/systemConfig/dataTableConfig"
import {projectType,defaultCheckedType} from "@/systemEnum/projectType"
    export default {
        data(){
            return {
                reload:false,//控制加载图标
                defaultCheckedType,
                projectType,
                columnConfig,
                data:[
                        {
                            key: '1',
                            name: 'John Brown',
                            age: 32,
                            address: 'New York Park',
                        },
                        {
                            key: '2',
                            name: 'Jim Green',
                            age: 40,
                            address: 'London Park',
                        },
                        {
                            key: '2',
                            name: 'Jim Green',
                            age: 40,
                            address: 'London Park',
                        },
                    
                ]
            
            }
        },
        methods:{
            handleProjectTypeClick(typeName){
                this.defaultCheckedType = typeName
            },
            setReloadStatus(){
                this.reload = !this.reload
            },
            handleMenuClick(){
                
            },
            onSearch(){

            }
        }
    }
</script>

<style lang="less" scoped>
@import url("./checkDataList");
</style>