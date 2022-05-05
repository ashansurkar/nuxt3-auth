<template>
  <div class="app">
    <NuxtLink to="/about"> About </NuxtLink>
    <NuxtLink to="/"> Home </NuxtLink>
    <button v-if="isAuthenticated" @click="logout">Log out</button>
    <button v-else @click="login">Login</button>
    <div class="body">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup lang="ts">
import auth from "/authfile";
const isAuthenticated = await auth.isAuthenticated();
console.log("isAuthenticated app ", isAuthenticated);

const logout = async () => {
  await auth.logout({
    returnTo: window.location.origin,
  });
};
const login = async () => {
  await auth.loginWithRedirect();
};
</script>
<style>
* {
  font-size: 1.2rem;
}
.app {
  margin: 0 auto;
  text-align: center;
}
a {
  text-decoration: none;
  padding: 1rem;
  margin: 1rem;
  /* background-color: #2378ff; */
}
.body {
  margin: 5rem;
}
</style>
