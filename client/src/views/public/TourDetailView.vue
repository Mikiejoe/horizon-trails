<template>
  <main
    class="flex-grow pt-[104px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full"
  >
    <!-- Breadcrumbs & Hero Header -->
    <div class="mb-stack-lg">
      <nav
        class="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-stack-md"
      >
        <a class="hover:text-primary transition-colors" href="#">Home</a>
        <LucideChevronRight size="16" />
        <a class="hover:text-primary transition-colors" href="#">Tours</a>

        <LucideChevronRight size="16" />
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
            <LucideLocate size="20"/>
            <span>Tanzania, East Africa</span>
          </div>
        </div>
        <div class="flex gap-4">
          <button
            class="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors font-label-md text-label-md"
          >
            <LucideShare size="18"/>
            Share
          </button>
          <button
            class="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors font-label-md text-label-md"
          >
                        <LucideHeart size="18"/>
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
          data-alt="A wide, sweeping landscape photograph of the Serengeti plains at sunrise. Warm, golden hour light bathes the dry savanna grass. In the distance, a small herd of elephants grazes near a solitary acacia tree. The sky is a gradient of soft pinks, oranges, and pale blues. The image feels expansive, serene, and deeply connected to nature, fitting a premium eco-travel aesthetic."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRDGHDba0on6ChEQeMU522QaCU8nndBSg9k6_0kBYpeOEPEiift_QgOFeKyrirtRmRXGlBnpAxOTZ8HUtrWsCIo673RhE94heZIRGvNxsnfl_ulYEjnxnAtlyow5PyuA4HOcA8n0c3sI4Fqh3EyJ64dW5fR6IDZz3MUlHGl_nO-3RLKZdgRy8osVvZM-BpNkzCzblG27rKKW5RhfPahvGw6rLj2z9LKMl52Y9rKI75FmLJz-tUyEt8"
        />
        <div
          class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"
        ></div>
      </div>
      <div class="hidden md:block relative group cursor-pointer">
        <img
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-alt="A close-up, highly detailed photograph of a lion resting in the tall grass of the African savanna. The lighting is bright and natural, highlighting the golden tones of the lion's fur against the muted greens and browns of the surroundings. The depth of field is shallow, focusing intensely on the animal's calm expression. Premium wildlife photography style."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmD-17Cdz4uEqLK8ro6CiywZh-cVGe7jCx50-79zbJCsLf5yYa-rbxSBM6FuD0kreYLkSVUAGTHaez6DecCBNXhE48_ZIGnhguW4xVUi482imiaMm0RWZlgcvvI8no7E-ygzuUSItZcqIC2yFFxrcRLeK7ooT_cyDePl_amkk7NvEhudU3CXGoCFpk43W8Wosz7bReqWPf9bWN0ciBDgwkILSzKR-0xXVpcdSlyaQWj_yG2MX3m8Hv"
        />
        <div
          class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"
        ></div>
      </div>
      <div class="hidden md:block relative group cursor-pointer">
        <img
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-alt="An open-air safari vehicle driving along a dusty red dirt road in a vast natural landscape. The vehicle is slightly blurred to suggest motion, while the background features rolling hills under a bright, clear blue sky. The scene conveys a sense of rugged adventure but with a safe, organized feel typical of high-end eco-tours."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKfbp2qE5x5J81BiNfYfGOCJHkBHAbd9Fx0uuHFU6Ovhet-K2TLWTg4hzYNaVqU5LqN1OBr8jC1pmp06DnvPyF1pj0UU6EVp82J8Lk89snEyTFmdL7Q9okfGIGY22k8Gat45b_Wo5nuQE0C3_ITzqBUjPNudZYZnRwP-osyQhjVfsL4nSrx7gcq5a5wIfdwrsxvVClg44dzMpHmu4zsu7uuVPb_12pCj-7eDjSH1WtoFDvkJE48Pe5"
        />
        <div
          class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"
        ></div>
      </div>
      <div class="hidden md:block md:col-span-2 relative group cursor-pointer">
        <img
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-alt="A luxury eco-lodge tent setup at dusk. The canvas tent is warmly illuminated from within, casting a soft, inviting glow. A small campfire burns outside, with comfortable seating arranged around it. The surrounding landscape is quiet and darkening, with a few stars beginning to appear in the twilight sky. It feels incredibly cozy, premium, and secluded."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-25Z_n2fMgxdyuq5-d9HcZ8QbfACbjr1vfSvmgpidlJ8AS-pM3KfcpkMEFWA2ZukJhBMC0WO1EukZsn0gxGZlkKHkUn4kWtLkSy8ryV6xjn2nlAaKjNOzrLniiYVNv2Kyh-pNUcEjEDGvFOHjtI00ew2kmbaPgcKq9vFS8H9Ij_gwukdd8anLmbSaE9R6eCr3BX860cm5JzYgpqz88-uRveuLOOLbsptSf6UFR9Pp-pPkSxPS1wPm"
        />
        <div
          class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"
        ></div>
        <div
          class="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-sm px-4 py-2 rounded-full font-label-md text-label-md text-on-surface flex items-center gap-2"
        >
          
          <LucideGalleryVertical size="18"/>
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
                
                <LucideCheckCircle color="gray"/>
                What's Included
              </h3>
              <ul
                class="space-y-3 font-body-md text-body-md text-on-surface-variant"
              >
                <li class="flex items-start gap-3">
                  <LucideCheck size="20" color="gray"/>6 nights in eco-luxury camps
                </li>
                <li class="flex items-start gap-3">
                  <LucideCheck size="20" color="gray"/>All meals (Breakfast, Lunch, Dinner)
                </li>
                <li class="flex items-start gap-3">
                  <LucideCheck size="20" color="gray"/>Expert local naturalist guides
                </li>
                <li class="flex items-start gap-3">
                  <LucideCheck size="20" color="gray"/>4x4 safari vehicle transport
                </li>
                <li class="flex items-start gap-3">
                  <LucideCheck size="20" color="gray"/>National park fees &amp; conservation levies
                </li>
              </ul>
            </div>
            <!-- Excluded -->
            <div>
              <h3
                class="font-headline-md text-headline-md text-on-surface mb-stack-md flex items-center gap-2"
              >
                
                <LucideCircleX color="red"/>
                Not Included
              </h3>
              <ul
                class="space-y-3 font-body-md text-body-md text-on-surface-variant opacity-80"
              >
                <li class="flex items-start gap-3">
                  <LucideX color="red" size="20"/>International flights
                </li>
                <li class="flex items-start gap-3">
                  <LucideX color="red" size="20"/>Travel insurance (required)
                </li>
                <li class="flex items-start gap-3">
                  <LucideX color="red" size="20"/>Optional hot air balloon safari
                </li>
                <li class="flex items-start gap-3">
                  <LucideX color="red" size="20"/>Personal expenses &amp; tips
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
            <!-- Day 1 -->
            <div
              class="border border-outline-variant/20 rounded-xl overflow-hidden bg-surface"
            >
              <button
                class="w-full flex justify-between items-center p-stack-md hover:bg-surface-container-low transition-colors text-left"
                onclick="toggleAccordion(this)"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="bg-primary/10 text-primary font-headline-md text-headline-md h-12 w-12 flex items-center justify-center rounded-lg"
                  >
                    1
                  </div>
                  <div>
                    <h4
                      class="font-headline-md text-headline-md text-on-surface"
                    >
                      Arrival in Arusha
                    </h4>
                    <div class="flex gap-2 mt-1">
                      <span
                        class="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded text-xs font-label-md"
                        >D</span
                      >
                    </div>
                  </div>
                </div>
                <LucideChevronDown/>
              </button>
              <div
                class="accordion-content px-stack-md text-on-surface-variant font-body-md text-body-md bg-surface-container-lowest border-t border-outline-variant/10"
              >
                Welcome to Tanzania! Upon arrival at Kilimanjaro International
                Airport, you will be met by our representative and transferred
                to your eco-lodge in Arusha. Spend the rest of the day relaxing
                in the lush gardens before a welcome dinner and briefing with
                your guide.
              </div>
            </div>
            <!-- Day 2 -->
            <div
              class="border border-outline-variant/20 rounded-xl overflow-hidden bg-surface"
            >
              <button
                class="w-full flex justify-between items-center p-stack-md hover:bg-surface-container-low transition-colors text-left"
                onclick="toggleAccordion(this)"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="bg-primary/10 text-primary font-headline-md text-headline-md h-12 w-12 flex items-center justify-center rounded-lg"
                  >
                    2
                  </div>
                  <div>
                    <h4
                      class="font-headline-md text-headline-md text-on-surface"
                    >
                      Tarangire National Park
                    </h4>
                    <div class="flex gap-2 mt-1">
                      <span
                        class="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded text-xs font-label-md"
                        >B</span
                      >
                      <span
                        class="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded text-xs font-label-md"
                        >L</span
                      >
                      <span
                        class="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded text-xs font-label-md"
                        >D</span
                      >
                    </div>
                  </div>
                </div>
                <LucideChevronDown/>
              </button>
              <div
                class="accordion-content px-stack-md text-on-surface-variant font-body-md text-body-md bg-surface-container-lowest border-t border-outline-variant/10"
              >
                After breakfast, we depart for Tarangire National Park, famous
                for its large elephant herds and iconic baobab trees. Enjoy a
                full day game drive with a picnic lunch. In the late afternoon,
                we head to our sustainable camp on the edge of the Great Rift
                Valley.
              </div>
            </div>
            <!-- Day 3-7 (Placeholders to save space, normally would flesh out) -->
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
              <span class="text-on-surface-variant font-body-sm text-body-sm"
                >From</span
              >
              <div class="font-headline-xl text-headline-xl text-on-surface">
                $1,299
              </div>
            </div>
            <div class="text-on-surface-variant font-body-sm text-body-sm pb-2">
              / person
            </div>
          </div>
          <form class="flex flex-col gap-stack-md">
            <!-- Dates -->
            <div class="relative">
              <label
                class="block font-label-md text-label-md text-on-surface-variant mb-unit"
                >Select Dates</label
              >
              <div
                class="flex items-center border border-outline-variant rounded-lg bg-surface px-3 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all"
              >
                
                <LucideCalendarDays color="gray" size="20"/>
                <input
                  class="ml-2 w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface font-body-md text-body-md placeholder-outline cursor-pointer"
                  placeholder="Jul 12 - Jul 18, 2024"
                  readonly=""
                  type="date"
                />
              </div>
            </div>
            <!-- Guests -->
            <div>
              <label
                class="block font-label-md text-label-md text-on-surface-variant mb-unit"
                >Travelers</label
              >
              <div
                class="flex items-center justify-between border border-outline-variant rounded-lg bg-surface px-4 py-3"
              >
                <span class="text-on-surface font-body-md text-body-md"
                  >2 Guests</span
                >
                <div class="flex items-center gap-3">
                  <button
                    class="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
                    type="button"
                  >
                    <LucideMinus size="18"/>
                  </button>
                  <span
                    class="font-headline-md text-headline-md w-4 text-center"
                    >2</span
                  >
                  <button
                    class="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
                    type="button"
                  >
                    <LucidePlus size="18"/>
                  </button>
                </div>
              </div>
            </div>
            <!-- Summary -->
            <div
              class="mt-stack-sm bg-surface-container-low p-stack-md rounded-lg space-y-2"
            >
              <div
                class="flex justify-between font-body-sm text-body-sm text-on-surface-variant"
              >
                <span>$1,299 x 2 guests</span>
                <span>$2,598</span>
              </div>
              <div
                class="flex justify-between font-body-sm text-body-sm text-on-surface-variant"
              >
                <span>Conservation Fee</span>
                <span>$150</span>
              </div>
              <div
                class="flex justify-between font-headline-md text-headline-md text-on-surface pt-2 border-t border-outline-variant/20 mt-2"
              >
                <span>Total</span>
                <span>$2,748</span>
              </div>
            </div>
            <button
              class="w-full bg-primary text-on-primary font-headline-md text-[18px] py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-md mt-stack-sm flex items-center justify-center gap-2"
              type="button"
            >
              Book Expedition
              <LucideArrowRight/>
            </button>
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

<script setup lang="ts">
import { LucideArrowRight, LucideCalendarDays, LucideCheck, LucideCheckCircle, LucideChevronDown, LucideChevronRight, LucideCircleX, LucideGalleryThumbnails, LucideGalleryVertical, LucideHeart, LucideLocate, LucideMinus, LucidePlus, LucideShare, LucideX } from 'lucide-vue-next';

</script>
