<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
    <!-- Navigation Header -->
    <header class="sticky top-0 w-full z-50 bg-surface/90 border-b border-outline-variant/15 shadow-sm backdrop-blur-md">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        
        <!-- Brand Logo -->
        <RouterLink to="/" class="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2">
          <!-- <span>🦁</span> -->
           <LucideCompass/>
          <span>Horizon Trails</span>
        </RouterLink>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
          <RouterLink to="/tours" class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors hover:opacity-90 duration-300">Tours</RouterLink>
          <RouterLink to="/destinations" class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors hover:opacity-90 duration-300">Destinations</RouterLink>
          <RouterLink to="/about" class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors hover:opacity-90 duration-300">About Us</RouterLink>
          <RouterLink to="/contact" class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors hover:opacity-90 duration-300">Contact Us</RouterLink>
        </nav>

        <!-- Dynamic User Auth Action Buttons -->
        <div class="hidden md:flex items-center gap-4">
          <template v-if="authStore.isAuthenticated">
            <RouterLink 
              v-if="authStore.isAdmin" 
              to="/admin/dashboard" 
              class="px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              Admin Dashboard
            </RouterLink>

            <div class="flex items-center gap-3 border-l pl-4 border-slate-200">
              <span class="text-sm font-semibold text-slate-700">{{ authStore.user?.name }}</span>
              <button 
                @click="authStore.logout()" 
                class="text-xs text-rose-600 font-medium hover:underline"
              >
                Log Out
              </button>
            </div>
          </template>

          <template v-else>
            <RouterLink to="/login" class="hidden md:block font-label-md text-label-md text-secondary border-2 border-secondary rounded-full px-6 py-3 hover:bg-secondary hover:text-on-secondary transition-colors duration-300">
              Log In
            </RouterLink>
            <RouterLink 
              to="/register" 
              class="font-label-md text-label-md bg-primary text-on-primary rounded-full px-6 py-3 font-bold hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300"
            >
              Sign Up
            </RouterLink>
          </template>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div v-if="isMobileMenuOpen" class="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-2">
        <RouterLink to="/" class="block py-2 text-base font-medium text-slate-700" @click="isMobileMenuOpen = false">Tours</RouterLink>
        <RouterLink to="/destinations" class="block py-2 text-base font-medium text-slate-700" @click="isMobileMenuOpen = false">Destinations</RouterLink>
        <div class="pt-3 border-t border-slate-100 flex flex-col gap-2">
          <template v-if="authStore.isAuthenticated">
            <button @click="authStore.logout(); isMobileMenuOpen = false" class="w-full text-left py-2 text-rose-600 font-semibold">Log Out</button>
          </template>
          <template v-else>
            <RouterLink to="/login" class="block text-center py-2 text-slate-700 font-semibold" @click="isMobileMenuOpen = false">Log In</RouterLink>
            <RouterLink to="/register" class="block text-center py-2 bg-emerald-600 text-white rounded-lg font-semibold" @click="isMobileMenuOpen = false">Sign Up</RouterLink>
          </template>
        </div>
      </div>
    </header>

    <!-- Page Content Container -->
    <main class="">
      <RouterView />
    </main>

    <!-- Global Footer -->
     <footer class="w-full py-16 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant/20 mt-32">
        <div class="col-span-1 md:col-span-1">
          <div class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-[32px] text-primary dark:text-primary-fixed-dim mb-4">
            Horizon Trails
          </div>
          <p class="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant">
            © 2024 Horizon Trails. Luxury Eco-Exploration.
          </p>
        </div>

        <div class="col-span-1 md:col-span-3 flex flex-wrap gap-8 justify-start md:justify-end">
          <a class="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim hover:underline transition-all opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
          <a class="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim hover:underline transition-all opacity-80 hover:opacity-100" href="#">Terms of Service</a>
          <a class="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim hover:underline transition-all opacity-80 hover:opacity-100" href="#">Sustainability Report</a>
          <a class="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim hover:underline transition-all opacity-80 hover:opacity-100" href="#">Press Kit</a>
        </div>
      </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { LucideCompass } from 'lucide-vue-next';

const authStore = useAuthStore();
const isMobileMenuOpen = ref(false);
</script>