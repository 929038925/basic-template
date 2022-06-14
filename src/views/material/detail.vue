<template>
<div>
<PTable></PTable>
<div>
  <el-button type="primary" size="default" @click="testClick()">CLICK</el-button>
  
</div>
</div>
</template>
<route>{meta: { bgColor:'#88f888'} }</route>

<script lang='ts' setup>
const {testClick} = testApi

</script>

<style lang='scss' scoped>
div{
  padding-top: 100px;
  text-align: center;
}
</style>