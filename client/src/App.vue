<template>
  <div id="app">
      
      <RouterView />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PublicLayout from './layouts/PublicLayout.vue';
import AdminLayout from './layouts/AdminLayout.vue';
import { useAuthStore } from './stores/authStore';

const route = useRoute();
const authStore = useAuthStore();

// Map route meta names to layout components
const layouts: Record<string, typeof PublicLayout> = {
  public: PublicLayout,
  admin: AdminLayout,
};

// Fall back to PublicLayout if none specified on the route
const layout = computed(() => {
  const layoutName = (route.meta.layout as string) || 'public';
  return layouts[layoutName] || PublicLayout;
});

// Rehydrate user session on initial app load if a JWT token exists
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