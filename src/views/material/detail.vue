<template>
  <div>
    <PTable></PTable>
    <div>
      <div>{{ count }}</div>
      <el-button type="primary" size="default" @click="buttonClick"
        >CLICK</el-button
      >
    </div>
  </div>
</template>
<route>{meta: { bgColor:'#88f888'} }</route>

<script lang="ts" setup>
const { testClick } = testApi

const buttonClick = () => {
  const res = testClick(count.value)
  console.log(res)

  count.value = res
}
const count = ref(1)
</script>

<style lang="scss" scoped>
div {
  padding-top: 100px;
  text-align: center;
}
</style>
