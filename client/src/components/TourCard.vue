<template>
    <div
            class="bg-surface-container-lowest rounded-lg border border-outline-variant/15 overflow-hidden shadow-level-1 hover-lift group flex flex-col h-full"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-alt="A close-up, high-quality photograph of a majestic African elephant walking slowly through a dry, golden savanna. The warm afternoon sun casts beautiful shadows, emphasizing the deep textures of the elephant's skin and the natural, eco-conscious aesthetic. The lighting is organic and warm, reflecting a premium, sustainable travel experience."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANuVIq15KgRU4uQbXKhYEbK1tniPfoEOCVawkAADV40qB8beMyLrCP0D5cB7-vUZdjg3DsjomJyRnVuP1km26W9cnZcD7QLQOf1sqtucY7Sf8mVqkUZ9Wvpg8l6U-hh_nA3tkpINtFN082hFsTqI554IzaLXMLQe0PYrrukhf0MIskdaA_g1f5kJGOS1bCu4QbFq0itofh9pO5LLXzBnPuaz78mk-8ieohLaHEJfsFX_wD-8sZhFJM"
              />
              <div
                class="absolute top-4 left-4 bg-[#F2C94C] text-[#241916] px-3 py-1 rounded-full font-label-md text-label-md flex items-center shadow-sm"
              >
               
                <LucideStar class="mr-1"/>
                
                4.9
              </div>
            </div>
            <div class="p-stack-md grow flex flex-col">
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-headline-md text-headline-md text-on-surface">
                  Savanna Awakening
                </h3>
                <span
                  class="bg-primary/10 text-primary px-2 py-1 rounded font-label-md text-label-md uppercase tracking-wider"
                  >Safari</span
                >
              </div>
              <p
                class="font-body-sm text-body-sm text-on-surface-variant mb-stack-md flex-grow"
              >
                Immerse yourself in the rhythm of the wild on a 7-day
                sustainable safari.
              </p>
              <div
                class="flex justify-between items-center pt-stack-sm border-t border-outline-variant/20 mt-auto"
              >
                <span class="font-headline-md text-headline-md text-on-surface"
                  >$2,450</span
                >
                <RouterLink to="/tours/serengeti"
                  class="text-primary font-label-md text-label-md hover:underline flex items-center"
                >
                  Details
                
                    <LucideArrowRight class="material-symbols-outlined ml-1 text-[18px]"/>
                </RouterLink>
              </div>
            </div>
          </div>
</template>

<script setup lang="ts">
import { LucideArrowRight, LucideStar } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';


</script>