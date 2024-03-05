<script setup lang="ts">
const cartStore = useCartStore();

const totalPrice = computed(() => {
  const allTotals = cartStore.items?.map((i: CartProduct) => i.price*i.amount) || null;
  return allTotals?.reduce((acc, curr) => acc + curr, 0).toFixed(2) || 0;
})

</script>

<template>
  <h1>Products in cart</h1>
  <section>
    <article v-for="(product, index) in cartStore.items" :key="product.id">
      <div class="cart-item">
        <ProductCard :product="product" />
        <div class="cart-price">
          <p>Single price:<br />EUR {{ product.price }}</p>
          <p>x {{ product.amount }}</p>
          <p>
            Price:<br />EUR {{ product.price * product.amount }}
          </p>
        </div>
      </div>
      <hr v-if="index !== cartStore.items.length - 1" />
     </article>
    <p class="total-price">Total Price: EUR {{ totalPrice }}</p>
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

.cart-item {
  display: flex;
}

.cart-price {
  min-width: 10rem;
  padding-top: 3rem;
  font-size: var(--text-bigger);
  font-weight: 600;
  text-align: right;
}

.total-price {
  font-weight: 700;
  font-size: var(--text-biggest);
  text-align: right;
  margin-top: 3rem;
}
</style>
