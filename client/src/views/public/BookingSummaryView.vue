<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import {
  LucideArrowLeft,
  LucideArrowRight,
  LucideCalendar,
  LucideCheck,
  LucideInfo,
  LucideLock,
  LucideMapPin,
  LucideReceiptText,
  LucideTrees,
} from "lucide-vue-next";

const route = useRoute();
const tourSlug = computed(() => route.params.slug || "serengeti");
</script>

<template>
  <main
    class="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap"
  >
    <!-- Progress Stepper -->
    <div class="max-w-3xl mx-auto mb-section-gap">
      <div class="flex items-center justify-between relative">
        <!-- Line background -->
        <div
          class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-outline-variant/30 -z-10"
        ></div>

        <!-- Step 1: Details (Completed) -->
        <div class="flex flex-col items-center gap-stack-sm bg-background px-4">
          <div
            class="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-md text-label-md"
          >
            <LucideCheck :size="16" />
          </div>
          <span class="font-label-md text-label-md text-on-surface-variant">
            Details
          </span>
        </div>

        <!-- Step 2: Summary (Active) -->
        <div class="flex flex-col items-center gap-stack-sm bg-background px-4">
          <div
            class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md shadow-md ring-4 ring-primary/20"
          >
            2
          </div>
          <span class="font-label-md text-label-md text-primary">Summary</span>
        </div>

        <!-- Step 3: Payment (Pending) -->
        <div class="flex flex-col items-center gap-stack-sm bg-background px-4">
          <div
            class="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-md text-label-md border border-outline-variant"
          >
            3
          </div>
          <span class="font-label-md text-label-md text-outline">Payment</span>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto">
      <h1
        class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-stack-lg text-center"
      >
        Review your journey
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <!-- Main Order Summary (Bento Grid Style) -->
        <div class="md:col-span-8 flex flex-col gap-gutter">
          <!-- Hero Image & Tour Info -->
          <div
            class="stone-card rounded-xl overflow-hidden flex flex-col sm:flex-row border border-outline-variant/15 bg-surface-container-lowest"
          >
            <div class="w-full sm:w-2/5 h-48 sm:h-auto relative">
              <img
                class="absolute inset-0 w-full h-full object-cover"
                alt="Golden hour view of the Serengeti plains during the Great Migration with wildebeest herds"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU8VTYgV0ZhD7U5eBMGfFH0R18L_yprlvMuYnqig2uBSZKtAdIkY1w1M6MN63qUmRH-sL9owWSPz9ghApO3zULwpQ3ztK6QqmcJvoay4mfAjL-AyksfC_EncoPiIKXAKpcjfG70Ch3oHLGBop3Kd3yuVZ86NQ82g9kV1rQMAVDabhL8TPJVgtP5AulIKzFO7hP46iZ42xj9VxhB9oEg-vIhEcZTaiRg9HrDK5hjf2oGane6b7m3Bn9"
              />
            </div>
            <div class="p-gutter flex flex-col justify-center flex-grow">
              <div class="flex items-center gap-2 mb-2">
                <span
                  class="bg-surface-container-high text-primary px-3 py-1 rounded-full font-label-md text-label-md inline-flex items-center gap-1"
                >
                  <LucideTrees :size="14" />
                  Eco-Certified
                </span>
              </div>
              <h2
                class="font-headline-md text-headline-md text-on-surface mb-1"
              >
                Serengeti Great Migration Safari
              </h2>
              <p
                class="font-body-sm text-body-sm text-on-surface-variant mb-4 flex items-center gap-1"
              >
                <LucideMapPin :size="16" />
                Tanzania, East Africa
              </p>
            </div>
          </div>

          <!-- Itinerary Details -->
          <div
            class="stone-card rounded-xl p-gutter border border-outline-variant/15 bg-surface-container-lowest"
          >
            <h3
              class="font-headline-sm text-headline-sm text-on-surface mb-stack-md flex items-center gap-2"
            >
              <LucideCalendar class="text-primary" :size="20" />
              Trip Details
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-stack-lg">
              <div>
                <p
                  class="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider"
                >
                  Date
                </p>
                <p
                  class="font-body-md text-body-md text-on-surface font-semibold"
                >
                  Oct 12 - Oct 19, 2026
                </p>
                <p class="font-body-sm text-body-sm text-outline mt-1">
                  8 Days, 7 Nights
                </p>
              </div>
              <div>
                <p
                  class="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider"
                >
                  Travellers
                </p>
                <p
                  class="font-body-md text-body-md text-on-surface font-semibold"
                >
                  2 Adults
                </p>
                <p class="font-body-sm text-body-sm text-outline mt-1">
                  Double Occupancy Tent
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Price Breakdown Sidebar -->
        <div class="md:col-span-4">
          <div
            class="stone-card rounded-xl p-gutter border border-outline-variant/15 bg-surface-container-lowest sticky top-28"
          >
            <h3
              class="font-headline-sm text-headline-sm text-on-surface mb-stack-md flex items-center gap-2"
            >
              <LucideReceiptText class="text-primary" :size="20" />
              Price Breakdown
            </h3>
            <div
              class="flex flex-col gap-stack-sm mb-stack-md font-body-sm text-body-sm"
            >
              <div
                class="flex justify-between items-center text-on-surface-variant"
              >
                <span>Base Price (2 Adults)</span>
                <span>$8,400.00</span>
              </div>
              <div
                class="flex justify-between items-center text-on-surface-variant"
              >
                <span class="flex items-center gap-1 cursor-help group relative">
                  Eco-conservation fee
                  <LucideInfo :size="14" />
                </span>
                <span>$300.00</span>
              </div>
              <div
                class="flex justify-between items-center text-on-surface-variant"
              >
                <span>Taxes &amp; Fees</span>
                <span>$420.00</span>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-px w-full bg-outline-variant/30 mb-stack-md"></div>

            <div class="flex justify-between items-end mb-stack-lg">
              <span
                class="font-body-md text-body-md text-on-surface font-semibold"
              >
                Total
              </span>
              <span
                class="font-headline-md text-headline-md text-primary font-bold"
              >
                $9,120.00
              </span>
            </div>

            <div class="flex flex-col gap-stack-sm">
              <RouterLink
                :to="`/tours/${tourSlug}/checkout/payment`"
                class="w-full bg-primary text-on-primary py-[12px] px-gutter rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-2"
              >
                Proceed to Payment
                <LucideArrowRight :size="18" />
              </RouterLink>
              <RouterLink
                :to="`/tours/${tourSlug}/checkout`"
                class="w-full border-2 border-outline-variant text-on-surface-variant py-[10px] px-gutter rounded-lg font-label-md text-label-md hover:bg-surface-container-high hover:border-on-surface-variant transition-colors flex items-center justify-center gap-2"
              >
                <LucideArrowLeft :size="18" />
                Back to Details
              </RouterLink>
            </div>

            <p
              class="font-body-sm text-[12px] text-outline text-center mt-stack-md flex items-center justify-center gap-1"
            >
              <LucideLock :size="14" />
              Secure checkout encrypted via SSL
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>