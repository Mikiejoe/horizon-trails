<template>
  <div class="bg-background flex h-screen">
    <main
      class="p-margin-mobile md:p-margin-desktop bg-background flex-1 md:ml-64"
    >
      <!-- Header -->
      <header class="mb-section-gap flex items-center justify-between">
        <div>
          <h2 class="font-headline-lg text-headline-lg text-on-surface mb-2">
            Destinations
          </h2>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Manage travel regions and associated content.
          </p>
        </div>
        <button
          class="bg-primary text-on-primary font-label-md text-label-md flex items-center gap-2 rounded-lg py-3 px-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          type="button"
          @click="isModalOpen = true"
        >
          <LucideMapPlus class="h-5 w-5" />
          Add Destination
        </button>
      </header>

      <!-- Data Table / Bento List -->
      <div
        class="bg-surface border-outline-variant/15 shadow-stone overflow-hidden rounded-xl border"
      >
        <!-- Table Header -->
        <div
          class="bg-surface-container-lowest border-outline-variant/15 font-label-md text-label-md text-on-surface-variant grid grid-cols-12 gap-4 border-b p-4 uppercase tracking-wider"
        >
          <div class="col-span-1 pl-4">Cover</div>
          <div class="col-span-4">Destination Name</div>
          <div class="col-span-2">Region</div>
          <div class="col-span-2 text-center">Active Tours</div>
          <div class="col-span-2">Status</div>
          <div class="col-span-1 pr-4 text-right">Actions</div>
        </div>

        <!-- Dynamic Table Rows -->
        <div class="divide-outline-variant/10 divide-y">
          <div
            v-for="item in destinations"
            :key="item.id"
            class="hover:bg-surface-container-lowest group grid grid-cols-12 items-center gap-4 p-4 transition-colors"
          >
            <div class="col-span-1 pl-4">
              <div
                class="border-outline-variant/20 h-12 w-12 overflow-hidden rounded-lg border"
              >
                <img
                  :alt="item.name"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  :src="item.image"
                />
              </div>
            </div>
            <div class="col-span-4">
              <h3 class="font-headline-sm text-on-surface font-semibold">
                {{ item.name }}
              </h3>
              <p
                class="font-body-sm text-body-sm text-on-surface-variant truncate pr-4"
              >
                {{ item.description }}
              </p>
            </div>
            <div class="font-body-sm text-body-sm text-on-surface col-span-2">
              {{ item.region }}
            </div>
            <div
              class="font-headline-md text-headline-md text-primary col-span-2 text-center"
            >
              {{ item.toursCount }}
            </div>
            <div class="col-span-2">
              <span
                v-if="item.status === 'Active'"
                class="bg-secondary-container text-on-secondary-container font-label-md text-label-md inline-flex items-center rounded-full px-3 py-1"
              >
                <span class="bg-secondary mr-2 h-2 w-2 rounded-full"></span>
                Active
              </span>
              <span
                v-else
                class="bg-surface-container-high text-on-surface-variant font-label-md text-label-md inline-flex items-center rounded-full px-3 py-1"
              >
                <span class="bg-outline mr-2 h-2 w-2 rounded-full"></span>
                Draft
              </span>
            </div>
            <div
              class="col-span-1 flex justify-end gap-2 pr-4 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <button
                class="text-on-surface-variant hover:text-primary p-2 transition-colors"
                type="button"
                @click="editDestination(item)"
              >
                <LucidePencil class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <!-- Pagination Footer -->
        <div
          class="bg-surface-container-lowest border-outline-variant/15 flex items-center justify-between border-t p-4"
        >
          <span class="font-body-sm text-body-sm text-on-surface-variant"
            >Showing 1-{{ destinations.length }} of 24 destinations</span
          >
          <div class="flex gap-2">
            <button
              class="border-outline-variant/20 hover:bg-surface-container-high text-on-surface-variant rounded border p-2 transition-colors disabled:opacity-50"
              type="button"
            >
              <LucideChevronLeft class="h-5 w-5" />
            </button>
            <button
              class="border-outline-variant/20 hover:bg-surface-container-high text-on-surface-variant rounded border p-2 transition-colors"
              type="button"
            >
              <LucideChevronRight class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Add Destination Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <!-- Backdrop -->
      <div
        class="bg-inverse-surface/40 absolute inset-0 backdrop-blur-sm transition-opacity"
        @click="isModalOpen = false"
      ></div>

      <!-- Modal Content -->
      <div
        class="bg-surface border-outline-variant/15 shadow-modal relative mx-4 flex max-h-[921px] w-full max-w-2xl flex-col overflow-hidden rounded-xl border"
      >
        <div
          class="bg-surface-container-lowest border-outline-variant/15 flex items-center justify-between border-b p-6"
        >
          <h2 class="font-headline-md text-headline-md text-on-surface">
            Add New Destination
          </h2>
          <button
            class="text-on-surface-variant hover:text-error p-1 transition-colors"
            type="button"
            @click="isModalOpen = false"
          >
            <LucideX class="h-5 w-5" />
          </button>
        </div>

        <div class="bg-background flex-1 overflow-y-auto p-6">
          <form class="space-y-6" @submit.prevent="saveDestination">
            <!-- Image Upload -->
            <div>
              <label
                class="font-label-md text-label-md text-on-surface mb-2 block"
                >Panoramic Banner</label
              >
              <div
                class="border-outline-variant/40 bg-surface-container-low hover:bg-surface-container-high group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition-colors"
              >
                <LucideImagePlus
                  class="text-outline group-hover:text-primary material-symbols-outlined mb-2 text-4xl transition-colors"
                  />
                <p
                  class="font-body-sm text-body-sm text-on-surface-variant text-center"
                >
                  Drag and drop high-res panorama here, or
                  <span class="text-primary font-semibold">browse files</span>
                </p>
                <p
                  class="font-label-md text-label-md text-outline mt-1 text-[10px]"
                >
                  Recommended size: 2400x800px
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  class="font-label-md text-label-md text-on-surface mb-2 block"
                  >Destination Name</label
                >
                <input
                  v-model="newDestination.name"
                  class="bg-[#F3F0E9] border-outline/30 text-on-surface font-body-md focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-3 outline-none transition-all focus:ring-1"
                  placeholder="e.g., Swiss Alps"
                  required
                  type="text"
                />
              </div>
              <div>
                <label
                  class="font-label-md text-label-md text-on-surface mb-2 block"
                  >Region</label
                >
                <select
                  v-model="newDestination.region"
                  class="bg-[#F3F0E9] border-outline/30 text-on-surface font-body-md focus:border-primary focus:ring-primary w-full appearance-none rounded-lg border px-4 py-3 outline-none transition-all focus:ring-1"
                  required
                >
                  <option disabled value="">Select Region...</option>
                  <option
                    v-for="regionOption in regions"
                    :key="regionOption"
                    :value="regionOption"
                  >
                    {{ regionOption }}
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label
                class="font-label-md text-label-md text-on-surface mb-2 block"
                >Short Description</label
              >
              <textarea
                v-model="newDestination.description"
                class="bg-[#F3F0E9] border-outline/30 text-on-surface font-body-md focus:border-primary focus:ring-primary w-full resize-none rounded-lg border px-4 py-3 outline-none transition-all focus:ring-1"
                placeholder="Brief summary of what makes this destination unique..."
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>

        <div
          class="bg-surface-container-lowest border-outline-variant/15 flex justify-end gap-4 border-t p-6"
        >
          <button
            class="border-outline-variant/50 text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high rounded-lg border-2 px-6 py-3 transition-colors"
            type="button"
            @click="isModalOpen = false"
          >
            Cancel
          </button>
          <button
            class="bg-primary text-on-primary font-label-md text-label-md rounded-lg px-6 py-3 transition-opacity hover:opacity-90"
            type="button"
            @click="saveDestination"
          >
            Save Destination
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LucideChevronLeft, LucideChevronRight, LucideImagePlus, LucideMapPlus, LucidePencil, LucideX } from 'lucide-vue-next';
import { ref } from 'vue';

