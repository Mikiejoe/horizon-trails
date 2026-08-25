<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import {
  LucideCheckCircle,
  LucideCreditCard,
  LucideDownload,
  LucideSmartphone,
  LucideUniversity,
} from 'lucide-vue-next';

// State to track payment interactions
const selectedPaymentMethod = ref<'mpesa' | 'card' | 'bank'>('mpesa');
const isProcessing = ref(false);
const showSuccessModal = ref(false);

const handlePayment = (method: 'mpesa' | 'card' | 'bank') => {
  selectedPaymentMethod.value = method;
  isProcessing.value = true;

  // Simulate payment gateway trigger
  setTimeout(() => {
    isProcessing.value = false;
    if (method === 'mpesa') {
      showSuccessModal.value = true;
    }
  }, 1200);
};
</script>

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

      <!-- Header -->
      <div class="text-center mb-stack-lg relative z-10">
        <div
          class="inline-flex items-center justify-center w-20 h-20 bg-secondary-container text-on-secondary-container rounded-full mb-stack-md shadow-sm border border-secondary/20"
        >
          <LucideCheckCircle :size="40" />
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
          <span class="font-label-md text-label-md text-on-surface-variant">
            Booking ID:
            <span class="font-bold text-on-surface">#HZ-8492-MK</span>
          </span>
        </div>
      </div>

      <!-- Payment Methods Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-stack-lg relative z-10"
      >
        <!-- M-Pesa STK Push -->
        <div
          class="bg-surface-container-low rounded-lg p-stack-md border transition-all duration-300 shadow-sm flex flex-col justify-between"
          :class="[
            selectedPaymentMethod === 'mpesa'
              ? 'border-primary ring-2 ring-primary/20'
              : 'border-outline-variant/20 hover:-translate-y-0.5',
          ]"
        >
          <div>
            <div class="flex items-center gap-stack-sm mb-stack-sm">
              <LucideSmartphone :size="24" class="text-primary" />
              <h2 class="font-headline-md text-headline-md text-on-surface">
                M-Pesa STK Push
              </h2>
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
          </div>
          <button
            type="button"
            @click="handlePayment('mpesa')"
            :disabled="isProcessing"
            class="w-full bg-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {{
              isProcessing && selectedPaymentMethod === 'mpesa'
                ? 'Sending STK Push...'
                : 'Initiate M-Pesa Prompt'
            }}
          </button>
        </div>

        <!-- Credit Card -->
        <div
          class="bg-surface-container-low rounded-lg p-stack-md border transition-all duration-300 shadow-sm flex flex-col justify-between"
          :class="[
            selectedPaymentMethod === 'card'
              ? 'border-primary ring-2 ring-primary/20'
              : 'border-outline-variant/20 hover:-translate-y-0.5',
          ]"
        >
          <div>
            <div class="flex items-center gap-stack-sm mb-stack-sm">
              <LucideCreditCard :size="24" class="text-tertiary-container" />
              <h2 class="font-headline-md text-headline-md text-on-surface">
                Credit Card
              </h2>
            </div>
            <p
              class="font-body-sm text-body-sm text-on-surface-variant mb-stack-md"
            >
              Secure online payment via Stripe.
            </p>
            <div class="flex gap-2 mb-stack-md">
              <span
                class="px-2 py-1 bg-surface-container-highest rounded text-xs text-on-surface-variant border border-outline-variant/30 font-medium"
              >
                Visa
              </span>
              <span
                class="px-2 py-1 bg-surface-container-highest rounded text-xs text-on-surface-variant border border-outline-variant/30 font-medium"
              >
                Mastercard
              </span>
              <span
                class="px-2 py-1 bg-surface-container-highest rounded text-xs text-on-surface-variant border border-outline-variant/30 font-medium"
              >
                Amex
              </span>
            </div>
          </div>
          <button
            type="button"
            @click="handlePayment('card')"
            :disabled="isProcessing"
            class="w-full border-2 border-primary text-primary font-label-md text-label-md py-3 px-6 rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-colors disabled:opacity-50"
          >
            Pay with Card
          </button>
        </div>

        <!-- Direct Bank Transfer -->
        <div
          class="md:col-span-2 bg-surface-container-low rounded-lg p-stack-md border transition-all duration-300 shadow-sm"
          :class="[
            selectedPaymentMethod === 'bank'
              ? 'border-primary ring-2 ring-primary/20'
              : 'border-outline-variant/20 hover:-translate-y-0.5',
          ]"
        >
          <div class="flex items-center gap-stack-sm mb-stack-sm">
            <LucideUniversity :size="24" class="text-secondary" />
            <h2 class="font-headline-md text-headline-md text-on-surface">
              Direct Bank Transfer
            </h2>
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
              <span class="block font-label-md text-label-md text-outline mb-1">
                Bank Name
              </span>
              <span class="block font-body-md text-body-md text-on-surface">
                Standard Chartered
              </span>
            </div>
            <div>
              <span class="block font-label-md text-label-md text-outline mb-1">
                Account Name
              </span>
              <span class="block font-body-md text-body-md text-on-surface">
                Horizon Trails Ltd
              </span>
            </div>
            <div>
              <span class="block font-label-md text-label-md text-outline mb-1">
                Account Number
              </span>
              <span
                class="block font-body-md text-body-md text-on-surface font-mono"
              >
                0102 3394 5821 00
              </span>
            </div>
            <div>
              <span class="block font-label-md text-label-md text-outline mb-1">
                SWIFT Code
              </span>
              <span
                class="block font-body-md text-body-md text-on-surface font-mono"
              >
                SCBLKENX
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div
        class="border-t border-outline-variant/20 pt-stack-md flex flex-col sm:flex-row items-center justify-between gap-stack-md relative z-10"
      >
        <div class="text-center sm:text-left">
          <h3 class="font-headline-sm text-headline-sm text-on-surface mb-1">
            Need a record?
          </h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant">
            Download a PDF quote containing all details.
          </p>
        </div>
        <button
          type="button"
          class="flex items-center gap-2 border border-outline text-on-surface-variant font-label-md text-label-md py-2 px-4 rounded-lg hover:bg-surface-container-high transition-colors"
        >
          <LucideDownload :size="18" />
          Download Quote PDF
        </button>
      </div>

      <div class="mt-stack-lg text-center">
        <RouterLink
          to="/dashboard"
          class="text-primary hover:underline font-label-md text-label-md"
        >
          Return to Dashboard
        </RouterLink>
      </div>
    </div>
  </main>
</template>