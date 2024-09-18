<script setup lang='ts'>
interface Poprs {
  count: number
}
const { count } = defineProps<Poprs>()
</script>

<template>
  <div>{{ count }}</div>
</template>
