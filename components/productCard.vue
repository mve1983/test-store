<script setup lang="ts">
const props = defineProps<{
  product: Product;
}>();

const cartStore = useCartStore();

</script>

<template>
  <div class="product-wrapper">
    <h3 class="product-headline">{{ product.title }}</h3>
    <div class="product-details">
      <div class="product-descripton">
        <p>{{ product.description }}</p>
        <p>Category: {{ product.category }}</p>
        <p>
          Rating: {{ product.rating.rate }} / Ratings count:
          {{ product.rating.count }}
        </p>
        <button type="button" @click="cartStore.addItemToCart(product)">Add to cart</button>
      </div>
 <img :src="product.image" alt="product picture" class="product-picture" />
    </div>
    
  </div>
</template>

<style scoped>
h3 {
  margin: 0;
  padding: 0;
}

button {
  background-color: var(--main-bg-color);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  margin: 1rem 0 3rem 0;
  max-width: 10rem;
}

.product-wrapper {
  display: flex;
  flex-direction: column;
}

.product-details {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.product-descripton {
  display: flex;
  flex-direction: column;
}

.product-picture {
  width: clamp(4rem, 60vw, 16rem);
  box-shadow: 0.5rem 0.5rem 0.5rem var(--main-bg-color);
  border-radius: 0.5rem;
}
</style>
