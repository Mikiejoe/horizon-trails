<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import {
  LucideArrowRight,
  LucideCalendarDays,
  LucideCheck,
  LucideCheckCircle,
  LucideChevronDown,
  LucideChevronRight,
  LucideCircleX,
  LucideGalleryVertical,
  LucideHeart,
  LucideLocate,
  LucideMinus,
  LucidePlus,
  LucideShare,
  LucideX,
} from 'lucide-vue-next';

const route = useRoute();
const tourSlug = computed(() => route.params.slug || 'serengeti');

// Interactive Accordion State
const activeDays = ref<number[]>([1]); // Day 1 open by default

const toggleAccordion = (dayNumber: number) => {
  if (activeDays.value.includes(dayNumber)) {
    activeDays.value = activeDays.value.filter((d) => d !== dayNumber);
  } else {
    activeDays.value.push(dayNumber);
  }
};

// Booking State & Calculations
const pricePerPerson = 1299;
const conservationFee = 150;
const travelers = ref<number>(2);
const selectedDate = ref<string>('');

const incrementTravelers = () => {
  if (travelers.value < 10) travelers.value++;
};

const decrementTravelers = () => {
  if (travelers.value > 1) travelers.value--;
};

const subtotal = computed(() => pricePerPerson * travelers.value);
const grandTotal = computed(() => subtotal.value + conservationFee);

// Itinerary Data Structure
const itinerary = [
  {
    day: 1,
    title: 'Arrival in Arusha',
    meals: ['D'],
    description:
      'Welcome to Tanzania! Upon arrival at Kilimanjaro International Airport, you will be met by our representative and transferred to your eco-lodge in Arusha. Spend the rest of the day relaxing in the lush gardens before a welcome dinner and briefing with your guide.',
  },
  {
    day: 2,
    title: 'Tarangire National Park',
    meals: ['B', 'L', 'D'],
    description:
      'After breakfast, we depart for Tarangire National Park, famous for its large elephant herds and iconic baobab trees. Enjoy a full day game drive with a picnic lunch. In the late afternoon, we head to our sustainable camp on the edge of the Great Rift Valley.',
  },
  {
    day: 3,
    title: 'Serengeti Central Plains',
    meals: ['B', 'L', 'D'],
    description:
      'Journey into the heart of the Serengeti. Spend the afternoon tracking big cats across the savanna before retiring to our eco-luxury tented camp.',
  },
];
</script>

