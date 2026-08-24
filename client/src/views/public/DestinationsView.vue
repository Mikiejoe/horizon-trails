<template>
     <main
      class="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap"
    >
      <!-- Header Section -->
      <section class="mb-section-gap text-center md:text-left">
        <h1
          class="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-stack-md"
        >
          Explore Your Next Frontier
        </h1>
        <p
          class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0"
        >
          Discover breathtaking landscapes and sustainable journeys curated for
          the modern adventurer. From vast savannahs to icy fjords, your next
          great story begins here.
        </p>
      </section>
      <!-- Bento Grid Destinations Gallery -->
      <section
        class="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[400px]"
      >
        <!-- East Africa (Large Hero Card) -->
        <article
          class="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl shadow-[0_4px_12px_rgba(26,26,26,0.05)] border border-outline/15 cursor-pointer hover:-translate-y-1 transition-all duration-300"
        >
          <img
            alt="East Africa Savannah"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            data-alt="A sweeping, breathtaking aerial view of the East African savannah at golden hour. Warm, golden sunlight bathes the grassy plains, highlighting a small group of elephants migrating in the distance. The aesthetic is high-quality environmental photography, evoking grounded luxury and natural wonder. The colors are rich terracotta earth tones mixed with savanna sun yellows."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5kl65YsXRQuELXgsWGPgiOGmUn522O60UfskahUaIezgAaxumr9lj3bSs1iYQrA3PZnUJ_y1nlO0gfAYodjyp5133spoe-Ek0SvKu5bZrGWB-_g4_skLb3x6OihcHaz9YscQmkcT7z5IQ31tE96XaFYiXj4raiWy9ToxWz3HKDhytuAczbbgw7TmmjFqX7VN6hy2CSlkME7jv7ZYpnASumw5WRa3iaZs_qznLOTcYL3oMtVMlNKD5"
          />
          <!-- Overlay Gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent"
          ></div>
          <!-- Content -->
          <div
            class="absolute inset-0 p-stack-lg flex flex-col justify-between"
          >
            <div class="flex justify-end">
              <span
                class="bg-surface-container-high/90 backdrop-blur-sm text-secondary font-label-md text-label-md px-4 py-2 rounded-full flex items-center gap-2"
              >
                
                <LucideFlag size="14"/>
                24 Tours
              </span>
            </div>
            <div>
              <h2
                class="font-headline-xl text-headline-xl text-inverse-on-surface mb-stack-sm drop-shadow-md"
              >
                East Africa
              </h2>
              <p
                class="font-body-md text-body-md text-surface-variant max-w-md line-clamp-2"
              >
                Experience the raw beauty of the savannah, witness the great
                migration, and connect with vibrant local cultures on our
                sustainable safaris.
              </p>
            </div>
          </div>
        </article>
        <!-- Nordic Trails -->
        <article
          class="group relative overflow-hidden rounded-xl shadow-[0_4px_12px_rgba(26,26,26,0.05)] border border-outline/15 cursor-pointer hover:-translate-y-1 transition-all duration-300"
        >
          <img
            alt="Nordic Fjords"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            data-alt="A dramatic view of deep blue Nordic fjords cutting through jagged, snow-dusted mountains. The scene is crisp and clear, with a minimalist, high-end travel photography style. The colors are deep acacia greens, slate greys, and icy blues, conveying a sense of pristine, untouched wilderness and adventurous spirit."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeSSykII093A4dppFA49ABDNZRXm6XGmHj52F2bJdb0vOvQCRPRrpPbv6TWrclx9E2XGtxVe0dHhlQJZTKdc5nvh9DgyKsUa9gx4AaiIJqArvyHcKJUOst_W32QGk-75tqsIWS5NcqfribL_R3rY4YPS1UXlDVBmEDwUEhBnKJuaB6-CHg75K55Ip9eku63Q2I08wFu670ZZKwwWF_dmgtpTzhQP57SGlPBGFaQTVgHPJm41aZwdNl"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"
          ></div>
          <div
            class="absolute inset-0 p-stack-md flex flex-col justify-between"
          >
            <div class="flex justify-start">
              <span
                class="bg-surface-container-high/90 backdrop-blur-sm text-secondary font-label-md text-label-md px-3 py-1.5 rounded-full flex items-center gap-1"
              >
                
                <LucideSnowflake size="14"/>
                12 Tours
              </span>
            </div>
            <div>
              <h3
                class="font-headline-lg text-headline-lg text-inverse-on-surface mb-unit drop-shadow-sm"
              >
                Nordic Trails
              </h3>
              <p
                class="font-body-sm text-body-sm text-surface-variant line-clamp-2"
              >
                Traverse ancient glaciers and dramatic fjords in Europe's most
                pristine wilderness.
              </p>
            </div>
          </div>
        </article>
        <!-- Patagonia -->
        <article
          class="group relative overflow-hidden rounded-xl shadow-[0_4px_12px_rgba(26,26,26,0.05)] border border-outline/15 cursor-pointer hover:-translate-y-1 transition-all duration-300"
        >
          <img
            alt="Patagonia Mountains"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            data-alt="A majestic shot of the jagged granite peaks of Patagonia piercing through dramatic clouds. The foreground features a calm, turquoise glacial lake reflecting the mountains. The lighting is dramatic, showcasing the raw, tactile minimalism of the landscape. Colors emphasize cool stone greys, vibrant glacial blues, and sparse green vegetation."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXGLCuQCsq1ahnZZ52rBlx2YsBJV29eSrFMQYpDSJMXOcNVdPqJ6ec_-7Be4Pr_jXMVWtkx5Qmnz5TvRoqwwAlW8FkkHcEE2WVHor2gtXxJqmplSoze3uanGcfYvm27InVCmstl3f-Xd4Ygxp-6602bPkhMc5M6EeqPJxEkLfteNfsx68WEz0L3bSt7HnFhkCBBGyZkjn1jdU_Dp1auJg3YEyhfunpWrX-ACsZHRflI5BZfws_wYQa"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"
          ></div>
          <div
            class="absolute inset-0 p-stack-md flex flex-col justify-between"
          >
            <div class="flex justify-start">
              <span
                class="bg-surface-container-high/90 backdrop-blur-sm text-secondary font-label-md text-label-md px-3 py-1.5 rounded-full flex items-center gap-1"
              >
                
                <LucideMountain size="14"/>
                18 Tours
              </span>
            </div>
            <div>
              <h3
                class="font-headline-lg text-headline-lg text-inverse-on-surface mb-unit drop-shadow-sm"
              >
                Patagonia
              </h3>
              <p
                class="font-body-sm text-body-sm text-surface-variant line-clamp-2"
              >
                Hike to the ends of the earth among towering granite peaks and
                expansive ice fields.
              </p>
            </div>
          </div>
        </article>
        <!-- Amazon Rainforest -->
        <article
          class="group relative overflow-hidden rounded-xl shadow-[0_4px_12px_rgba(26,26,26,0.05)] border border-outline/15 cursor-pointer hover:-translate-y-1 transition-all duration-300"
        >
          <img
            alt="Amazon Rainforest"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            data-alt="A lush, dense canopy of the Amazon rainforest seen from a slightly elevated perspective. Morning mist weaves through the vibrant, deep acacia green foliage. The aesthetic is immersive and organic, highlighting the tactile richness of the jungle environment. The lighting is soft and diffused, creating a sense of mysterious discovery."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYxPG8c5dhOSmRuzkqIiKaZTmg7XS-DCaL-TyOoXR760wrskIBI_46x1CasHA5UWGsuRjcX8vej878K8QK2mZS86BY03cYKNmZPhmgil892d6QWOvkcs09Hq3cH9PLWWoE4KFdt2ve6S8oKMZlA7maZBHosqvSKAtOkD2MnIB_izIsus0ActQTCKvjmWtekBeTITBpBpFu4apb9tPxmYhP_jmEbmuD6QbnSZiyPuQEL0SPdIWU5Khb"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"
          ></div>
          <div
            class="absolute inset-0 p-stack-md flex flex-col justify-between"
          >
            <div class="flex justify-start">
              <span
                class="bg-surface-container-high/90 backdrop-blur-sm text-secondary font-label-md text-label-md px-3 py-1.5 rounded-full flex items-center gap-1"
              >
                
                <LucideTrees size="14"/>
                9 Tours
              </span>
            </div>
            <div>
              <h3
                class="font-headline-lg text-headline-lg text-inverse-on-surface mb-unit drop-shadow-sm"
              >
                Amazon Basin
              </h3>
              <p
                class="font-body-sm text-body-sm text-surface-variant line-clamp-2"
              >
                Immerse yourself in the world's most biodiverse ecosystem with
                our indigenous guides.
              </p>
            </div>
          </div>
        </article>
        <!-- The Himalayas -->
        <article
          class="md:col-span-2 group relative overflow-hidden rounded-xl shadow-[0_4px_12px_rgba(26,26,26,0.05)] border border-outline/15 cursor-pointer hover:-translate-y-1 transition-all duration-300"
        >
          <img
            alt="Himalayan Mountains"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            data-alt="A panoramic view of the snow-capped Himalayan mountain range under a crisp, clear blue sky. Prayer flags flutter softly in the foreground, adding a touch of cultural vibrancy to the stark, minimalist landscape. The image conveys grounded luxury and adventurous spirit, with a color palette of pristine whites, rocky granites, and bright sky blues."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX_nq2Ju4DaYXHPMd7AGVcNBJm14IQpDdfLt7LE_uf_8IJeMzW_jbr_mTzLe8-lFrGktwBxpnQCLQpx04jWEObAUs-4jhjQeBhV4V_KlGPMj8b8hd64-acMoVxcFQ3fbebKZtuof182ky8gLmpy-L99fzAXM-MAYvU-i0qi9OBucdXvDGFDqaARNjRfLQKJ0EYblVVXReFPpA81b6Y6_zhtRV3EA6FNbg5wHZmrUPHpBKSGDK91qIO"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent"
          ></div>
          <div
            class="absolute inset-0 p-stack-lg flex flex-col justify-between"
          >
            <div class="flex justify-end">
              <span
                class="bg-surface-container-high/90 backdrop-blur-sm text-secondary font-label-md text-label-md px-4 py-2 rounded-full flex items-center gap-2"
              >
                                <LucideMountainSnow size="14"/>
                15 Tours
              </span>
            </div>
            <div>
              <h2
                class="font-headline-lg text-headline-lg text-inverse-on-surface mb-stack-sm drop-shadow-md"
              >
                The Himalayas
              </h2>
              <p
                class="font-body-md text-body-md text-surface-variant max-w-md line-clamp-2"
              >
                Trek the roof of the world, exploring ancient monasteries and
                pushing your limits on legendary alpine trails.
              </p>
            </div>
          </div>
        </article>
      </section>
      <!-- Newsletter / CTA Section -->
      <section
        class="mt-section-gap bg-surface-container-low rounded-xl p-stack-lg md:p-margin-desktop text-center border flex flex-col items-center justify-center border-outline-variant/20 shadow-[0_4px_12px_rgba(26,26,26,0.05)]"
      >
        
        <span><LucidePlaneTakeoff class="text-tertiary-container mb-stack-md"/></span>
        
        <h3 class="font-headline-lg text-headline-lg text-primary mb-stack-sm">
          Ready for the Unknown?
        </h3>
        <p
          class="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto mb-stack-lg"
        >
          Join our community of eco-conscious travelers and get early access to
          new destinations and exclusive sustainable itineraries.
        </p>
        <form
          class="flex flex-col md:flex-row gap-stack-sm justify-center max-w-md mx-auto"
        >
          <input
            class="flex-grow bg-surface-bright border border-outline-variant rounded-full px-6 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="Your email address"
            type="email"
          />
          <button
            class="font-label-md text-label-md bg-primary text-on-primary rounded-full px-6 py-3 font-bold hover:bg-primary-container transition-colors duration-300"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
</template>

<script setup lang="ts">
import { LucideFlag, LucideMountain, LucideMountainSnow, LucidePlaneTakeoff, LucideSnowflake, LucideTrees } from 'lucide-vue-next';


</script>
