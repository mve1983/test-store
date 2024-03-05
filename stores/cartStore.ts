interface CartProduct extends Product {
  amount: number;
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartProduct[]>([]);
  const totalItemsInCart = ref(0);

  function addItemToCart(product: Product) {
    const existingItem =
      items.value.filter((i: CartProduct) => i.id === product.id)[0] || null;

    if (!existingItem) return items.value.push({ ...product, amount: 1 });

    existingItem.amount = existingItem.amount + 1;
    items.value = items.value.filter((i: CartProduct) => i.id !== product.id);
    items.value.push(existingItem);
  }

  function checkLocaleStorage() {
    const locaeStorageCart =
      JSON.parse(localStorage.getItem('test-cart')) || null;
    if (locaeStorageCart && items.value.length === 0) {
      items.value = locaeStorageCart;
    }
  }

  watch(
    () => items,
    (_newValue, _oldValue) => {
      const amounts = items.value?.map((i: CartProduct) => i.amount);
      totalItemsInCart.value = amounts.reduce((acc, curr) => acc + curr, 0);

      items.value.length
        ? localStorage.setItem('test-cart', JSON.stringify(items.value))
        : null;
    },
    { deep: true }
  );

  return { items, addItemToCart, totalItemsInCart, checkLocaleStorage };
});
