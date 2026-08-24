<template>
  <main
    class="flex-grow max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap w-full"
  >
    <!-- Header Section -->
    <div class="mb-section-gap max-w-2xl">
      <h1
        class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-md"
      >
        Get in Touch
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Whether you're planning your next sustainable adventure or need
        assistance during a journey, our team is here to guide you.
      </p>
    </div>
    <!-- Split Layout Area -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
      <!-- Left: Contact Info & Map (5 cols) -->
      <div class="lg:col-span-5 flex flex-col gap-stack-lg">
        <!-- Contact Info Cards -->
        <div
          class="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/15 shadow-[0_4px_12px_rgba(26,26,26,0.05)]"
        >
          <div class="flex items-start gap-stack-md mb-stack-lg">
            
            <LucideMapPin size="30" color="brown"/>
            <div>
              <h3
                class="font-headline-md text-headline-md text-on-surface mb-unit"
              >
                Global Headquarters
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant">
                123 Eco Way<br />
                Vancouver, BC V6B 1A1<br />
                Canada
              </p>
            </div>
          </div>
          <div class="w-full h-px bg-outline-variant/20 mb-stack-lg"></div>
          <div class="flex items-start gap-stack-md mb-stack-lg">
            <LucidePhone size="30" color="brown"/>
            <div>
              <h3
                class="font-headline-md text-headline-md text-on-surface mb-unit"
              >
                General Inquiries
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant">
                +1 (555) 123-4567<br />
                <span
                  class="font-body-sm text-body-sm text-on-surface-variant/80"
                  >Mon-Fri, 9am - 5pm PST</span
                >
              </p>
            </div>
          </div>
          <div class="flex items-start gap-stack-md">
            <LucideSnowflake size="30" color="brown"/>
            <div>
              <h3
                class="font-headline-md text-headline-md text-on-surface mb-unit"
              >
                24/7 Travel Emergency
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant">
                +1 (555) 999-0000<br />
                <span
                  class="font-body-sm text-body-sm text-on-surface-variant/80"
                  >Active travelers only</span
                >
              </p>
            </div>
          </div>
        </div>
        <!-- Interactive Map Area (Visual Representation) -->
        <div
          class="relative w-full h-64 rounded-xl overflow-hidden border border-outline-variant/15 shadow-[0_4px_12px_rgba(26,26,26,0.05)] bg-surface-container-high group cursor-pointer"
        >
          <!-- Using a placeholder for map image, styled with Terracotta/Warm Sand vibes via CSS/image selection -->
          <div
            class="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105"
            data-alt="A stylized, minimalist map visualization of Vancouver focusing on natural terrain and waterways. The map uses a warm, tactile color palette with sandy beige landmasses and subtle terracotta accents for main roads. The style is clean, modern, and perfectly matches a light-mode eco-travel aesthetic. High contrast, elegant cartography."
            data-location="Vancouver"
            style="
              background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuAbnw-Gy3vnXDZQuKFbf8n6r5kOWd7OirLbg6wvc5Lv58HTZ1QPxHsWiXQ9BtKwsTNQVDa_-L_2XBlfvWO7DdPHKWhPx08ct0SqpXsLdr18I43u-WacjzjRGEw6lQxiEskbL93wUstrI1mIQ0s6e-NhFFT6X4uMxGuCLPYlmV0h0PJ-KnmcwbOaUa_L72wbE_r47daCUZKfTrhkMLSWj82b2sv_2o_H-YwUK45HSY10CgSKzUEvdlgV&quot;);
            "
          ></div>
          <div class="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          <!-- Map Pin -->
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
          >
            <div
              class="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce"
            >
              
              <LucideTreePine color="white"/>
            </div>
            <div
              class="w-4 h-1 bg-on-surface/20 rounded-[100%] mt-1 blur-[2px]"
            ></div>
          </div>
        </div>
        <!-- Social Links -->
        <div class="flex gap-stack-md mt-stack-sm">
          <a
            class="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors bg-surface-container-lowest shadow-sm"
            href="#"
          >
            <LucideCamera/>
          </a>
          <a
            class="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors bg-surface-container-lowest shadow-sm"
            href="#"
          >
           <LucideMessagesSquare/>
          </a>
          <a
            class="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors bg-surface-container-lowest shadow-sm"
            href="#"
          >
            <LucidePlayCircle/>
          </a>
        </div>
      </div>
      <!-- Right: Contact Form (7 cols) -->
      <div
        class="lg:col-span-7 bg-surface-container-lowest rounded-xl p-6 md:p-8 border border-outline-variant/15 shadow-[0_4px_12px_rgba(26,26,26,0.05)]"
      >
        <h2
          class="font-headline-lg text-headline-lg text-on-surface mb-stack-lg"
        >
          Send a Message
        </h2>
        <form class="flex flex-col gap-stack-lg" id="contactForm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <!-- Name Input -->
            <div class="flex flex-col gap-unit">
              <label
                class="font-label-md text-label-md text-on-surface-variant"
                for="name"
                >Full Name</label
              >
              <input
                class="form-input bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:ring-0"
                id="name"
                name="name"
                placeholder="Jane Doe"
                required=""
                type="text"
              />
            </div>
            <!-- Email Input -->
            <div class="flex flex-col gap-unit">
              <label
                class="font-label-md text-label-md text-on-surface-variant"
                for="email"
                >Email Address</label
              >
              <input
                class="form-input bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:ring-0"
                id="email"
                name="email"
                placeholder="jane@example.com"
                required=""
                type="email"
              />
            </div>
          </div>
          <!-- Interest / Travel Dates -->
          <div class="flex flex-col gap-unit">
            <label
              class="font-label-md text-label-md text-on-surface-variant"
              for="interest"
              >Area of Interest (Optional)</label
            >
            <select
              class="form-input bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:ring-0 appearance-none"
              id="interest"
              name="interest"
            >
              <option value="">Select a topic...</option>
              <option value="booking">New Booking Inquiry</option>
              <option value="existing">Existing Reservation</option>
              <option value="custom">Custom Itinerary Request</option>
              <option value="other">Other</option>
            </select>
          </div>
          <!-- Message Area -->
          <div class="flex flex-col gap-unit">
            <label
              class="font-label-md text-label-md text-on-surface-variant"
              for="message"
              >Message</label
            >
            <textarea
              class="form-input bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:ring-0 resize-y"
              id="message"
              name="message"
              placeholder="How can we help you plan your journey?"
              required=""
              rows="5"
            ></textarea>
          </div>
          <!-- Submit Button -->
          <div class="mt-stack-sm flex items-center justify-between">
            <p
              class="font-body-sm text-body-sm text-on-surface-variant max-w-[200px] md:max-w-xs"
            >
              We typically respond within 24 hours during business days.
            </p>
            <button
              class="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md text-label-md font-bold hover:opacity-90 transition-all duration-300 shadow-[0_4px_12px_rgba(26,26,26,0.05)] hover:-translate-y-[2px] flex items-center gap-2 group"
              type="submit"
            >
              Send Message
              <LucideArrowRight
              size="20"
                class="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1"
                
                />
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { LucideArrowRight, LucideCamera, LucideMapPin, LucideMessagesSquare, LucidePhone, LucidePlayCircle, LucideSnowflake, LucideTreePine } from 'lucide-vue-next';

</script>