interface Destination {
  id: number;
  name: string;
  description: string;
  region: string;
  toursCount: number;
  status: 'Active' | 'Draft';
  image: string;
}

// State
const isModalOpen = ref(false);

const regions = ['Europe', 'Asia', 'South America', 'North America', 'Africa'];

const destinations = ref<Destination[]>([
  {
    id: 1,
    name: 'Patagonia, Argentina',
    description: 'Rugged peaks, ancient glaciers, and untouched wilderness.',
    region: 'South America',
    toursCount: 12,
    status: 'Active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUQDUByjy1sNstBmtAvMPb0den9VtVjruA6qX8Pbh6RZq6Q3goJMjXbR87j4NK3lxpD26kt9aX2sBqnNUgm0b8c2gBhuSS0SlvN3y5Eov4m-0zBb-iCBahWog4RcAiA69TIItcO6osUrFN4R-FWPmKD2SYgZDjLTtv2d73XOSf79C6vCj111w3m2X9Qq6fxgD396kPUzk8zLOkZfZ34m2QhySqtKY4ZRSvHy2MjX77F_Z8xth7V-2G'
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    description: 'Historic temples, traditional gardens, and cultural immersion.',
    region: 'Asia',
    toursCount: 8,
    status: 'Active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUr5aqOE5zhfunL_khPXtFz_Vm2W0hfO5BtV_prO3zbP4ad57h0hxS3Tm0-uiFffXw9DbRgd3GOv5HquJMH43uS3ot0vAj39dbQvgZN5J7a2M5Szi9tOU5nuWRDzO7uqo62aWc9zchhF7F_7lnoHIUv5BFuEou2V9QqFXWJsoB7sB1lCxLcZ6tnUF50m3BihdwUqKhyRiAXDkF5UerkQIYMNqR05VwE9nQSISBHkS-Z_1jOXr1OtBa'
  },
  {
    id: 3,
    name: 'Scottish Highlands',
    description: 'Dramatic landscapes, deep lochs, and historic castles.',
    region: 'Europe',
    toursCount: 5,
    status: 'Draft',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCliYTihxQBXHPkSsAdhaozykFKc3Cc6TgL8yQkKUQTumSOWYSeNFF6iQ3Ia_-yRezZ2QJiAdkreEkiXa86m3H9kmn6zQwUibpPtcCFAjsi2P99QNcaNit_JSm1lh7SOV0RgHSZduexqrJPfo46zJC3Y9VYc1sFD7kdyQPdeQS3Tfq_g5UKhZMmldN5JpnNnmZhIg94glaSrcbZJ1lyf0fuQBHHogrBmmDjyqlI-QFbSHmK5W9lbP4T'
  }
]);

