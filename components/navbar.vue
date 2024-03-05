<script setup lang="ts">
const windowWidth = ref(0);
const nav = ref<HTMLElement | null>(null);
const burgerMenuOpen = ref(false);
let resizeObserver: ResizeObserver;

const cartStore = useCartStore();
const route = useRoute();

function toggleBurgerMenu() {
  burgerMenuOpen.value = !burgerMenuOpen.value;
}

onMounted(() => {
  resizeObserver = new ResizeObserver((entries) => {
    if (!entries[0]?.borderBoxSize[0]?.inlineSize) return;
    windowWidth.value = entries[0]?.borderBoxSize[0]?.inlineSize;
  });

  resizeObserver.observe(nav.value);
});

onBeforeUnmount(() => resizeObserver.disconnect());
</script>

<template>
  <nav ref="nav">
    <div v-if="windowWidth > 720">
      <ul>
        <li>
          <NuxtLink
            class="nav-link"
            :class="route.path === '/' ? 'active' : null"
            to="/"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="nav-link"
            :class="route.path === '/products' ? 'active' : null"
            to="/products"
            >Products</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="nav-link"
            :class="route.path === '/cart' ? 'active' : null"
            to="/cart"
            >Cart<span>{{ cartStore.totalItemsInCart }}</span></NuxtLink
          >
        </li>
      </ul>
    </div>
    <div v-else>
      <button type="button" @click="toggleBurgerMenu">
        <img
          src="/svg/menu.svg"
          alt="burger menu button"
          width="30"
          height="auto"
        />
      </button>
      <ul v-if="burgerMenuOpen" class="burger-menu-ul">
        <li>
          <NuxtLink
            class="nav-link"
            :class="route.path === '/' ? 'active' : null"
            to="/"
            @click="toggleBurgerMenu"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="nav-link"
            :class="route.path === '/products' ? 'active' : null"
            to="/products"
            @click="toggleBurgerMenu"
            >Products</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="nav-link"
            :class="route.path === '/cart' ? 'active' : null"
            to="/cart"
            @click="toggleBurgerMenu"
            >Cart<span>{{ cartStore.totalItemsInCart }}</span></NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
button {
  position: absolute;
  top: 0.5rem;
  right: 2rem;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: var(--main-bg-color);
  height: 3rem;
  display: grid;
  place-items: left;
}

ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
}

span {
  width: 1rem;
  height: 1rem;

  border-radius: 9999px;
}

.burger-menu-ul {
  position: absolute;
  top: 3rem;
  right: 0;
  background-color: var(--main-bg-color);
  animation: bluronstart 0.5s ease-in-out;
  height: 9rem;
  min-width: 30%;
  border-radius: 0 0 0.5rem 0.5rem;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-right: 1rem;
}

.nav-link {
  font-size: var(--text-bigger);
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
}

.nav-link:hover,
.nav-link:active {
  background-color: var(--main-text-color);
  color: var(--main-bg-color);
  text-shadow: 1px 1px var(--main-text-color);
}

.active {
  background-color: var(--main-text-color);
  color: var(--main-bg-color);
  text-shadow: 1px 1px var(--main-text-color);
}

@media only screen and (min-width: 720px) {
  nav {
    display: grid;
    place-items: center;
  }

  ul {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>
