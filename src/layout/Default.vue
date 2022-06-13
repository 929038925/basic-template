<template>
  <div class="outer-box" :style="`background: ${bgColor};`">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
const bgColor = useRouter().currentRoute.value.meta.bgColor
</script>

<style scoped lang="scss">
.outer-box {
  width: 100%;
  height: 100%;
  background-color: rgb(223, 223, 223);
}
</style>
