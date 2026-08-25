<template>
    <main
      class="flex-grow flex items-center justify-center py-section-gap px-margin-mobile md:px-margin-desktop relative z-10"
    >
      <div class="absolute inset-0 bg-pattern pointer-events-none"></div>
      <div
        class="max-w-[800px] w-full bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant/15 p-stack-lg md:p-12 relative overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-bl-[100%] pointer-events-none"
        ></div>
        <div class="text-center mb-stack-lg relative z-10">
          <div
            class="inline-flex items-center justify-center w-20 h-20 bg-secondary-container text-on-secondary-container rounded-full mb-stack-md shadow-sm border border-secondary/20"
          >
            <LucideCheckCircle
              class="material-symbols-outlined text-4xl"/>
          </div>
          <h1
            class="font-headline-xl text-headline-xl text-on-surface mb-stack-sm"
          >
            Booking Request Received
          </h1>
          <p
            class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto"
          >
            Your adventure is almost set. Please complete the payment to secure
            your reservation.
          </p>
          <div
            class="mt-stack-sm inline-block bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/30"
          >
            <span class="font-label-md text-label-md text-on-surface-variant"
              >Booking ID:
              <span class="font-bold text-on-surface">#HZ-8492-MK</span></span
            >
          </div>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-stack-lg relative z-10"
        >
          <div
            class="bg-surface-container-low rounded-lg p-stack-md border border-outline-variant/20 hover:-translate-y-0.5 transition-transform duration-300 shadow-sm"
          >
            <div class="flex items-center gap-stack-sm mb-stack-sm">
              <LucideSmartphone class="material-symbols-outlined text-primary"/>
              <h3 class="font-headline-md text-headline-md text-on-surface">
                M-Pesa STK Push
              </h3>
            </div>
            <p
              class="font-body-sm text-body-sm text-on-surface-variant mb-stack-md"
            >
              Instant payment directly from your phone.
            </p>
            <ol
              class="list-decimal list-inside font-body-sm text-body-sm text-on-surface-variant space-y-2 mb-stack-md ml-2"
            >
              <li>Ensure your phone is nearby.</li>
              <li>Click the button below to initiate prompt.</li>
              <li>Enter your M-Pesa PIN on your device.</li>
            </ol>
            <button
              class="w-full bg-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Initiate M-Pesa Prompt
            </button>
          </div>
          <div
            class="bg-surface-container-low rounded-lg p-stack-md border border-outline-variant/20 hover:-translate-y-0.5 transition-transform duration-300 shadow-sm"
          >
            <div class="flex items-center gap-stack-sm mb-stack-sm">
              <LucideCreditCard class="material-symbols-outlined text-tertiary-container"/>
              <h3 class="font-headline-md text-headline-md text-on-surface">
                Credit Card
              </h3>
            </div>
            <p
              class="font-body-sm text-body-sm text-on-surface-variant mb-stack-md"
            >
              Secure online payment via Stripe.
            </p>
            <div class="flex gap-2 mb-stack-md">
              <span
                class="px-2 py-1 bg-surface-container-highest rounded text-xs text-on-surface-variant border border-outline-variant/30"
                >Visa</span
              >
              <span
                class="px-2 py-1 bg-surface-container-highest rounded text-xs text-on-surface-variant border border-outline-variant/30"
                >Mastercard</span
              >
              <span
                class="px-2 py-1 bg-surface-container-highest rounded text-xs text-on-surface-variant border border-outline-variant/30"
                >Amex</span
              >
            </div>
            <button
              class="w-full border-2 border-primary text-primary font-label-md text-label-md py-3 px-6 rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-colors"
            >
              Pay with Card
            </button>
          </div>
          <div
            class="md:col-span-2 bg-surface-container-low rounded-lg p-stack-md border border-outline-variant/20 hover:-translate-y-0.5 transition-transform duration-300 shadow-sm"
          >
            <div class="flex items-center gap-stack-sm mb-stack-sm">
              <LucideUniversity class="material-symbols-outlined text-secondary"/>
              <h3 class="font-headline-md text-headline-md text-on-surface">
                Direct Bank Transfer
              </h3>
            </div>
            <p
              class="font-body-sm text-body-sm text-on-surface-variant mb-stack-md"
            >
              Use these details for manual transfers. Please use your Booking ID
              as the reference.
            </p>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-surface-bright p-4 rounded border border-outline-variant/10"
            >
              <div>
                <span
                  class="block font-label-md text-label-md text-outline mb-1"
                  >Bank Name</span
                >
                <span class="block font-body-md text-body-md text-on-surface"
                  >Standard Chartered</span
                >
              </div>
              <div>
                <span
                  class="block font-label-md text-label-md text-outline mb-1"
                  >Account Name</span
                >
                <span class="block font-body-md text-body-md text-on-surface"
                  >Horizon Trails Ltd</span
                >
              </div>
              <div>
                <span
                  class="block font-label-md text-label-md text-outline mb-1"
                  >Account Number</span
                >
                <span
                  class="block font-body-md text-body-md text-on-surface font-mono"
                  >0102 3394 5821 00</span
                >
              </div>
              <div>
                <span
                  class="block font-label-md text-label-md text-outline mb-1"
                  >SWIFT Code</span
                >
                <span
                  class="block font-body-md text-body-md text-on-surface font-mono"
                  >SCBLKENX</span
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="border-t border-outline-variant/20 pt-stack-md flex flex-col sm:flex-row items-center justify-between gap-stack-md relative z-10"
        >
          <div class="text-center sm:text-left">
            <h4 class="font-headline-sm text-headline-sm text-on-surface mb-1">
              Need a record?
            </h4>
            <p class="font-body-sm text-body-sm text-on-surface-variant">
              Download a PDF quote containing all details.
            </p>
          </div>
          <button
            class="flex items-center gap-2 border border-outline text-on-surface-variant font-label-md text-label-md py-2 px-4 rounded-lg hover:bg-surface-container-high transition-colors"
          >
            <LucideDownload/>
            Download Quote PDF
          </button>
        </div>
        <div class="mt-stack-lg text-center">
          <a
            class="text-primary hover:underline font-label-md text-label-md"
            href="#"
            >Return to Dashboard</a
          >
        </div>
      </div>
    </main>
</template>

<script setup lang="ts">
import { LucideCheckCircle, LucideCreditCard, LucideDownload, LucidePhone, LucideSmartphone, LucideUniversity } from 'lucide-vue-next';


</script>

<style scoped>

</style>