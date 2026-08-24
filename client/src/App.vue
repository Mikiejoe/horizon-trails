<template>
  <div id="app">
      
      <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from './stores/authStore';

const authStore = useAuthStore();

onMounted(async () => {
  if (authStore.token && !authStore.user) {
    await authStore.fetchCurrentUser();
  }
});
</script>

<style>
/* Global CSS Resets & Fallbacks */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>