const newDestination = ref({
  name: '',
  region: '',
  description: ''
});

// Actions
function saveDestination() {
  if (!newDestination.value.name || !newDestination.value.region) return;

  destinations.value.push({
    id: Date.now(),
    name: newDestination.value.name,
    description: newDestination.value.description,
    region: newDestination.value.region,
    toursCount: 0,
    status: 'Draft',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCliYTihxQBXHPkSsAdhaozykFKc3Cc6TgL8yQkKUQTumSOWYSeNFF6iQ3Ia_-yRezZ2QJiAdkreEkiXa86m3H9kmn6zQwUibpPtcCFAjsi2P99QNcaNit_JSm1lh7SOV0RgHSZduexqrJPfo46zJC3Y9VYc1sFD7kdyQPdeQS3Tfq_g5UKhZMmldN5JpnNnmZhIg94glaSrcbZJ1lyf0fuQBHHogrBmmDjyqlI-QFbSHmK5W9lbP4T'
  });

  // Reset & Close
  newDestination.value = { name: '', region: '', description: '' };
  isModalOpen.value = false;
}

function editDestination(destination: Destination) {
  console.log('Editing destination:', destination);
}
</script>

<style scoped>
.shadow-stone {
  box-shadow: 0 4px 12px rgba(26, 26, 26, 0.05);
}
.shadow-modal {
  box-shadow: 0 12px 24px rgba(26, 26, 26, 0.1);
}
</style>