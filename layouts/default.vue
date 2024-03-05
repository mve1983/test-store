<script setup lang="ts">
const cartStore = useCartStore();
onMounted(() => {
  cartStore.checkLocaleStorage();
});
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main><slot /></main>
  <footer></footer>
</template>

<style scoped></style>
