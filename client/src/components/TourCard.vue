<script setup lang="ts">
import { LucideArrowRight, LucideStar } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

export interface Tour {
  id: number | string;
  title: string;
  destination?: string;
  durationDays?: number;
  image?: string;
  price: number;
  rating?: number;
  category?: string;
  description?: string;
  slug?: string;
}

const props = withDefaults(
  defineProps<{
    tour?: Tour;
  }>(),
  {
    tour: () => ({
      id: 1,
      title: 'Savanna Awakening',
      destination: 'Tanzania',
      durationDays: 7,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuANuVIq15KgRU4uQbXKhYEbK1tniPfoEOCVawkAADV40qB8beMyLrCP0D5cB7-vUZdjg3DsjomJyRnVuP1km26W9cnZcD7QLQOf1sqtucY7Sf8mVqkUZ9Wvpg8l6U-hh_nA3tkpINtFN082hFsTqI554IzaLXMLQe0PYrrukhf0MIskdaA_g1f5kJGOS1bCu4QbFq0itofh9pO5LLXzBnPuaz78mk-8ieohLaHEJfsFX_wD-8sZhFJM',
      price: 2450,
      rating: 4.9,
      category: 'Safari',
      description:
        'Immerse yourself in the rhythm of the wild on a sustainable expedition.',
      slug: 'serengeti',
    }),
  }
);
</script>

<template>
  <div
    class="bg-surface-container-lowest rounded-lg border border-outline-variant/15 overflow-hidden shadow-level-1 hover-lift group flex flex-col h-full"
  >
    <div class="relative h-64 overflow-hidden">
      <img
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        :src="props.tour.image"
        :alt="props.tour.title"
      />
      <div
        v-if="props.tour.rating"
        class="absolute top-4 left-4 bg-[#F2C94C] text-[#241916] px-3 py-1 rounded-full font-label-md text-label-md flex items-center shadow-sm"
      >
        <LucideStar class="mr-1 w-4 h-4 fill-current" />
        {{ props.tour.rating.toFixed(1) }}
      </div>
    </div>

    <div class="p-stack-md grow flex flex-col">
      <div class="flex justify-between items-start mb-2 gap-2">
        <h3 class="font-headline-md text-headline-md text-on-surface">
          {{ props.tour.title }}
        </h3>
        <span
          v-if="props.tour.category"
          class="bg-primary/10 text-primary px-2 py-1 rounded font-label-md text-label-md uppercase tracking-wider shrink-0"
        >
          {{ props.tour.category }}
        </span>
      </div>

      <p
        class="font-body-sm text-body-sm text-on-surface-variant mb-stack-md flex-grow"
      >
        <template v-if="props.tour.description">
          {{ props.tour.description }}
        </template>
        <template v-else-if="props.tour.durationDays">
          Immerse yourself in the rhythm of the wild on a {{ props.tour.durationDays }}-day sustainable expedition.
        </template>
      </p>

      <div
        class="flex justify-between items-center pt-stack-sm border-t border-outline-variant/20 mt-auto"
      >
        <span class="font-headline-md text-headline-md text-on-surface">
          ${{ props.tour.price.toLocaleString() }}
        </span>
        
        <RouterLink
          :to="`/tours/${props.tour.slug || props.tour.id}`"
          class="text-primary font-label-md text-label-md hover:underline flex items-center"
        >
          Details
          <LucideArrowRight class="ml-1 w-4 h-4" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>