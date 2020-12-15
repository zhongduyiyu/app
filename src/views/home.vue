<template>
    <div class="home">
        <Header />
        <div class="main">
        <LeftMenu />
        <div
        v-bar="{
            preventParentScroll: true,
            scrollThrottle: 30,
        }">
        <div class="container" >
          <a-breadcrumb>
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
                <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
                <a-breadcrumb-item>An Application</a-breadcrumb-item>
          </a-breadcrumb>
          
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>

            <router-view />
        </div>
        </div>

        </div>
        <Footer />
    </div>
</template>

<script>
    import LeftMenu from "@/components/LeftMenu"
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import "@/globalCss/scrollBar.less"
    export default {
        components: {
            LeftMenu,
            Header,
            Footer
        },
        
    };
</script>

<style lang="less" scope>
    .home{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .main{
            height:100%;
            display: flex;
            // flex:1;
            overflow-y: auto;
            .container {
                width: 100%;
                height: 100%;
                flex:1;
                overflow-y: auto;
            }
        }
    }

    
    
    
</style>