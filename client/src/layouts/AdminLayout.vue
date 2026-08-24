<template>
  <div class="min-h-screen flex bg-slate-100 text-slate-800">
    <!-- Sidebar -->
    <nav
      class="hidden md:flex h-screen w-64 fixed left-0 top-0 z-40 bg-surface-container-low border-r border-outline-variant/10 shadow-md flex-col p-stack-md gap-stack-sm"
    >
      <!-- Header -->
      <div class="flex items-center gap-stack-sm mb-stack-lg">
        <img
          alt="Admin profile"
          class="w-10 h-10 rounded-full object-cover"
          data-alt="A small, professional circular avatar of an administrative user, bathed in warm, soft studio lighting. Minimalist aesthetic."
          src="https://lh3.googleusercontent.com/RouterLinkida-public/RouterLinkB6AXuDDE5S0ZYNZColHBLjPcMPGIZcm5_tf32M6-nydqQ3jIHCAfnrDmzrrIZpbJwZPE70p2fxFOfXCsCPmVxyEer0s5gPLxWVCcVJusv3eJtPdDCuQL6liCjxU_9HUugNiYMpHrqRoRTJ3gtovMtb1LuAsCApmbssJycwGEMNHV70jWdbq_qp2yB1ARLNC8j6gRrMWAfwK-uPjT15LICTDMcCJfUQYtTlGrqi0dhLBH0Jp5IN_caZ5ideV"
        />
        <div>
          <h1 class="font-headline-md text-headline-md font-bold text-primary">
            Admin Panel
          </h1>
          <p class="font-body-sm text-body-sm text-on-surface-variant">
            Horizon Trails Management
          </p>
        </div>
      </div>
      <!-- Primary Tabs -->
      <div class="flex flex-col gap-unit">
        <!-- Active: Dashboard -->
        <RouterLink
          class="flex items-center gap-stack-sm p-stack-sm bg-secondary-container text-on-secondary-container rounded-lg font-bold translate-x-1 transition-transform"
          to="/admin"
        >
         <LucideGrid class="h-5 w-5" />
          <span class="font-label-md text-label-md">Dashboard</span>
        </RouterLink>
        <!-- Inactive Tabs -->
        <RouterLink
          class="flex items-center gap-stack-sm p-stack-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg hover:bg-surface-container-high transition-colors duration-200"
          to="/admin/tours"
        >
          <LucideCompass class="h-5 w-5" />
          <span class="font-label-md text-label-md">Tours</span>
        </RouterLink>
        <RouterLink
          class="flex items-center gap-stack-sm p-stack-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg hover:bg-surface-container-high transition-colors duration-200"
          to="/admin/destinations"
        >
          <LucideMountain class="h-5 w-5" />
          <span class="font-label-md text-label-md">Destinations</span>
        </RouterLink>
        <RouterLink
          class="flex items-center gap-stack-sm p-stack-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg hover:bg-surface-container-high transition-colors duration-200"
          to="/admin/bookings"
        >
          <LucideCalendarCheck class="h-5 w-5" />
          <span class="font-label-md text-label-md">Bookings</span>
        </RouterLink>
        <RouterLink
          class="flex items-center gap-stack-sm p-stack-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg hover:bg-surface-container-high transition-colors duration-200"
          to="/admin/financials"
        >
          <LucideBanknote class="h-5 w-5" />
          <span class="font-label-md text-label-md">Financials</span>
        </RouterLink>
      </div>
      <!-- CTA -->
      <div class="mt-stack-lg">
        <button
          class="w-full bg-primary text-on-primary py-[12px] px-[24px] rounded-lg font-bold font-label-md text-label-md flex justify-center items-center gap-unit hover:opacity-90 transition-opacity shadow-sm"
        >
          <LucideCirclePlus class="h-5 w-5" />
          New Tour
        </button>
      </div>
      <!-- Footer Tabs -->
      <div
        class="mt-auto flex flex-col gap-unit pt-stack-md border-t border-outline-variant/10"
      >
        <RouterLink
          class="flex items-center gap-stack-sm p-stack-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg hover:bg-surface-container-high transition-colors duration-200"
          to="/admin/settings"
        >
          <LucideSettings class="h-5 w-5" />
          <span class="font-label-md text-label-md">Settings</span>
        </RouterLink>
        <RouterLink
          class="flex items-center gap-stack-sm p-stack-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg hover:bg-surface-container-high transition-colors duration-200"
          to="/admin/help"
        >
          <LucideCircleQuestionMark class="h-5 w-5" />
          <span class="font-label-md text-label-md">Help</span>
        </RouterLink>
      </div>
    </nav>

    <!-- Main Admin Content Area -->
    <div class="flex-grow flex flex-col min-w-0">
      

      <!-- Admin Router View Container -->
      <main class="flex-grow p-8 overflow-y-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
import { LucideBanknote, LucideCalendarCheck, LucideCirclePlus, LucideCircleQuestionMark, LucideCompass, LucideGrid, LucideMountain, LucideSettings } from 'lucide-vue-next';

const authStore = useAuthStore();
</script>