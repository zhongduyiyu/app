<!--
 * @Description: 检查数据详情页
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2020-12-24 15:44:48
 * @LastEditors: MoXu
 * @LastEditTime: 2020-12-24 18:28:27
-->
<template>
    <div class="checkDataDetail">
        检查数据详情
    </div>
</template>

<script>
import{ getCheckDataDetail }from "@/api/getCheckDataDetail"
    export default {
        async created () {
            let {data} = await getCheckDataDetail();
            console.log(data);
        },
    }
</script>

<style lang="less" scoped>

</style>