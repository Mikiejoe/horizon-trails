<script setup lang="ts">
import { LucideSearch } from 'lucide-vue-next';
import TourCard2 from '../../components/TourCard2.vue';

</script>

<template>
     <main
      class="flex-grow max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg w-full flex flex-col md:flex-row gap-gutter"
    >
      <!-- Filter Sidebar -->
      <aside
        class="w-full md:w-1/4 shrink-0 bg-surface-container-low rounded-lg p-stack-md border border-outline-variant/10 shadow-sm h-fit sticky top-28"
      >
        <div class="mb-stack-lg">
          <h2
            class="font-headline-md text-headline-md text-on-surface mb-stack-md"
          >
            Filter Tours
          </h2>
          <!-- Search -->
          <div class="mb-stack-lg relative">           
            <LucideSearch class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"/>
            <input
              class="w-full bg-[#F3F0E9] border border-outline/15 rounded pl-10 pr-4 py-2 font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              placeholder="Search keywords..."
              type="text"
            />
          </div>
          <!-- Price Range -->
          <div class="mb-stack-lg border-t border-outline/10 pt-stack-md">
            <h3
              class="font-label-md text-label-md text-on-surface-variant mb-stack-sm"
            >
              Price Range
            </h3>
            <input
              class="w-full accent-primary"
              max="5000"
              min="0"
              type="range"
            />
            <div
              class="flex justify-between font-body-sm text-body-sm text-on-surface-variant mt-2"
            >
              <span>$0</span>
              <span>$5000+</span>
            </div>
          </div>
          <!-- Duration -->
          <div class="mb-stack-lg border-t border-outline/10 pt-stack-md">
            <h3
              class="font-label-md text-label-md text-on-surface-variant mb-stack-sm"
            >
              Duration
            </h3>
            <div class="space-y-2">
              <label
                class="flex items-center gap-2 cursor-pointer font-body-sm text-body-sm text-on-surface"
              >
                <input
                  class="rounded text-primary focus:ring-primary border-outline/20 bg-[#F3F0E9]"
                  type="checkbox"
                />
                1-3 Days
              </label>
              <label
                class="flex items-center gap-2 cursor-pointer font-body-sm text-body-sm text-on-surface"
              >
                <input
                  class="rounded text-primary focus:ring-primary border-outline/20 bg-[#F3F0E9]"
                  type="checkbox"
                />
                4-7 Days
              </label>
              <label
                class="flex items-center gap-2 cursor-pointer font-body-sm text-body-sm text-on-surface"
              >
                <input
                  class="rounded text-primary focus:ring-primary border-outline/20 bg-[#F3F0E9]"
                  type="checkbox"
                />
                8+ Days
              </label>
            </div>
          </div>
          <!-- Destinations -->
          <div class="border-t border-outline/10 pt-stack-md">
            <h3
              class="font-label-md text-label-md text-on-surface-variant mb-stack-sm"
            >
              Destinations
            </h3>
            <div class="space-y-2">
              <label
                class="flex items-center gap-2 cursor-pointer font-body-sm text-body-sm text-on-surface"
              >
                <input
                  class="rounded text-primary focus:ring-primary border-outline/20 bg-[#F3F0E9]"
                  type="checkbox"
                />
                Rainforests
              </label>
              <label
                class="flex items-center gap-2 cursor-pointer font-body-sm text-body-sm text-on-surface"
              >
                <input
                  class="rounded text-primary focus:ring-primary border-outline/20 bg-[#F3F0E9]"
                  type="checkbox"
                />
                Mountain Peaks
              </label>
              <label
                class="flex items-center gap-2 cursor-pointer font-body-sm text-body-sm text-on-surface"
              >
                <input
                  class="rounded text-primary focus:ring-primary border-outline/20 bg-[#F3F0E9]"
                  type="checkbox"
                />
                Coastal Trails
              </label>
            </div>
          </div>
        </div>
        <button
          class="w-full bg-primary text-on-primary py-2 rounded font-label-md text-label-md hover:bg-primary-container transition-colors"
        >
          Apply Filters
        </button>
      </aside>
      <!-- Tour Listing Grid -->
      <section class="flex-grow">
        
        <!-- Results Header -->
        <div
          class="flex justify-between items-center mb-stack-lg border-b border-outline/10 pb-stack-sm"
        >
          <span class="font-body-md text-body-md text-on-surface-variant"
            >Showing <strong class="text-on-surface">24</strong> active
            tours</span
          >
          <div class="flex items-center gap-2">
            <label class="font-label-md text-label-md text-on-surface-variant"
              >Sort by:</label
            >
            <select
              class="bg-[#F3F0E9] border border-outline/15 rounded py-1 px-2 font-body-sm text-body-sm focus:outline-none focus:border-primary"
            >
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Duration: Shortest</option>
            </select>
          </div>
        </div>
        <!-- Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
         <TourCard2/>
        </div>
        <!-- Pagination -->
        <div class="mt-stack-lg flex justify-center">
          <button
            class="border-2 border-secondary text-secondary px-8 py-3 rounded font-label-md text-label-md hover:bg-secondary hover:text-on-secondary transition-colors duration-300"
          >
            Load More Tours
          </button>
        </div>
      </section>
    </main>
</template>