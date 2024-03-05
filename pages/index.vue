<script setup lang="ts">
// as per FakeStoreApi Docs
// username: "mor_2314",
// password: "83r5^_"

const userName = ref('');
const password = ref('');

async function login() {
  const newBody = {
    username: userName.value,
    password: password.value,
  };

  try {
    const response = await $fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: 'mor_2314',
        password: '83r5^_',
      }),
    });
    console.log(response);
  } catch (error) {
    // TODO: implement error handling
    console.log(error);
  }
}
</script>

<template>
  <h1>Welcome to Test Store</h1>
  <section>
    <form>
      <label for="user">Username:</label>
      <input type="text" v-model="userName" />
      <label for="password">Password:</label>
      <input type="password" v-model="password" />
      <button @click.prevent="login()">Login</button>
    </form>
  </section>
</template>

<style scoped>
h1 {
  background-color: var(--main-bg-color);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 0.5rem 0.5rem 0.5rem var(--main-bg-color);
}

form {
  display: flex;
  flex-direction: column;
  max-width: 20rem;
}
</style>
