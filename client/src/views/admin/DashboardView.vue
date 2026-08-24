<template>
  <main
    class="flex-1 ml-0 md:ml-64 p-margin-mobile md:p-margin-desktop bg-surface min-h-screen"
  >
    <!-- Header Section -->
    <header class="mb-stack-lg flex justify-between items-end">
      <div>
        <h2 class="font-headline-lg text-headline-lg text-on-surface">
          Dashboard Overview
        </h2>
        <p class="font-body-md text-body-md text-on-surface-variant mt-unit">
          Welcome back. Here's what's happening today.
        </p>
      </div>
      <!-- Mobile Menu Toggle (Placeholder for real implementation) -->
      <button
        class="md:hidden text-on-surface-variant p-2 rounded-lg bg-surface-container hover:bg-surface-container-high"
      >
        <LucideMenu class="h-5 w-5" />
      </button>
    </header>
    <!-- KPI Cards Grid -->
    <section
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-section-gap"
    >
      <!-- Card 1 -->
      <div
        class="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant/15 shadow-sm hover:-translate-y-[2px] transition-transform duration-300"
      >
        <div class="flex justify-between items-start mb-stack-sm">
          <span
            class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
            >Total Bookings</span
          >
          <div class="p-2 bg-secondary-container rounded-lg text-secondary">
            <LucideCalendarCheck2 class="h-5 w-5" />
          </div>
        </div>
        <div class="font-headline-xl text-headline-xl text-on-surface">
          1,248
        </div>
        <div class="flex items-center gap-unit mt-stack-sm text-secondary">
          <LucideTrendingUp class="h-4 w-4" />
          <span class="font-body-sm text-body-sm">+12% this month</span>
        </div>
      </div>
      <!-- Card 2 -->
      <div
        class="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant/15 shadow-sm hover:-translate-y-[2px] transition-transform duration-300"
      >
        <div class="flex justify-between items-start mb-stack-sm">
          <span
            class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
            >Active Tours</span
          >
          <div
            class="p-2 bg-tertiary-container rounded-lg text-on-tertiary-container"
          >
            <LucideCompass class="h-5 w-5" />
          </div>
        </div>
        <div class="font-headline-xl text-headline-xl text-on-surface">42</div>
        <div
          class="flex items-center gap-unit mt-stack-sm text-on-surface-variant"
        >
          <LucideCircleCheck class="h-4 w-4"/>
          <span class="font-body-sm text-body-sm">All operating normally</span>
        </div>
      </div>
      <!-- Card 3 -->
      <div
        class="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant/15 shadow-sm hover:-translate-y-[2px] transition-transform duration-300"
      >
        <div class="flex justify-between items-start mb-stack-sm">
          <span
            class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
            >Revenue</span
          >
          <div
            class="p-2 bg-primary-container rounded-lg text-on-primary-container"
          >
            <LucideBanknote class="h-5 w-5" />
          </div>
        </div>
        <div class="font-headline-xl text-headline-xl text-on-surface">
          $84.5k
        </div>
        <div class="flex items-center gap-unit mt-stack-sm text-secondary">
          <LucideTrendingUp class="h-4 w-4" />
          <span class="font-body-sm text-body-sm">+8% vs last week</span>
        </div>
      </div>
      <!-- Card 4 -->
      <div
        class="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant/15 shadow-sm hover:-translate-y-[2px] transition-transform duration-300"
      >
        <div class="flex justify-between items-start mb-stack-sm">
          <span
            class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
            >Pending Inquiries</span
          >
          <div
            class="p-2 bg-error-container rounded-lg text-on-error-container"
          >
            <LucideMail class="h-5 w-5" />
          </div>
        </div>
        <div class="font-headline-xl text-headline-xl text-on-surface">18</div>
        <div class="flex items-center gap-unit mt-stack-sm text-error">
          <LucideAlertTriangle class="h-4 w-4" />
          <span class="font-body-sm text-body-sm">Requires attention</span>
        </div>
      </div>
    </section>
    <!-- Recent Activity Section (Bento-style layout) -->
    <section class="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
      <!-- Table Container -->
      <div
        class="xl:col-span-2 bg-surface-container-lowest rounded-xl border border-outline-variant/15 shadow-sm overflow-hidden"
      >
        <div
          class="p-stack-md border-b border-outline-variant/10 flex justify-between items-center"
        >
          <h3 class="font-headline-md text-headline-md text-on-surface">
            Recent Bookings
          </h3>
          <button
            class="text-secondary font-label-md text-label-md hover:underline"
          >
            View All
          </button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr
                class="bg-surface-container-low text-on-surface-variant font-label-md text-label-md uppercase tracking-wider border-b border-outline-variant/10"
              >
                <th class="p-stack-md font-medium">Customer</th>
                <th class="p-stack-md font-medium">Tour</th>
                <th class="p-stack-md font-medium">Date</th>
                <th class="p-stack-md font-medium">Status</th>
                <th class="p-stack-md font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody class="font-body-sm text-body-sm">
              <tr
                class="border-b border-outline-variant/5 hover:bg-surface-container-low/50 transition-colors"
              >
                <td class="p-stack-md">
                  <div class="flex items-center gap-stack-sm">
                    <div
                      class="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold"
                    >
                      ES
                    </div>
                    <span class="font-medium text-on-surface">Emma Stone</span>
                  </div>
                </td>
                <td class="p-stack-md text-on-surface-variant">
                  Rainforest Canopy Walk
                </td>
                <td class="p-stack-md text-on-surface-variant">Oct 24, 2024</td>
                <td class="p-stack-md">
                  <span
                    class="inline-flex items-center px-2 py-1 rounded-full bg-secondary-container text-secondary font-label-md text-label-md text-[10px]"
                    >Confirmed</span
                  >
                </td>
                <td class="p-stack-md text-right font-medium text-on-surface">
                  $240
                </td>
              </tr>
              <tr
                class="border-b border-outline-variant/5 hover:bg-surface-container-low/50 transition-colors"
              >
                <td class="p-stack-md">
                  <div class="flex items-center gap-stack-sm">
                    <div
                      class="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold"
                    >
                      JD
                    </div>
                    <span class="font-medium text-on-surface">John Doe</span>
                  </div>
                </td>
                <td class="p-stack-md text-on-surface-variant">
                  Volcano Sunrise Trek
                </td>
                <td class="p-stack-md text-on-surface-variant">Oct 26, 2024</td>
                <td class="p-stack-md">
                  <span
                    class="inline-flex items-center px-2 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-md text-label-md text-[10px]"
                    >Pending</span
                  >
                </td>
                <td class="p-stack-md text-right font-medium text-on-surface">
                  $180
                </td>
              </tr>
              <tr
                class="border-b border-outline-variant/5 hover:bg-surface-container-low/50 transition-colors"
              >
                <td class="p-stack-md">
                  <div class="flex items-center gap-stack-sm">
                    <div
                      class="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold"
                    >
                      SJ
                    </div>
                    <span class="font-medium text-on-surface"
                      >Sarah Jenkins</span
                    >
                  </div>
                </td>
                <td class="p-stack-md text-on-surface-variant">
                  Coastal Kayaking
                </td>
                <td class="p-stack-md text-on-surface-variant">Oct 28, 2024</td>
                <td class="p-stack-md">
                  <span
                    class="inline-flex items-center px-2 py-1 rounded-full bg-secondary-container text-secondary font-label-md text-label-md text-[10px]"
                    >Confirmed</span
                  >
                </td>
                <td class="p-stack-md text-right font-medium text-on-surface">
                  $120
                </td>
              </tr>
              <tr class="hover:bg-surface-container-low/50 transition-colors">
                <td class="p-stack-md">
                  <div class="flex items-center gap-stack-sm">
                    <div
                      class="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-bold"
                    >
                      MW
                    </div>
                    <span class="font-medium text-on-surface">Mike Woods</span>
                  </div>
                </td>
                <td class="p-stack-md text-on-surface-variant">
                  Desert Safari
                </td>
                <td class="p-stack-md text-on-surface-variant">Nov 02, 2024</td>
                <td class="p-stack-md">
                  <span
                    class="inline-flex items-center px-2 py-1 rounded-full bg-error-container text-error font-label-md text-label-md text-[10px]"
                    >Cancelled</span
                  >
                </td>
                <td class="p-stack-md text-right font-medium text-on-surface">
                  $350
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Side Panel (Quick Actions / Highlights) -->
      <div
        class="bg-surface-container-low rounded-xl border border-outline-variant/15 p-stack-lg flex flex-col gap-stack-md shadow-sm"
      >
        <h3
          class="font-headline-md text-headline-md text-on-surface border-b border-outline-variant/10 pb-stack-sm"
        >
          Quick Actions
        </h3>
        <div class="flex flex-col gap-stack-sm mt-stack-sm">
          <button
            class="w-full flex items-center justify-between p-stack-sm bg-surface-container-highest hover:bg-surface-variant rounded-lg border border-outline-variant/20 transition-colors text-left"
          >
            <div class="flex items-center gap-stack-sm text-on-surface">
              <LucideMic2 class="h-5 w-5 text-on-surface-variant" />
              <span class="font-body-sm text-body-sm font-medium"
                >Create Promotion</span
              >
            </div>
        <LucideChevronRight class="h-5 w-5 text-on-surface-variant" />
          </button>
          <button
            class="w-full flex items-center justify-between p-stack-sm bg-surface-container-highest hover:bg-surface-variant rounded-lg border border-outline-variant/20 transition-colors text-left"
          >
            <div class="flex items-center gap-stack-sm text-on-surface">
              <LucideBot class="h-5 w-5 text-on-surface-variant" />
              <span class="font-body-sm text-body-sm font-medium"
                >Review Support Tickets</span
              >
            </div>
            <LucideChevronRight class="h-5 w-5 text-on-surface-variant" />
          </button>
        </div>
        <!-- Featured Image / Promo area within dashboard -->
        <div class="mt-auto pt-stack-md">
          <div
            class="relative w-full h-40 rounded-lg overflow-hidden border border-outline-variant/15 shadow-sm"
          >
            <img
              class="absolute inset-0 w-full h-full object-cover"
              data-alt="A sweeping aerial photograph of a lush green mountain valley at sunrise, emphasizing a pristine natural environment and sustainable travel aesthetic. High quality."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX5fXoJ5eS27bNekTdH8IQ99peXVDJJKECs2Z8Iie6fxQ5ok751dPbEz4Yq3qLvebQBvi9grVmhqnzTqBeLpAY751eITUkeYACDz9MXcZCTiBoRidQTPWjzgixBCcbbycLoQi073XmY__ACb6GZYDwDqAXsd7St8TQNLan69Ks98ZmjjIsI2uVFi6_WKQStFV0gw7rye3-iqGmQ3wAoHcQn6CWf7NwL0iStemyWTAzkdRnVT48WE2W"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 to-transparent flex flex-col justify-end p-stack-md"
            >
              <span
                class="font-label-md text-label-md text-inverse-on-surface mb-unit"
                >Upcoming Season</span
              >
              <span
                class="font-headline-sm text-headline-sm text-inverse-on-surface font-bold"
                >Prepare for Summer</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { LucideAlertTriangle, LucideBanknote, LucideBot, LucideCalendarCheck2, LucideChevronRight, LucideCircleCheck, LucideCompass, LucideMail, LucideMenu, LucideMic2, LucideTrendingUp } from 'lucide-vue-next';

</script>

<style scoped></style>
