<!--
 * @Description: 刷新按钮  数据渲染完成后 将stopLoading赋值为true
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-24 15:06:23
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-24 15:36:07
-->

<template>
    <div
    class="reload"
    @click="setReloadStatus"
    >
        <a-icon 
        :type="reload?'loading':'loading-3-quarters'" 
        :style="reload?'color:#1890ff':'color:'" 
        /> <span>刷新</span>
            
    </div>
</template>

<script>
    export default {
        props: {
            stopLoading: {
                default: false
            },
        },
        data(){
            return{
                reload:false
            }
        },
        methods: {
            setReloadStatus(){
                this.reload = true
            }
        },
        watch: {
            stopLoading(newValue, oldValue) {
                if(this.stopLoading){
                    this.reload = false
                }
            }
        },
    }
</script>

<style lang="less" scoped>
            .reload{
                user-select: none;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 32px;
                width: 80px;
                border: 1px solid #d9d9d9;
                border-radius: 4px;
                cursor: pointer;
                &:hover{
                    color:#1890ff;
                    border: 1px solid #1890ff;
                }
                span{
                    margin-left:10px;
                }
            }
</style>