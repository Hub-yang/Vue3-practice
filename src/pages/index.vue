<script setup lang='ts'>
const child = defineAsyncComponent(() => import('./child.vue'))
const count = ref(0)
setInterval(() => {
  count.value++
}, 1000)
</script>

<template>
  <child :count="count" />
</template>
