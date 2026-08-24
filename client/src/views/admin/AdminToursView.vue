<template>
    <main
      class="flex-1 ml-64 p-margin-desktop min-h-screen flex flex-col gap-section-gap max-w-container-max"
    >
      <!-- Page Header & Actions -->
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <div>
          <h1 class="font-headline-lg text-headline-lg text-on-surface">
            Tour Management
          </h1>
          <p class="font-body-md text-body-md text-on-surface-variant mt-2">
            Manage and monitor all your eco-tours, statuses, and pricing.
          </p>
        </div>
        <div class="flex gap-4 w-full md:w-auto">
          <div class="relative w-full md:w-64">
            <LucideSearch class="h-5 w-5  absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/70"/>
            <input
              class="w-full bg-[#F3F0E9] border border-outline/30 rounded pl-10 pr-4 py-2 focus:border-primary focus:ring-0 font-body-sm text-body-sm transition-colors"
              placeholder="Search tours..."
              type="text"
            />
          </div>
          <button
            class="shrink-0 flex items-center justify-center gap-2 border border-outline-variant text-on-surface-variant py-2 px-4 rounded hover:bg-surface-container-low transition-colors font-label-md text-label-md"
          >
            <LucideFilter class="h-5 w-5" />
            Filter
          </button>
        </div>
      </div>
      <!-- Data Table Card -->
      <div
        class="bg-surface-container-lowest rounded-xl shadow-elevation-1 border border-outline-variant/15 overflow-hidden"
      >
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr
                class="border-b border-outline-variant/20 bg-surface-container-low/50"
              >
                <th
                  class="py-4 px-6 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                >
                  Tour Name &amp; Location
                </th>
                <th
                  class="py-4 px-6 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  class="py-4 px-6 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                >
                  Price (Base)
                </th>
                <th
                  class="py-4 px-6 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                >
                  Duration
                </th>
                <th
                  class="py-4 px-6 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-outline-variant/10">
              <!-- Row 1 -->
              <tr
                class="hover:bg-surface-container-lowest transition-colors group"
              >
                <td class="py-4 px-6">
                  <div class="flex items-center gap-4">
                    <div
                      class="h-12 w-16 rounded overflow-hidden shrink-0 bg-surface-variant"
                    >
                      <img
                        class="w-full h-full object-cover"
                        data-alt="A lush green rainforest canopy viewed from above in the early morning mist. High quality environmental photography. Soft natural lighting. Earthy greens and gentle whites. Serene and inspiring mood."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGbbIwW-YpLU6BzZQZRFKVURdwfdRjJcVyjlXZptlOleim-7XveKmzC8CbC-R1de38rKDZo5gi7my21Sc346wSXSlY3c4MqvTbRcDIh5K6lP-61Xm8kgksy5WTIp9ye2sGmTGufHbalJppBUuDni0g-_XUlGyO6XsjX4KtiDXnZkTfhhkZIYkUpZMn8yUF6uXYCQq2sLOEdLMgOAxTyCj5y44e1ZP3q1ZrAhheFjfXbGeiwuhLtEL3"
                      />
                    </div>
                    <div>
                      <p
                        class="font-body-md text-body-md font-semibold text-on-surface"
                      >
                        Amazon Rainforest Expedition
                      </p>
                      <p
                        class="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1"
                      >
                        <LucideMapPin class="h-4 w-4 text-on-surface-variant" />
                        Brazil
                      </p>
                    </div>
                  </div>
                </td>
                <td class="py-4 px-6">
                  <span
                    class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E5F2EA] text-[#2E7A4A] font-label-md text-label-md"
                  >
                    <span class="w-2 h-2 rounded-full bg-[#48A366]"></span>
                    Active
                  </span>
                </td>
                <td class="py-4 px-6 font-body-md text-body-md text-on-surface">
                  $1,450
                </td>
                <td
                  class="py-4 px-6 font-body-md text-body-md text-on-surface-variant"
                >
                  7 Days
                </td>
                <td class="py-4 px-6 text-right">
                  <div
                    class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <button
                      class="p-2 text-on-surface-variant hover:text-primary transition-colors"
                      title="Edit"
                    >
                      <LucidePencil class="h-5 w-5" />
                    </button>
                    <button
                      class="p-2 text-on-surface-variant hover:text-primary transition-colors"
                      title="Duplicate"
                    >
                      <LucideCopy class="h-5 w-5" />
                    </button>
                    <button
                      class="p-2 text-on-surface-variant hover:text-error transition-colors"
                      title="Delete"
                    >
                      <LucideTrash class="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
              <!-- Row 2 -->
              <tr
                class="hover:bg-surface-container-lowest transition-colors group"
              >
                <td class="py-4 px-6">
                  <div class="flex items-center gap-4">
                    <div
                      class="h-12 w-16 rounded overflow-hidden shrink-0 bg-surface-variant"
                    >
                      <img
                        class="w-full h-full object-cover"
                        data-alt="Rugged mountain peaks at sunset with snow caps glowing orange and pink. High contrast nature photography. Deep shadows and vibrant warm highlights. Adventurous and grand aesthetic."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9wmy3cujsdMQZmd_HsLxmkDauIZVkb-wEwmzM-AzskNjZ0QfuaJ-SV6OUFkptJEh1AtAccLDEgZrVI4T1soOTaRxrLB5TdN2pnrZ_wIDMIhbFiSvTiD5xp7mTCu79QdxD3lBJIMED4Wxi38rTp9ljWrPwiRZDn0C5UU1zOs-tnSlmguQfgfLaEKNoril5h17ZVMqjoMhhlGT1oO7t5AJ69x8rShhmvOf5Vp-fIEBY0GJ1Xt55WXTc"
                      />
                    </div>
                    <div>
                      <p
                        class="font-body-md text-body-md font-semibold text-on-surface"
                      >
                        Patagonia Peaks Trek
                      </p>
                      <p
                        class="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1"
                      >
                        <LucideMapPin class="h-4 w-4 text-on-surface-variant" />
                        Chile &amp; Argentina
                      </p>
                    </div>
                  </div>
                </td>
                <td class="py-4 px-6">
                  <span
                    class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-md text-label-md"
                  >
                    <span
                      class="w-2 h-2 rounded-full bg-outline-variant"
                    ></span>
                    Draft
                  </span>
                </td>
                <td class="py-4 px-6 font-body-md text-body-md text-on-surface">
                  $2,200
                </td>
                <td
                  class="py-4 px-6 font-body-md text-body-md text-on-surface-variant"
                >
                  10 Days
                </td>
                <td class="py-4 px-6 text-right">
                  <div
                    class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <button
                      class="p-2 text-on-surface-variant hover:text-primary transition-colors"
                      title="Edit"
                    >
                      <LucidePencil class="h-5 w-5" />
                    </button>
                    <button
                      class="p-2 text-on-surface-variant hover:text-primary transition-colors"
                      title="Duplicate"
                    >
                      <LucideCopy class="h-5 w-5" />
                    </button>
                    <button
                      class="p-2 text-on-surface-variant hover:text-error transition-colors"
                      title="Delete"
                    >
                      <LucideTrash class="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
              <!-- Row 3 -->
              <tr
                class="hover:bg-surface-container-lowest transition-colors group"
              >
                <td class="py-4 px-6">
                  <div class="flex items-center gap-4">
                    <div
                      class="h-12 w-16 rounded overflow-hidden shrink-0 bg-surface-variant"
                    >
                      <img
                        class="w-full h-full object-cover"
                        data-alt="Clear turquoise coastal waters washing over smooth grey pebbles on a secluded beach. Minimalist nature photography. High key bright lighting. Calming and pristine atmosphere."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkEX4hbE_PJBXR0QBDXgxPowj4FEs-hx17DtqoFAeRkse2y3X5LHzT1vXPfHInT3zZNmp-jyZ_dmGuk9RO9VqImsObp8VLsEsGvZKEyJLGJz8JSo5ahgRu9gskhYAIKmUOPNIqgzgMSk-bi-eYpnAQ06xdvA_NE6zDHCRnr7nFvtb9RkaTWNXdhWCLtPAaMRfqt7b1mFJ0iPY6S3IZRiXZ9dBvyKALH9ii_VvuGnun06biemZmBccq"
                      />
                    </div>
                    <div>
                      <p
                        class="font-body-md text-body-md font-semibold text-on-surface"
                      >
                        Coastal Conservation Walk
                      </p>
                      <p
                        class="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1"
                      >
                        <LucideMapPin class="h-4 w-4 text-on-surface-variant" />
                        New Zealand
                      </p>
                    </div>
                  </div>
                </td>
                <td class="py-4 px-6">
                  <span
                    class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E5F2EA] text-[#2E7A4A] font-label-md text-label-md"
                  >
                    <span class="w-2 h-2 rounded-full bg-[#48A366]"></span>
                    Active
                  </span>
                </td>
                <td class="py-4 px-6 font-body-md text-body-md text-on-surface">
                  $850
                </td>
                <td
                  class="py-4 px-6 font-body-md text-body-md text-on-surface-variant"
                >
                  3 Days
                </td>
                <td class="py-4 px-6 text-right">
                  <div
                    class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <button
                      class="p-2 text-on-surface-variant hover:text-primary transition-colors"
                      title="Edit"
                    >
                      <LucidePencil class="h-5 w-5" />
                    </button>
                    <button
                      class="p-2 text-on-surface-variant hover:text-primary transition-colors"
                      title="Duplicate"
                    >
                      <LucideCopy class="h-5 w-5" />
                    </button>
                    <button
                      class="p-2 text-on-surface-variant hover:text-error transition-colors"
                      title="Delete"
                    >
                      <LucideTrash class="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Pagination Footer -->
        <div
          class="px-6 py-4 border-t border-outline-variant/10 flex items-center justify-between bg-surface-container-low/30"
        >
          <span class="font-body-sm text-body-sm text-on-surface-variant"
            >Showing 1 to 3 of 12 tours</span
          >
          <div class="flex gap-2">
            <button
              class="px-3 py-1 border border-outline-variant/50 rounded text-on-surface-variant hover:bg-surface-variant transition-colors disabled:opacity-50"
              disabled
            >
              Prev
            </button>
            <button
              class="px-3 py-1 border border-outline-variant/50 rounded text-on-surface-variant hover:bg-surface-variant transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
</template>

<script setup lang="ts">
import { LucideCopy, LucideFilter,  LucideMapPin, LucidePencil, LucideSearch, LucideTrash } from 'lucide-vue-next';


</script>

