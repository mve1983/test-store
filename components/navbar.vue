<script setup lang="ts">
const windowWidth = ref(0);
const nav = ref<HTMLElement | null>(null);
const burgerMenuOpen = ref(false);
let resizeObserver: ResizeObserver;

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
  <h2>Test Store</h2>
  <nav ref="nav">
    <div v-if="windowWidth > 720">
      <ul>
        <li>
          <NuxtLink class="nav-link" to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/products">Products</NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/cart">Cart</NuxtLink>
        </li>
      </ul>
    </div>
    <div v-else>
      <button type="button" @click="toggleBurgerMenu">
        <img src="/svg/menu.svg" alt="burger menu button" width="30" height="auto" />
      </button>
      <ul v-if="burgerMenuOpen" class="burger-menu-ul">
        <li>
          <NuxtLink class="nav-link" to="/" @click="toggleBurgerMenu">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/products" @click="toggleBurgerMenu">Products</NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/cart" @click="toggleBurgerMenu">Cart</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
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
