<script setup lang="ts">
const route = useRoute();

const { data, pending, error, refresh } = useFetch('/api/getProduct', {
  query: { id: route.params.id },
});
</script>

<template>
  <h1>Product: {{ data.id }}</h1>
  <section>
    <article>
      <ProductCard :product="data" />
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
</style>
