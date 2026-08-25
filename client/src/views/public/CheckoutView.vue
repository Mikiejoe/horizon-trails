<template>
     <main
      class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap min-h-[calc(100vh-200px)]"
    >
      <div class="mb-12">
        <h1 class="font-headline-xl text-headline-xl text-on-surface mb-2">
          Complete Your Booking
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          Serengeti Great Migration Safari
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <!-- Main Content Area -->
        <div class="lg:col-span-8 flex flex-col gap-8">
          <!-- Breadcrumbs / Wizard Tracker -->
          <div class="flex items-center justify-between relative mb-4">
            <div
              class="absolute left-0 top-1/2 w-full h-[1px] bg-outline-variant/50 -z-10 transform -translate-y-1/2"
            ></div>
            <!-- Step 1 Active -->
            <div class="flex flex-col items-center gap-2 bg-background px-2">
              <div
                class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold font-label-md text-label-md shadow-[0_4px_12px_rgba(26,26,26,0.1)]"
              >
                1
              </div>
              <span class="font-label-md text-label-md text-primary"
                >Details</span
              >
            </div>
            <!-- Step 2 Inactive -->
            <div class="flex flex-col items-center gap-2 bg-background px-2">
              <div
                class="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant text-on-surface-variant flex items-center justify-center font-bold font-label-md text-label-md"
              >
                2
              </div>
              <span class="font-label-md text-label-md text-on-surface-variant"
                >Summary</span
              >
            </div>
            <!-- Step 3 Inactive -->
            <div class="flex flex-col items-center gap-2 bg-background px-2">
              <div
                class="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant text-on-surface-variant flex items-center justify-center font-bold font-label-md text-label-md"
              >
                3
              </div>
              <span class="font-label-md text-label-md text-on-surface-variant"
                >Payment</span
              >
            </div>
          </div>
          <!-- Form Card -->
          <div
            class="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/15 shadow-[0_4px_12px_rgba(26,26,26,0.05)]"
          >
            <h2
              class="font-headline-md text-headline-md text-on-surface mb-6 border-b border-outline-variant/10 pb-4"
            >
              Traveller Details
            </h2>
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label
                    class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block"
                    >First Name</label
                  >
                  <input
                    class="w-full bg-[#F3F0E9] border border-outline/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-on-surface"
                    placeholder="Jane"
                    type="text"
                  />
                </div>
                <div class="space-y-2">
                  <label
                    class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block"
                    >Last Name</label
                  >
                  <input
                    class="w-full bg-[#F3F0E9] border border-outline/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-on-surface"
                    placeholder="Doe"
                    type="text"
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label
                  class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block"
                  >Email Address</label
                >
                <input
                  class="w-full bg-[#F3F0E9] border border-outline/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-on-surface"
                  placeholder="jane.doe@example.com"
                  type="email"
                />
              </div>
              <div class="space-y-2">
                <label
                  class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block"
                  >Dietary Requirements</label
                >
                <select
                  class="w-full bg-[#F3F0E9] border border-outline/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-on-surface appearance-none"
                >
                  <option>None</option>
                  <option>Vegetarian</option>
                  <option>Vegan</option>
                  <option>Gluten-Free</option>
                  <option>Other (Please specify below)</option>
                </select>
              </div>
              <div class="space-y-2">
                <label
                  class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block"
                  >Special Requests</label
                >
                <textarea
                  class="w-full bg-[#F3F0E9] border border-outline/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-on-surface resize-none"
                  placeholder="Any specific needs or celebrations?"
                  rows="4"
                ></textarea>
              </div>
              <div class="pt-6 flex justify-end">
                <RouterLink
                to="/tours/serengeti/checkout/summary"
                  class="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md font-bold hover:bg-primary-container transition-colors shadow-sm flex items-center gap-2"
                  
                >
                  Continue to Summary
                  <LucideArrowRight/>
                </RouterLink>
              </div>
            </form>
          </div>
        </div>
        <!-- Sidebar / Order Summary -->
        <div class="lg:col-span-4">
          <div
            class="bg-surface-container-lowest rounded-xl border border-outline-variant/15 shadow-[0_4px_12px_rgba(26,26,26,0.05)] overflow-hidden sticky top-28"
          >
            <!-- Image -->
            <div class="h-48 w-full bg-surface-container-high relative">
              <img
                class="w-full h-full object-cover"
                data-alt="A sweeping wide-angle photograph of the Serengeti plains at golden hour. Warm, golden sunlight bathes the dry grass, highlighting a herd of wildebeest in the distance. The aesthetic is organic, luxurious, and earthy, aligning perfectly with a premium eco-tourism brand. Soft shadows and high-contrast details create a sense of vast depth and adventure."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB_Ws7K76c65naJf4T00sNZhNr7ndje05wkYWQoV6A4ObcACIWU1RbRwQAPF6TwpFavhcvwW66YGChWd1YqDuTmfgVZh-EdrktoRFDWvU8l3temF52VXvxdqyt2OvayUm7ZvtXJg9Pett5KuKV8x8Rx6f_MmOLgVonVo4mrZZ77DnwWROqCtdqusLb8xsBmUkwsgt19WjJT4vPMdAz-zkXgnyeRKDeqVtpDW5wK9jQCgP0R3Q6ZHaY"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 text-white">
                <p
                  class="font-label-md text-label-md tracking-wider uppercase opacity-90"
                >
                  Tanzania
                </p>
                <h3 class="font-headline-md text-headline-md">
                  Serengeti Safari
                </h3>
              </div>
            </div>
            <div class="p-6">
              <h4
                class="font-headline-md text-headline-md text-on-surface mb-4"
              >
                Booking Summary
              </h4>
              <div
                class="space-y-4 font-body-sm text-body-sm text-on-surface-variant"
              >
                <div
                  class="flex justify-between items-center pb-4 border-b border-outline-variant/10"
                >
                  <span class="flex items-center gap-2"
                    ><LucideCalendarDays class="material-symbols-outlined text-lg"
                      />
                    Date</span
                  >
                  <span class="font-semibold text-on-surface"
                    >Oct 12 - Oct 18, 2024</span
                  >
                </div>
                <div
                  class="flex justify-between items-center pb-4 border-b border-outline-variant/10"
                >
                  <span class="flex items-center gap-2"
                    ><LucideUsers class="material-symbols-outlined text-lg"
                      />
                    Guests</span
                  >
                  <span class="font-semibold text-on-surface">2 Adults</span>
                </div>
                <div class="pt-4 space-y-2">
                  <div class="flex justify-between">
                    <span>Base Package (x2)</span>
                    <span>$4,500.00</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Eco-Conservation Fee</span>
                    <span>$150.00</span>
                  </div>
                  <div
                    class="flex justify-between text-on-surface-variant/70 text-xs"
                  >
                    <span>Taxes &amp; Fees</span>
                    <span>$230.00</span>
                  </div>
                </div>
              </div>
              <div
                class="mt-6 pt-6 border-t border-outline-variant/20 flex justify-between items-end"
              >
                <div>
                  <p
                    class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                  >
                    Total
                  </p>
                  <p class="text-xs text-on-surface-variant/70">
                    Includes all taxes
                  </p>
                </div>
                <p
                  class="font-headline-lg text-headline-lg text-primary font-bold"
                >
                  $4,880.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script setup lang="ts">
import { LucideArrowRight, LucideCalendarDays, LucideUsers } from 'lucide-vue-next';


</script>

<style scoped>

</style>