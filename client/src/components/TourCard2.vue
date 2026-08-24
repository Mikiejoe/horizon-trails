<template>
  <article
    class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(26,26,26,0.05)] border border-outline/15 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,26,26,0.08)] transition-all duration-300 flex flex-col group cursor-pointer"
  >
    <div class="h-48 relative overflow-hidden">
      <img
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        data-alt="A lush, dense rainforest canopy captured from above during golden hour. The light mode aesthetic emphasizes vibrant, natural greens and warm sunlight piercing through the leaves. The image evokes a sense of deep exploration and eco-conscious travel, fitting the tactical minimalist travel platform style."
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaSGSasDzkzPo5beLOaAFHKlQtAe0ndb8vAmJtG-YzHTuxcF-xtF4oo9wUn_p1okON_orRh0teFHycsIHJ2hhoUbTviZXdxuY8VFa-pmvlyT7mei8oiJDujt1wLzaCja81D55WDhfRYo7ybjeWRTasBfxQWkvtU5CJiE7KgcISFcXvk9sjfDbilhArljYSd-7uFBBSbuwRYuJMLxFXOEKlus6szE0Da2jesjjTyIlnPM-bZylAWtBh"
      />
      <span
        class="absolute top-2 right-2 bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-md text-label-md shadow-sm"
        >Eco-Certified</span
      >
    </div>
    <div class="p-stack-md flex flex-col flex-grow">
      <div class="flex justify-between items-start mb-2">
        <h3
          class="font-headline-md text-[20px] leading-[28px] font-semibold text-on-surface"
        >
          Amazon Canopy Trek
        </h3>
        <span class="font-headline-md text-[18px] text-primary">$1,299</span>
      </div>
      <p
        class="font-body-sm text-body-sm text-on-surface-variant mb-stack-md line-clamp-2"
      >
        Immerse yourself in the heart of the rainforest with expert local guides
        focused on conservation.
      </p>
      <div
        class="mt-auto flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-3 border-t border-outline/10"
      >
        <span class="flex items-center gap-1 justify-center">
          
          <LucideClock :size="14"/>
          5 Days</span
        >
        <span class="flex items-center justify-center gap-1"
          >
          <LucideStar  :size="14"/>
          4.9</span
        >
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { LucideClock, LucideStar } from 'lucide-vue-next';

</script>

<style scoped></style>
