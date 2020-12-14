<template>
    <div class="home">
        <LeftMenu/>
        
    </div>
</template>

<script>
    import LeftMenu from "../components/LeftMenu"
    export default {
        components: {
            LeftMenu,
        },
    }
</script>

<style lang="less" scoped>
    .home{
        height: 100%;
        display: flex;
    
    }
</style>