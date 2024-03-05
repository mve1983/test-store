<script setup lang="ts">
const { data, pending, error, refresh } = useFetch('/api/getProducts');
onMounted
</script>

<template>
  <h1>Hello Products</h1>
  <div>{{ data }}</div>
</template>

<style scoped></style>
