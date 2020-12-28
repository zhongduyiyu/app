<!--
 * @Description: 
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-21 15:05:31
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-28 18:34:39
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
            >
                <span slot="action" slot-scope="text, record"
                >
                    <a @click="handlePush(record.id)">详情</a>

                    <a @click="handleTaskAssign"
                    v-if="record.projectStatus=='待分配'"
                    > 分配任务 </a>
                    <a 
                    v-if="record.projectStatus=='已分配'||record.projectStatus=='已检查'"
                    @click="handleMark(record.projectStatus,record.id)">
                    标记为{{record.projectStatus=="已检查"?"未检查":"已检查"}} </a>
                    
                    <a
                    v-if="record.projectStatus=='已分配'||record.projectStatus=='已检查'"
                    @click="handleGivePermissionAgain">再次赋权</a>
                </span>
            </a-table>
            
        <a-modal 
        v-model="showModal" 
        :title="modalInfo.title"
        ok-text="确认" cancel-text="取消"
        >
            <!-- <a-checkbox-group
            @change="handleTaskAssignUserCheck"
            v-if="userList.length>0"
            >   
            <p>第一组</p>
                <a-checkbox 
                v-for="item in userList"
                :key="item.userId"
                :value="item.userId">
                {{item.userName}}
                </a-checkbox>
            </a-checkbox-group> -->
            <!-- 这个地方需要更改成树结构，看原型图 -->

             <a-tree-select
                show-search
                style="width: 100%"
                :value="value"
                :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                placeholder="Please select"
                allow-clear
                multiple
                tree-default-expand-all
                @change="onChange"
   
            >
                <a-tree-select-node key="0-1" value="parent 1" title="parent 1">
                <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
                    <a-tree-select-node key="random" value="leaf1" title="my leaf" />
                    <a-tree-select-node key="random1" value="leaf2" title="your leaf" />
                </a-tree-select-node>
                <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
                    <a-tree-select-node key="random3" value="sss">
                    <b slot="title" style="color: #08c">sss</b>
                    </a-tree-select-node>
                </a-tree-select-node>
                </a-tree-select-node>
            </a-tree-select>
             
        </a-modal>
        </div>

    </div>
</template>

<script>
import columnConfig from "@/systemConfig/dataTableConfig"
import {projectType,defaultCheckedType} from "@/systemEnum/projectType"
import uiSelectWrapper from "@/components/UI/ui-select-wrapper"
import uiReload from "@/components/UI/ui-reload"
//接口
import {getUserList} from "@/api/getUserList"
    export default {
        components: {
            'ui-select-wrapper':uiSelectWrapper,
            'ui-reload':uiReload,
        },
 
        data(){
            return {
                value:undefined,//test
                stopLoading:false,//赋值为true 暂停图标
                push:false,//触发跳转
                showModal:false,//模态框的显示与否
                defaultCheckedType,
                projectType,
                columnConfig,
                modalInfo:{},//模态框信息
                userList:[],
                data:[
                         {
                            key: '1',
                            projectStatus: "调查中",
                            projectName:"2020年短期1",
                            projectType:"短期",
                            currentYear:"2020",
                            schoolName:"哈佛",
                            level:"本科",
                            from:"admin",
                            allotTime:"2021/01/01",
                            updateTime:"2021/01/01",
                            id:1
                        },
                        {
                            key: '2',
                            projectStatus: "待分配",
                            projectName:"2020年短期1",
                            projectType:"短期",
                            currentYear:"2020",
                            schoolName:"哈佛",
                            level:"本科",
                            from:"admin",
                            allotTime:"2021/01/01",
                            updateTime:"2021/01/01",
                            id:12
                        },
                         {
                            key: '3',
                            projectStatus: "已分配",
                            projectName:"2020年短期1",
                            projectType:"短期",
                            currentYear:"2020",
                            schoolName:"哈佛",
                            level:"本科",
                            from:"admin",
                            allotTime:"2021/01/01",
                            updateTime:"2021/01/01",
                            id:121
                        },
                         {
                            key: '4',
                            projectStatus: "已检查",
                            projectName:"2020年短期1",
                            projectType:"短期",
                            currentYear:"2020",
                            schoolName:"哈佛",
                            level:"本科",
                            from:"admin",
                            allotTime:"2021/01/01",
                            updateTime:"2021/01/01",
                            id:1213
                        },                   
                ],
            
            }
        },
        methods:{
            onChange(value){
                this.value=value
            },
            handleProjectTypeClick(typeName){
                this.defaultCheckedType = typeName
            },
            handleMenuClick(){},
            onSearch(){},
            isShowModal(modalInfo){
                this.modalInfo = modalInfo//把当前点击对象的信息给到模态框
                this.showModal = true
            },
            handlePush(id){
                 this.$router.push(`/dashBoard/checkDataDetail?id=${id}`)
            },
            async handleTaskAssign(){
                this.isShowModal({id:"taskAssign",title:"分配任务"})
                //获取用户列表
                let res = await getUserList({})
                this.userList = res.data.data 
            },
            handleMark(status,id){
                if(status=="已检查"){

                }
                //问题，标记未未检查后的状态是什么？
                //发起请求，标记成功后，直接修改本地数据，并不需要重复请求完整数据
            },
            handleGivePermissionAgain(){
                this.isShowModal({id:"givePermissionAgain",title:"再次赋权"})
            },
            handleTaskAssignUserCheck(checkedValues){
                console.log('checked = ', checkedValues);
            }

        }
    }
</script>

<style lang="less" scoped>
@import url("./checkDataList");
</style>