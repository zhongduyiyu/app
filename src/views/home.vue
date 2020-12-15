<template>
    <div class="home">
        <Header />
        <div class="main">
        <LeftMenu />

        <GeminiScrollbar
        class="my-scroll-bar"
        forceGemini="true"
        >
        <div class="container">
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
              <a-breadcrumb>
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
                <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
                <a-breadcrumb-item>An Application</a-breadcrumb-item>
              </a-breadcrumb>
            <router-view />
        </div>
        </GeminiScrollbar>
        </div>
        <Footer />
    </div>
</template>

<script>
    import LeftMenu from "@/components/LeftMenu"
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    export default {
        components: {
            LeftMenu,
            Header,
            Footer
        },
    }
</script>

<style lang="less" scoped>
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
            .my-scroll-bar{
                height:200px;
                /* override gemini-scrollbar default styles */
                /* vertical scrollbar track */
                .gm-scrollbar.-vertical {
                background-color: #f0f0f0
                }
                
                /* horizontal scrollbar track */
                .gm-scrollbar.-horizontal {
                background-color: transparent;
                }
                
                /* scrollbar thumb */
                .gm-scrollbar .thumb {
                background-color: rebeccapurple;
                }
                .gm-scrollbar .thumb:hover {
                background-color: fuchsia;
                }
            }
            .container {
                height: 100%;
                flex:1;
                overflow-y: auto;
            }
        }
    
    }
</style>