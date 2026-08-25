<script setup lang="ts">
import { ref, computed } from "vue";
import { MapPin, Calendar, Search, ChevronDown } from "lucide-vue-next";
import TourCard from "../../components/TourCard.vue";

interface Tour {
  id: number;
  title: string;
  destination: string;
  durationDays: number;
  image: string;
  price: number;
}

// Form state
const searchQuery = ref("");
const selectedDuration = ref("Any duration");

// Mock tours data
const tours = ref<Tour[]>([
  {
    id: 1,
    title: "Serengeti Migration Safari",
    destination: "Tanzania",
    durationDays: 6,
    image: "/images/serengeti.jpg",
    price: 3400,
  },
  {
    id: 2,
    title: "Amazon Rainforest Expedition",
    destination: "Brazil",
    durationDays: 3,
    image: "/images/amazon.jpg",
    price: 1800,
  },
  {
    id: 3,
    title: "Patagonia Wilderness Trek",
    destination: "Chile",
    durationDays: 10,
    image: "/images/patagonia.jpg",
    price: 4200,
  },
]);

// Active query state used for filtering
const activeSearch = ref("");
const activeDuration = ref("Any duration");

const handleSearch = () => {
  activeSearch.value = searchQuery.value;
  activeDuration.value = selectedDuration.value;
};

// Filtered list computed property
const filteredTours = computed(() => {
  return tours.value.filter((tour) => {
    const matchesDestination = tour.destination
      .toLowerCase()
      .includes(activeSearch.value.trim().toLowerCase());

    let matchesDuration = true;
    if (activeDuration.value === "1-3 Days") {
      matchesDuration = tour.durationDays >= 1 && tour.durationDays <= 3;
    } else if (activeDuration.value === "4-7 Days") {
      matchesDuration = tour.durationDays >= 4 && tour.durationDays <= 7;
    } else if (activeDuration.value === "8+ Days") {
      matchesDuration = tour.durationDays >= 8;
    }

    return matchesDestination && matchesDuration;
  });
});
</script>

<template>
  <div class="min-h-screen bg-surface text-on-surface">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center pt-20">
      <div class="absolute inset-0 z-0">
        <div
          class="bg-cover bg-center w-full h-full"
          style="background-image: url('/images/bannerbg.jpg')"
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
              for="destination-input"
              class="block font-label-md text-label-md text-on-surface-variant mb-2"
            >
              Destination
            </label>
            <div class="relative">
              <MapPin
                class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline pointer-events-none"
              />
              <input
                id="destination-input"
                v-model="searchQuery"
                class="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/60 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md text-body-md text-on-surface transition-colors"
                placeholder="Where to next?"
                type="text"
              />
            </div>
          </div>

          <div class="flex-1 w-full text-left">
            <label
              for="duration-select"
              class="block font-label-md text-label-md text-on-surface-variant mb-2"
            >
              Duration
            </label>
            <div class="relative">
              <Calendar
                class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline pointer-events-none"
              />
              <select
                id="duration-select"
                v-model="selectedDuration"
                class="w-full pl-10 pr-10 py-3 bg-surface-container-lowest border border-outline-variant/60 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md text-body-md text-on-surface appearance-none transition-colors cursor-pointer"
              >
                <option>Any duration</option>
                <option>1-3 Days</option>
                <option>4-7 Days</option>
                <option>8+ Days</option>
              </select>
              <ChevronDown
                class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline pointer-events-none"
              />
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

    <!-- Content Section -->
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

      <div
        v-if="filteredTours.length > 0"
        class="grid grid-cols-1 md:grid-cols-3 gap-gutter"
      >
        <TourCard
          v-for="tour in filteredTours"
          :key="tour.id"
          :tour="tour"
        />
      </div>

      <div v-else class="text-center py-12 text-on-surface-variant">
        <p class="font-body-lg">No expeditions found matching your search.</p>
      </div>
    </main>
  </div>
</template>