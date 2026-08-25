<template>
  <main class="flex-1 md:ml-64 bg-background min-h-screen">
    <div
      class="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg"
    >
      <!-- Page Header -->
      <div
        class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-stack-lg"
      >
        <div>
          <div class="flex items-center gap-2 text-on-surface-variant mb-2">
            <RouterLink
              class="hover:text-primary transition-colors font-body-sm text-body-sm"
              to="/admin/tours"
              >Tours</RouterLink
            >
            <LucideChevronRight :size="18" />
            <span class="font-body-sm text-body-sm">Create New Tour</span>
          </div>
          <h2 class="font-headline-lg text-headline-lg text-on-surface">
            Create New Tour
          </h2>
        </div>
        <div class="flex items-center gap-3">
          <button
            class="px-6 py-3 rounded-full border-2 border-secondary text-secondary font-label-md text-label-md hover:bg-secondary/5 transition-colors"
          >
            Save Draft
          </button>
          <button
            class="px-6 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-colors flex items-center gap-2"
          >
            <span class="material-symbols-outlined text-sm">publish</span>
            Publish Tour
          </button>
        </div>
      </div>
      <!-- Main Form Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <!-- Left Column (Primary Details) -->
        <div class="lg:col-span-2 space-y-gutter">
          <!-- Basic Info Card -->
          <div
            class="bg-surface-container-lowest rounded-xl p-stack-lg shadow-stone border border-outline-variant/15"
          >
            <h3
              class="font-headline-md text-headline-md mb-stack-md border-b border-outline-variant/10 pb-4"
            >
              Basic Information
            </h3>
            <div class="space-y-stack-md">
              <div>
                <label
                  class="block font-label-md text-label-md text-on-surface-variant mb-2"
                  >Tour Title</label
                >
                <input
                  class="w-full bg-[#F3F0E9] border border-outline/50 rounded-lg p-3 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                  placeholder="e.g., Majestic Peaks of Patagonia"
                  type="text"
                />
              </div>
              <div>
                <label
                  class="block font-label-md text-label-md text-on-surface-variant mb-2"
                  >Short Summary</label
                >
                <textarea
                  class="w-full bg-[#F3F0E9] border border-outline/50 rounded-lg p-3 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                  placeholder="A brief captivating description for cards..."
                  rows="2"
                ></textarea>
              </div>
              <div>
                <label
                  class="block font-label-md text-label-md text-on-surface-variant mb-2"
                  >Full Description</label
                >
                <textarea
                  class="w-full bg-[#F3F0E9] border border-outline/50 rounded-lg p-3 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                  placeholder="Detailed overview of the journey, what to expect, and highlights..."
                  rows="6"
                ></textarea>
              </div>
            </div>
          </div>
          <!-- Itinerary Builder Card -->
          <div
            class="bg-surface-container-lowest rounded-xl p-stack-lg shadow-stone border border-outline-variant/15"
          >
            <div
              class="flex items-center justify-between mb-stack-md border-b border-outline-variant/10 pb-4"
            >
              <h3 class="font-headline-md text-headline-md">
                Itinerary Builder
              </h3>
              <button
                class="text-tertiary font-label-md text-label-md flex items-center gap-1 hover:underline"
              >
                <LucideCirclePlus/>
                Add Day
              </button>
            </div>
            <div class="space-y-stack-md">
              <!-- Day 1 -->
              <div
                class="border border-outline-variant/20 rounded-lg p-4 bg-surface-container-low/30 group hover:border-outline-variant/50 transition-colors"
              >
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-3">
                    <div
                      class="bg-surface-container-highest w-8 h-8 rounded-full flex items-center justify-center font-label-md text-label-md text-on-surface"
                    >
                      1
                    </div>
                    <input
                      class="bg-transparent border-b border-transparent focus:border-primary focus:outline-none font-body-lg text-body-lg text-on-surface font-semibold placeholder:text-on-surface-variant/50"
                      type="text"
                      value="Arrival &amp; Briefing"
                    />
                  </div>
                  <button
                    class="text-on-surface-variant/50 hover:text-error transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <LucideDelete/>
                  </button>
                </div>
                <textarea
                  class="w-full bg-[#F3F0E9] border border-outline/20 rounded-lg p-3 font-body-sm text-body-sm focus:border-primary focus:outline-none mb-3"
                  placeholder="Describe the activities for this day..."
                  rows="2"
                ></textarea>
                <div class="flex items-center gap-4">
                  <span
                    class="font-label-md text-label-md text-on-surface-variant"
                    >Meals Included:</span
                  >
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      class="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4"
                      type="checkbox"
                    />
                    <span class="font-body-sm text-body-sm">Breakfast</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      class="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4"
                      type="checkbox"
                    />
                    <span class="font-body-sm text-body-sm">Lunch</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      checked
                      class="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4"
                      type="checkbox"
                    />
                    <span class="font-body-sm text-body-sm">Dinner</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Right Column (Meta & Media) -->
        <div class="space-y-gutter">
          <!-- Media Upload -->
          <div
            class="bg-surface-container-lowest rounded-xl p-stack-lg shadow-stone border border-outline-variant/15"
          >
            <h3
              class="font-headline-md text-headline-md mb-stack-md border-b border-outline-variant/10 pb-4"
            >
              Media
            </h3>
            <div
              class="border-2 border-dashed border-outline-variant/50 rounded-lg bg-[#F3F0E9] flex flex-col items-center justify-center p-stack-lg text-center cursor-pointer hover:border-primary/50 hover:bg-surface-container-high transition-colors"
            >
              <LucideImagePlus class="text-4xl text-on-surface-variant mb-2" />
              <p
                class="font-body-md text-body-md text-on-surface font-semibold mb-1"
              >
                Click to upload featured image
              </p>
              <p class="font-body-sm text-body-sm text-on-surface-variant">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
            </div>
          </div>
          <!-- Tour Details -->
          <div
            class="bg-surface-container-lowest rounded-xl p-stack-lg shadow-stone border border-outline-variant/15"
          >
            <h3
              class="font-headline-md text-headline-md mb-stack-md border-b border-outline-variant/10 pb-4"
            >
              Key Details
            </h3>
            <div class="space-y-4">
              <div>
                <label
                  class="block font-label-md text-label-md text-on-surface-variant mb-2"
                  >Price (USD)</label
                >
                <div class="relative">
                  <span
                    class="absolute left-3 top-3 text-on-surface-variant font-body-md"
                    >$</span
                  >
                  <input
                    class="w-full bg-[#F3F0E9] border border-outline/50 rounded-lg p-3 pl-8 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="0.00"
                    type="number"
                  />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    class="block font-label-md text-label-md text-on-surface-variant mb-2"
                    >Duration (Days)</label
                  >
                  <input
                    class="w-full bg-[#F3F0E9] border border-outline/50 rounded-lg p-3 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="7"
                    type="number"
                  />
                </div>
                <div>
                  <label
                    class="block font-label-md text-label-md text-on-surface-variant mb-2"
                    >Group Size</label
                  >
                  <input
                    class="w-full bg-[#F3F0E9] border border-outline/50 rounded-lg p-3 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    placeholder="12"
                    type="number"
                  />
                </div>
              </div>
              <div>
                <label
                  class="block font-label-md text-label-md text-on-surface-variant mb-2"
                  >Difficulty Level</label
                >
                <select
                  class="w-full bg-[#F3F0E9] border border-outline/50 rounded-lg p-3 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                >
                  <option>Easy</option>
                  <option>Moderate</option>
                  <option>Challenging</option>
                  <option>Expert</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { LucideChevronRight, LucideCirclePlus, LucideDelete, LucideImagePlus } from "lucide-vue-next";
import { RouterLink } from "vue-router";
</script>

<style scoped>
.shadow-stone {
  box-shadow: 0 4px 12px rgba(26, 26, 26, 0.05);
}

.shadow-stone-hover {
  box-shadow: 0 8px 24px rgba(26, 26, 26, 0.08);
}

input:focus,
textarea:focus,
select:focus {
  box-shadow: none !important;
}
</style>
