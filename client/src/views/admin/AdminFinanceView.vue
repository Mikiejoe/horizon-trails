<template>
  <main
    class="flex-1 ml-0 md:ml-64 p-margin-mobile md:p-margin-desktop bg-background min-h-screen"
  >
    <header
      class="mb-section-gap flex flex-col md:flex-row md:items-center justify-between gap-stack-md"
    >
      <div>
        <h1 class="font-headline-xl text-headline-xl text-on-surface">
          Financials &amp; Invoices
        </h1>
        <p class="font-body-md text-body-md text-on-surface-variant mt-2">
          Manage transactions, generate quotations, and track revenue.
        </p>
      </div>
    </header>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
      <!-- Issue New Invoice Panel -->
      <div class="lg:col-span-1 flex flex-col gap-gutter">
        <div class="glass-card rounded-xl p-stack-lg h-full">
          <h2
            class="font-headline-md text-headline-md text-on-surface mb-stack-md"
          >
            Issue New Invoice
          </h2>
          <form class="flex flex-col gap-stack-md">
            <div>
              <label
                class="block font-label-md text-label-md text-on-surface-variant mb-1"
                >Client Name</label
              >
              <input
                class="w-full bg-[#F3F0E9] border border-outline/15 rounded-lg p-3 font-body-sm text-body-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="e.g. Sarah Jenkins"
                type="text"
              />
            </div>
            <div>
              <label
                class="block font-label-md text-label-md text-on-surface-variant mb-1"
                >Tour Selection</label
              >
              <select
                class="w-full bg-[#F3F0E9] border border-outline/15 rounded-lg p-3 font-body-sm text-body-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              >
                <option>Andes Expedition (7 Days)</option>
                <option>Costa Rica Eco-Lodge (5 Days)</option>
                <option>Patagonia Trek (10 Days)</option>
              </select>
            </div>
            <div class="grid grid-cols-2 gap-stack-md">
              <div>
                <label
                  class="block font-label-md text-label-md text-on-surface-variant mb-1"
                  >Guests</label
                >
                <input
                  class="w-full bg-[#F3F0E9] border border-outline/15 rounded-lg p-3 font-body-sm text-body-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  type="number"
                  value="2"
                />
              </div>
              <div>
                <label
                  class="block font-label-md text-label-md text-on-surface-variant mb-1"
                  >Base Rate ($)</label
                >
                <input
                  class="w-full bg-surface-container border border-outline/10 rounded-lg p-3 font-body-sm text-body-sm text-on-surface-variant"
                  readonly
                  type="text"
                  value="1250.00"
                />
              </div>
            </div>
            <div class="border-t border-outline/10 my-stack-sm pt-stack-sm">
              <div
                class="flex justify-between font-body-sm text-body-sm text-on-surface-variant mb-1"
              >
                <span>Subtotal</span>
                <span>$2,500.00</span>
              </div>
              <div
                class="flex justify-between font-body-sm text-body-sm text-on-surface-variant mb-1"
              >
                <span>Eco-Tax (5%)</span>
                <span>$125.00</span>
              </div>
              <div
                class="flex justify-between font-headline-sm text-headline-sm text-on-surface mt-2 pt-2 border-t border-outline/10 font-semibold"
              >
                <span>Total Due</span>
                <span>$2,625.00</span>
              </div>
            </div>
            <button
              class="mt-stack-sm bg-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded-lg font-bold w-full hover:opacity-90 transition-all duration-300"
              type="button"
            >
              Generate Invoice
            </button>
          </form>
        </div>
      </div>
      <!-- Recent Transactions List -->
      <div class="lg:col-span-2">
        <div
          class="bg-surface-bright border border-outline-variant/20 rounded-xl overflow-hidden shadow-sm"
        >
          <div
            class="p-stack-md border-b border-outline-variant/15 flex justify-between items-center bg-surface-container-lowest"
          >
            <h2 class="font-headline-md text-headline-md text-on-surface">
              Recent Transactions
            </h2>
            <button
              class="text-primary font-label-md text-label-md hover:underline"
            >
              View All
            </button>
          </div>
          <div class="divide-y divide-outline-variant/10">
            <!-- Transaction 1 -->
            <div
              class="p-stack-md flex flex-col sm:flex-row sm:items-center justify-between gap-stack-sm hover:bg-surface-container-low transition-colors group"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center"
                >
                  <LucideReceipt/>
                </div>
                <div>
                  <div
                    class="font-body-md text-body-md font-semibold text-on-surface"
                  >
                    INV-2024-089
                  </div>
                  <div
                    class="font-body-sm text-body-sm text-on-surface-variant"
                  >
                    Andes Expedition • Sarah Jenkins
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-gutter">
                <div class="text-right">
                  <div
                    class="font-body-md text-body-md font-semibold text-on-surface"
                  >
                    $2,625.00
                  </div>
                  <div
                    class="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md text-label-md text-[10px]"
                  >
                    Pending
                  </div>
                </div>
                <div
                  class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <button
                    class="p-2 text-on-surface-variant hover:text-primary transition-colors"
                    title="Download PDF"
                  >
                    <LucideDownload/>
                  </button>
                  <button
                    class="p-2 text-on-surface-variant hover:text-primary transition-colors"
                    title="Send via Email"
                  >
                    <LucideSend/>
                  </button>
                  <button
                    class="p-2 text-on-surface-variant hover:text-secondary transition-colors"
                    title="Mark as Paid"
                  >
                    <LucideCircleCheck/>
                  </button>
                </div>
              </div>
            </div>
            <!-- Transaction 2 -->
            <div
              class="p-stack-md flex flex-col sm:flex-row sm:items-center justify-between gap-stack-sm hover:bg-surface-container-low transition-colors group"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center"
                >
                  <LucideReceipt/>
                </div>
                <div>
                  <div
                    class="font-body-md text-body-md font-semibold text-on-surface"
                  >
                    INV-2024-088
                  </div>
                  <div
                    class="font-body-sm text-body-sm text-on-surface-variant"
                  >
                    Patagonia Trek • Michael Chang
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-gutter">
                <div class="text-right">
                  <div
                    class="font-body-md text-body-md font-semibold text-on-surface"
                  >
                    $4,100.00
                  </div>
                  <div
                    class="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-md text-label-md text-[10px]"
                  >
                    Paid
                  </div>
                </div>
                <div
                  class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <button
                    class="p-2 text-on-surface-variant hover:text-primary transition-colors"
                    title="Download PDF"
                  >
                    <LucideDownload/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { LucideCircleCheck, LucideDownload, LucideReceipt, LucideSend } from 'lucide-vue-next';

</script>

<style scoped>
.glass-card {
            background: rgba(255, 248, 246, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(138, 114, 106, 0.15);
            box-shadow: 0 4px 12px rgba(26, 26, 26, 0.05);
        }
</style>
