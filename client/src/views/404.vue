<template>
  <div class="min-h-screen bg-sand flex items-center justify-center px-4 sm:px-6 lg:px-8 font-body text-ebony">
    <div class="max-w-2xl w-full text-center py-12">
      <!-- Top Decorative Tag -->
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-savanna/15 border border-savanna/30 mb-8">
        <span class="w-2 h-2 rounded-full bg-savanna animate-pulse"></span>
        <span class="text-xs font-semibold uppercase tracking-wider text-ebony font-display">
          Off the Map
        </span>
      </div>

      <!-- Hero 404 Visual Heading -->
      <div class="relative mb-6">
        <h1 class="font-display font-bold text-8xl sm:text-9xl text-acacia tracking-tight">
          404
        </h1>
        <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-terracotta rounded-full"></div>
      </div>

      <!-- Main Explanation Heading & Paragraph -->
      <h2 class="font-display font-semibold text-2xl sm:text-3xl text-ebony mb-4">
        You've Wandered Beyond the Trail
      </h2>
      

      <!-- Action Buttons Card Component -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200/60 max-w-md mx-auto">
        <p class="text-sm font-medium text-ebony mb-4">Let's get your expedition back on track:</p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <!-- Primary CTA Button -->
          <RouterLink
            to="/"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-terracotta hover:bg-[#b04d2a] text-white font-medium text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Return to Home
          </RouterLink>

          <!-- Secondary Back Button -->
          <button
            @click="goBack"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-stone-100 text-ebony font-medium text-sm px-6 py-3 rounded-xl border border-stone-200 transition-colors duration-200"
          >
            <svg class="w-4 h-4 text-granite" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Go Back
          </button>
        </div>
      </div>

      <!-- Quick Support Link -->
      <div class="mt-12 text-xs text-granite">
        Need assistance with a booking? 
        <RouterLink to="/contact" class="text-terracotta hover:underline font-medium">Contact Safari Support</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack(): void {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/');
  }
}
</script>