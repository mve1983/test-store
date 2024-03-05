<script setup lang="ts">
const { data, pending, error, refresh } = useFetch('/api/getProducts');
</script>

<template>
  <h1>Products in store</h1>
  <section>
    <article v-for="(product, index) in data" :key="product.id">
      <ProductCard :product="product" />
      <hr v-if="index !== data.length - 1" />
    </article>
  </section>
</template>

<style scoped>
h1 {
  background-color: var(--main-bg-color);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 0.5rem 0.5rem 0.5rem var(--main-bg-color);
}

hr {
  padding: 0.3rem;
  border: none;
  background-color: var(--main-bg-color);
  margin: 2rem 0;
  border-radius: 0.5rem;
  box-shadow: 0.5rem 0.5rem 0.5rem var(--main-bg-color);
}

</style>
