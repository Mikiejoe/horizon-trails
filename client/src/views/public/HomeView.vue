<script setup lang="ts">
import { ref } from "vue";
import { MapPin, Calendar, Search } from "lucide-vue-next";
import TourCard from "../../components/TourCard.vue";

// Reactive state for quick search
const searchQuery = ref("");
const selectedDuration = ref("Any duration");

const handleSearch = () => {
  // Logic for search execution
  console.log(
    "Searching for:",
    searchQuery.value,
    "Duration:",
    selectedDuration.value,
  );
};
</script>

<template>
  <div class="min-h-screen bg-surface text-on-surface">
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div class="absolute inset-0 z-0">
        <div
          class="bg-cover bg-center w-full h-full"
          style="background-image: url(&quot;/public/images/bannerbg.jpg&quot;)"
        ></div>
        <div class="absolute inset-0 hero-overlay"></div>
      </div>

      <div
        class="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mt-12 md:mt-24 flex flex-col items-center"
      >
        <h1
          class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-[72px] leading-[1.1] text-white mb-6"
        >
          Unfold the Journey
        </h1>
        <p
          class="font-body-lg text-body-lg text-surface-container-low max-w-2xl mx-auto mb-12"
        >
          Discover untamed wilderness and immersive eco-luxury experiences
          designed for the modern explorer.
        </p>

        <!-- Quick Search Bar -->
        <form
          @submit.prevent="handleSearch"
          class="bg-surface/95 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-[0_8px_32px_rgba(26,26,26,0.15)] border border-outline-variant/30 w-full max-w-4xl flex flex-col md:flex-row gap-4 items-end"
        >
          <div class="flex-1 w-full text-left">
            <label
              class="block font-label-md text-label-md text-on-surface-variant mb-2"
              >Destination</label
            >
            <div class="relative">
              <MapPin
                class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline"
              />
              <input
                v-model="searchQuery"
                class="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/60 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md text-body-md text-on-surface transition-colors"
                placeholder="Where to next?"
                type="text"
              />
            </div>
          </div>

          <div class="flex-1 w-full text-left">
            <label
              class="block font-label-md text-label-md text-on-surface-variant mb-2"
              >Duration</label
            >
            <div class="relative">
              <Calendar
                class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline"
              />
              <select
                v-model="selectedDuration"
                class="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/60 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md text-body-md text-on-surface appearance-none transition-colors"
              >
                <option>Any duration</option>
                <option>1-3 Days</option>
                <option>4-7 Days</option>
                <option>8+ Days</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            class="w-full md:w-auto bg-primary text-on-primary px-8 py-3 rounded-xl font-label-md text-label-md hover:bg-surface-tint transition-colors flex items-center justify-center gap-2 h-[48px]"
          >
            <Search class="w-5 h-5" />
            Search
          </button>
        </form>
      </div>
    </section>

    <main
      class="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-20"
    >
      <div class="text-center mb-stack-lg">
        <h2
          class="font-headline-xl text-headline-xl text-on-surface mb-stack-sm"
        >
          Curated Expeditions
        </h2>
        <p
          class="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto"
        >
          Discover journeys crafted for deep connection with nature and local
          cultures.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <TourCard />
      </div>
    </main>
  </div>
</template>