<template>
  <main
    class="flex-grow pt-[104px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full"
  >
    <!-- Breadcrumbs & Hero Header -->
    <div class="mb-stack-lg">
      <nav
        class="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-stack-md"
      >
        <RouterLink class="hover:text-primary transition-colors" to="/">Home</RouterLink>
        <LucideChevronRight :size="16" />
        <RouterLink class="hover:text-primary transition-colors" to="/tours">Tours</RouterLink>
        <LucideChevronRight :size="16" />
        <span class="text-on-surface">Tanzania</span>
      </nav>

      <div
        class="flex flex-col md:flex-row md:justify-between md:items-end gap-stack-md"
      >
        <div>
          <h1 class="font-headline-xl text-headline-xl text-on-surface mb-2">
            7-Day Serengeti Expedition
          </h1>
          <div
            class="flex items-center gap-2 text-on-surface-variant font-body-md text-body-md"
          >
            <LucideLocate :size="20" />
            <span>Tanzania, East Africa</span>
          </div>
        </div>

        <div class="flex gap-4">
          <button
            class="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors font-label-md text-label-md"
          >
            <LucideShare :size="18" />
            Share
          </button>
          <button
            class="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors font-label-md text-label-md"
          >
            <LucideHeart :size="18" />
            Save
          </button>
        </div>
      </div>
    </div>

    <!-- Media Gallery (Bento Grid) -->
    <div
      class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[400px] md:h-[600px] mb-section-gap rounded-xl overflow-hidden shadow-sm"
    >
      <div class="md:col-span-2 md:row-span-2 relative group cursor-pointer">
        <img
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt="Serengeti plains at sunrise"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRDGHDba0on6ChEQeMU522QaCU8nndBSg9k6_0kBYpeOEPEiift_QgOFeKyrirtRmRXGlBnpAxOTZ8HUtrWsCIo673RhE94heZIRGvNxsnfl_ulYEjnxnAtlyow5PyuA4HOcA8n0c3sI4Fqh3EyJ64dW5fR6IDZz3MUlHGl_nO-3RLKZdgRy8osVvZM-BpNkzCzblG27rKKW5RhfPahvGw6rLj2z9LKMl52Y9rKI75FmLJz-tUyEt8"
        />
        <div
          class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"
        ></div>
      </div>

      <div class="hidden md:block relative group cursor-pointer">
        <img
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt="African Lion resting"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmD-17Cdz4uEqLK8ro6CiywZh-cVGe7jCx50-79zbJCsLf5yYa-rbxSBM6FuD0kreYLkSVUAGTHaez6DecCBNXhE48_ZIGnhguW4xVUi482imiaMm0RWZlgcvvI8no7E-ygzuUSItZcqIC2yFFxrcRLeK7ooT_cyDePl_amkk7NvEhudU3CXGoCFpk43W8Wosz7bReqWPf9bWN0ciBDgwkILSzKR-0xXVpcdSlyaQWj_yG2MX3m8Hv"
        />
        <div
          class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"
        ></div>
      </div>

      <div class="hidden md:block relative group cursor-pointer">
        <img
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt="Safari vehicle driving"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKfbp2qE5x5J81BiNfYfGOCJHkBHAbd9Fx0uuHFU6Ovhet-K2TLWTg4hzYNaVqU5LqN1OBr8jC1pmp06DnvPyF1pj0UU6EVp82J8Lk89snEyTFmdL7Q9okfGIGY22k8Gat45b_Wo5nuQE0C3_ITzqBUjPNudZYZnRwP-osyQhjVfsL4nSrx7gcq5a5wIfdwrsxvVClg44dzMpHmu4zsu7uuVPb_12pCj-7eDjSH1WtoFDvkJE48Pe5"
        />
        <div
          class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"
        ></div>
      </div>

      <div class="hidden md:block md:col-span-2 relative group cursor-pointer">
        <img
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt="Eco-lodge setup at dusk"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-25Z_n2fMgxdyuq5-d9HcZ8QbfACbjr1vfSvmgpidlJ8AS-pM3KfcpkMEFWA2ZukJhBMC0WO1EukZsn0gxGZlkKHkUn4kWtLkSy8ryV6xjn2nlAaKjNOzrLniiYVNv2Kyh-pNUcEjEDGvFOHjtI00ew2kmbaPgcKq9vFS8H9Ij_gwukdd8anLmbSaE9R6eCr3BX860cm5JzYgpqz88-uRveuLOOLbsptSf6UFR9Pp-pPkSxPS1wPm"
        />
        <div
          class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"
        ></div>
        <div
          class="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-sm px-4 py-2 rounded-full font-label-md text-label-md text-on-surface flex items-center gap-2"
        >
          <LucideGalleryVertical :size="18" />
          View all photos
        </div>
      </div>
    </div>

    <!-- Main Content & Sidebar Layout -->
    <div class="flex flex-col lg:flex-row gap-gutter relative">
      <!-- Left Column: Details & Itinerary -->
      <div class="lg:w-2/3 flex flex-col gap-section-gap">
        <!-- Overview Tab Content -->
        <section>
          <h2
            class="font-headline-lg text-headline-lg text-on-surface mb-stack-lg pb-4 border-b border-outline-variant/20"
          >
            Overview
          </h2>
          <p
            class="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg leading-relaxed"
          >
            Experience the raw beauty of the African wilderness on this
            comprehensive 7-day expedition through the Serengeti. Witness the
            Great Migration (seasonal), encounter the Big Five, and sleep under
            the stars in premium, sustainable eco-camps. Designed for nature
            enthusiasts seeking an immersive, low-impact journey without
            compromising on comfort.
          </p>

          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg bg-surface-container-low p-stack-lg rounded-xl border border-outline-variant/15"
          >
            <!-- Included -->
            <div>
              <h3
                class="font-headline-md text-headline-md text-on-surface mb-stack-md flex items-center gap-2"
              >
                <LucideCheckCircle class="text-primary" :size="20" />
                What's Included
              </h3>
              <ul
                class="space-y-3 font-body-md text-body-md text-on-surface-variant"
              >
                <li class="flex items-start gap-3">
                  <LucideCheck class="text-primary shrink-0 mt-1" :size="18" />
                  6 nights in eco-luxury camps
                </li>
                <li class="flex items-start gap-3">
                  <LucideCheck class="text-primary shrink-0 mt-1" :size="18" />
                  All meals (Breakfast, Lunch, Dinner)
                </li>
                <li class="flex items-start gap-3">
                  <LucideCheck class="text-primary shrink-0 mt-1" :size="18" />
                  Expert local naturalist guides
                </li>
                <li class="flex items-start gap-3">
                  <LucideCheck class="text-primary shrink-0 mt-1" :size="18" />
                  4x4 safari vehicle transport
                </li>
                <li class="flex items-start gap-3">
                  <LucideCheck class="text-primary shrink-0 mt-1" :size="18" />
                  National park fees &amp; conservation levies
                </li>
              </ul>
            </div>

            <!-- Excluded -->
            <div>
              <h3
                class="font-headline-md text-headline-md text-on-surface mb-stack-md flex items-center gap-2"
              >
                <LucideCircleX class="text-error" :size="20" />
                Not Included
              </h3>
              <ul
                class="space-y-3 font-body-md text-body-md text-on-surface-variant opacity-80"
              >
                <li class="flex items-start gap-3">
                  <LucideX class="text-error shrink-0 mt-1" :size="18" />
                  International flights
                </li>
                <li class="flex items-start gap-3">
                  <LucideX class="text-error shrink-0 mt-1" :size="18" />
                  Travel insurance (required)
                </li>
                <li class="flex items-start gap-3">
                  <LucideX class="text-error shrink-0 mt-1" :size="18" />
                  Optional hot air balloon safari
                </li>
                <li class="flex items-start gap-3">
                  <LucideX class="text-error shrink-0 mt-1" :size="18" />
                  Personal expenses &amp; tips
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Itinerary Accordion -->
        <section>
          <h2
            class="font-headline-lg text-headline-lg text-on-surface mb-stack-lg pb-4 border-b border-outline-variant/20"
          >
            Day-by-Day Itinerary
          </h2>
          
          <div class="flex flex-col gap-4">
            <div
              v-for="item in itinerary"
              :key="item.day"
              class="border border-outline-variant/20 rounded-xl overflow-hidden bg-surface"
            >
              <button
                type="button"
                class="w-full flex justify-between items-center p-stack-md hover:bg-surface-container-low transition-colors text-left"
                @click="toggleAccordion(item.day)"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="bg-primary/10 text-primary font-headline-md text-headline-md h-12 w-12 flex items-center justify-center rounded-lg"
                  >
                    {{ item.day }}
                  </div>
                  <div>
                    <h4 class="font-headline-md text-headline-md text-on-surface">
                      {{ item.title }}
                    </h4>
                    <div class="flex gap-2 mt-1">
                      <span
                        v-for="meal in item.meals"
                        :key="meal"
                        class="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded text-xs font-label-md"
                      >
                        {{ meal }}
                      </span>
                    </div>
                  </div>
                </div>

                <LucideChevronDown
                  class="transition-transform duration-300"
                  :class="{ 'rotate-180': activeDays.includes(item.day) }"
                />
              </button>

              <div
                v-show="activeDays.includes(item.day)"
                class="p-stack-md text-on-surface-variant font-body-md text-body-md bg-surface-container-lowest border-t border-outline-variant/10"
              >
                {{ item.description }}
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Right Column: Sticky Booking Widget -->
      <div class="lg:w-1/3">
        <div
          class="sticky top-[120px] bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-stack-lg shadow-md"
        >
          <div
            class="flex justify-between items-end mb-stack-lg pb-stack-md border-b border-outline-variant/20"
          >
            <div>
              <span class="text-on-surface-variant font-body-sm text-body-sm">From</span>
              <div class="font-headline-xl text-headline-xl text-on-surface">
                ${{ pricePerPerson.toLocaleString() }}
              </div>
            </div>
            <div class="text-on-surface-variant font-body-sm text-body-sm pb-2">
              / person
            </div>
          </div>

          <form @submit.prevent class="flex flex-col gap-stack-md">
            <!-- Dates -->
            <div class="relative">
              <label
                for="expedition-date"
                class="block font-label-md text-label-md text-on-surface-variant mb-unit"
              >
                Select Date
              </label>
              <div
                class="flex items-center border border-outline-variant rounded-lg bg-surface px-3 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all"
              >
                <LucideCalendarDays class="text-outline" :size="20" />
                <input
                  id="expedition-date"
                  v-model="selectedDate"
                  class="ml-2 w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface font-body-md text-body-md placeholder-outline cursor-pointer outline-none"
                  type="date"
                />
              </div>
            </div>

            <!-- Guests -->
            <div>
              <label
                class="block font-label-md text-label-md text-on-surface-variant mb-unit"
              >
                Travelers
              </label>
              <div
                class="flex items-center justify-between border border-outline-variant rounded-lg bg-surface px-4 py-3"
              >
                <span class="text-on-surface font-body-md text-body-md">
                  {{ travelers }} {{ travelers === 1 ? 'Guest' : 'Guests' }}
                </span>
                <div class="flex items-center gap-3">
                  <button
                    class="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-40"
                    type="button"
                    :disabled="travelers <= 1"
                    @click="decrementTravelers"
                  >
                    <LucideMinus :size="18" />
                  </button>
                  <span class="font-headline-md text-headline-md w-4 text-center">
                    {{ travelers }}
                  </span>
                  <button
                    class="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
                    type="button"
                    @click="incrementTravelers"
                  >
                    <LucidePlus :size="18" />
                  </button>
                </div>
              </div>
            </div>

            <!-- Summary Calculations -->
            <div
              class="mt-stack-sm bg-surface-container-low p-stack-md rounded-lg space-y-2"
            >
              <div
                class="flex justify-between font-body-sm text-body-sm text-on-surface-variant"
              >
                <span>${{ pricePerPerson.toLocaleString() }} x {{ travelers }} guests</span>
                <span>${{ subtotal.toLocaleString() }}</span>
              </div>
              <div
                class="flex justify-between font-body-sm text-body-sm text-on-surface-variant"
              >
                <span>Conservation Fee</span>
                <span>${{ conservationFee }}</span>
              </div>
              <div
                class="flex justify-between font-headline-md text-headline-md text-on-surface pt-2 border-t border-outline-variant/20 mt-2"
              >
                <span>Total</span>
                <span>${{ grandTotal.toLocaleString() }}</span>
              </div>
            </div>

            <RouterLink
              :to="`/tours/${tourSlug}/checkout`"
              class="w-full bg-primary text-on-primary font-headline-md text-[18px] py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-md mt-stack-sm flex items-center justify-center gap-2"
            >
              Book Expedition
              <LucideArrowRight :size="20" />
            </RouterLink>

            <p
              class="text-center font-body-sm text-body-sm text-on-surface-variant mt-2"
            >
              You won't be charged yet.
            </p>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>