<template>
    <div class="header">
        <div class="logo">
            <h3>MyCOS 麦克思</h3>
            <p>报告自动化系统</p>
        </div>
        <div class="userInfo">
            <a-avatar size="large" icon="user" style="background:#000;margin:0 20px;"/>
            <div class="userName">
            <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" 
                @click="e => e.preventDefault()"
                style="color:rgba(0, 0, 0, 0.65);"
                >
               测试用户 
               <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                <a-menu-item key="0">
                    <a href="">退出登录</a>
                </a-menu-item>
                <!-- <a-menu-item key="1">
                    <a href="http://www.taobao.com/">2nd menu item</a>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="3">
                    3rd menu item
                </a-menu-item> -->
                </a-menu>
            </a-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .header{
        width:100%;
        flex:0 0 80px;
        min-height: 80px;
        background-color: #ccc;
        display: flex;
        justify-content: space-between;
        .logo{
            width:200px;
            background: #00284d;
            color:#fff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            h3{
                margin: 0;
                padding: 0;
                color:#fff;
            }
            p{
                line-height: 0;
            }
        }
        .userInfo{
            display: flex;
            padding-right: 80px;
            align-items: center;
            .avatar{
                height:50px;
                width: 50px;
                background-color: #fff;
                border-radius: 25px;
                margin:0 20px;
            }
        }
    }
</style>

