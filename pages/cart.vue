<script setup lang="ts">
const cartStore = useCartStore()

onMounted(()=> console.log(cartStore.items))
</script>

<template>
<h1>Products in cart</h1>
  <section>
    <article v-for="(product, index) in cartStore.items" :key="product.id">
      <ProductCard :product="product" />
      <hr v-if="index !== data.length - 1" />
    </article>
  </section>

</template>

<style scoped></style>