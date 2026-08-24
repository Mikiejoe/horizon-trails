<template>
  <main
    class="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full flex-1 overflow-y-auto md:ml-64"
  >
    <header class="mb-section-gap">
      <h1 class="font-headline-xl text-headline-xl text-on-surface mb-stack-sm">
        Bookings &amp; Inquiries
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        Manage all upcoming journeys, customer requests, and payment statuses.
      </p>
    </header>

    <!-- Filters & Search Bar -->
    <div
      class="gap-gutter mb-stack-lg flex flex-col items-start justify-between lg:flex-row lg:items-center"
    >
      <!-- Category Filter Pills -->
      <div class="gap-stack-sm flex flex-wrap">
        <button
          v-for="filter in filterOptions"
          :key="filter"
          type="button"
          class="font-label-md text-label-md rounded-full px-4 py-2 transition-colors"
          :class="[
            selectedFilter === filter
              ? 'bg-secondary-container text-on-secondary-container border-secondary-container border'
              : 'bg-surface-bright text-on-surface-variant border-outline border hover:bg-surface-container-low',
          ]"
          @click="selectedFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Search Input -->
      <div class="relative w-full lg:w-96">
        <LucideSearch
          class="material-symbols-outlined text-on-surface-variant absolute left-4 top-1/2 -translate-y-1/2"
        />
        <input
          v-model="searchQuery"
          class="bg-[#F3F0E9] border-outline/30 text-on-surface font-body-sm text-body-sm placeholder-on-surface-variant/50 focus:border-primary focus:ring-primary w-full rounded-lg border py-3 pl-12 pr-4 transition-all focus:ring-1 outline-none"
          placeholder="Search by name, tour, or ID..."
          type="text"
        />
      </div>
    </div>

    <!-- Bookings Layout Grid -->
    <div
      class="gap-gutter relative grid grid-cols-1 items-start xl:grid-cols-3"
    >
      <!-- Table/List View (Takes up 2 columns on XL) -->
      <div class="space-y-stack-sm xl:col-span-2">
        <!-- Table Header (Hidden on small screens) -->
        <div
          class="border-outline-variant/20 font-label-md text-label-md text-on-surface-variant hidden border-b px-6 py-3 uppercase tracking-wider md:grid md:grid-cols-12 md:gap-4"
        >
          <div class="col-span-3">Customer</div>
          <div class="col-span-4">Tour / Dates</div>
          <div class="col-span-2">Amount</div>
          <div class="col-span-3 text-right">Status</div>
        </div>

        <!-- Booking List Items -->
        <div
          v-for="booking in filteredBookings"
          :key="booking.id"
          class="glass-card flex cursor-pointer flex-col rounded-xl p-4 transition-all duration-300 md:grid md:grid-cols-12 md:items-center md:gap-4 md:px-6 md:py-5"
          :class="[
            selectedBooking?.id === booking.id
              ? 'border-l-primary z-10 border-l-4 bg-white shadow-md'
              : 'row-hover',
          ]"
          @click="selectBooking(booking)"
        >
          <!-- Customer Column -->
          <div class="flex items-center gap-3 md:col-span-3">
            <img
              v-if="booking.avatar"
              class="h-12 w-12 rounded-full object-cover"
              :src="booking.avatar"
              :alt="booking.customerName"
            />
            <div
              v-else
              class="bg-surface-container-highest text-on-surface-variant font-headline-md h-12 w-12 rounded-full flex items-center justify-center font-bold"
            >
              {{ booking.initials }}
            </div>
            <div>
              <p
                class="font-headline-md text-body-md text-on-surface font-bold"
              >
                {{ booking.customerName }}
              </p>
              <p class="font-body-sm text-body-sm text-on-surface-variant">
                ID: {{ booking.bookingId }}
              </p>
            </div>
          </div>

          <!-- Tour / Dates Column -->
          <div class="text-left md:col-span-4">
            <p class="font-body-md text-body-md text-on-surface font-semibold">
              {{ booking.tourName }}
            </p>
            <p
              class="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1"
            >
              <LucideCalendar class="h-4 w-4" />
              {{ booking.dates }}
            </p>
          </div>

          <!-- Amount Column -->
          <div class="text-left md:col-span-2">
            <p class="font-body-md text-body-md text-on-surface font-semibold">
              {{ formatCurrency(booking.amount) }}
            </p>
            <p
              class="font-label-md mt-1 text-[10px] uppercase tracking-wider"
              :class="
                booking.paymentStatus === 'Fully Paid'
                  ? 'text-tertiary-container'
                  : 'text-error'
              "
            >
              {{ booking.paymentStatus }}
            </p>
          </div>

          <!-- Status & Action Column -->
          <div
            class="flex items-center justify-between gap-3 md:col-span-3 md:justify-end"
          >
            <span
              class="font-label-md text-label-md flex items-center gap-1 rounded-full px-3 py-1"
              :class="getStatusBadgeClasses(booking.status)"
            >
              <span
                class="h-2 w-2 rounded-full"
                :class="getStatusDotClasses(booking.status)"
              ></span>
              {{ booking.status }}
            </span>
            <button
              type="button"
              class="text-on-surface-variant hover:bg-surface-container-high hover:text-primary rounded-full p-2 transition-colors"
              @click.stop
            >
              <LucideMoreVertical class="h-4 w-4" />
            </button>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-if="filteredBookings.length === 0"
          class="border-outline-variant/20 bg-surface-bright rounded-xl border p-12 text-center"
        >
          <LucideSearchX
            class="material-symbols-outlined text-on-surface-variant mb-2 text-4xl"
          />
          <p class="font-body-lg text-on-surface font-medium">
            No bookings found
          </p>
          <p class="font-body-sm text-on-surface-variant">
            Try adjusting your search query or status filter.
          </p>
        </div>
      </div>

      <!-- Details Sidebar Panel (Sticky on Desktop, Modal on Mobile) -->
      <aside
        v-if="selectedBooking"
        class="bg-surface-bright border-outline-variant/20 shadow-lg fixed inset-y-0 right-0 z-50 w-full overflow-y-auto sm:w-96 xl:sticky xl:top-8 xl:z-0 xl:block xl:h-[calc(100vh-120px)] xl:w-auto xl:rounded-2xl xl:border"
      >
        <!-- Cover Image Area -->
        <div
          class="relative h-32 w-full bg-cover bg-center"
          :style="{ backgroundImage: `url(${selectedBooking.coverImage})` }"
        >
          <div
            class="from-surface-bright absolute inset-0 bg-gradient-to-t to-transparent"
          ></div>
          <button
            type="button"
            class="absolute top-4 right-4 rounded-full bg-black/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/40 xl:hidden"
            @click="selectedBooking = null"
          >
            <LucideX class="h-4 w-4" />
          </button>
        </div>

        <div class="relative z-10 -mt-12 p-6">
          <img
            v-if="selectedBooking.avatar"
            class="border-surface-bright mb-4 h-20 w-20 rounded-full border-4 object-cover shadow-sm"
            :src="selectedBooking.avatar"
            :alt="selectedBooking.customerName"
          />
          <div
            v-else
            class="border-surface-bright bg-surface-container-highest text-on-surface-variant font-headline-lg mb-4 flex h-20 w-20 items-center justify-center rounded-full border-4 font-bold shadow-sm"
          >
            {{ selectedBooking.initials }}
          </div>

          <div class="mb-6 flex items-start justify-between">
            <div>
              <h3 class="font-headline-lg text-headline-md text-on-surface">
                {{ selectedBooking.customerName }}
              </h3>
              <p
                class="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1"
              >
                <LucideMail class="h-4 w-4" />
                {{ selectedBooking.email }}
              </p>
            </div>
            <span
              v-if="selectedBooking.isVip"
              class="font-label-md text-label-md border-[#FDE68A] bg-[#FFFBEB] text-[#B45309] rounded-full border px-3 py-1 font-semibold"
            >
              VIP
            </span>
          </div>

          <div class="space-y-6">
            <!-- Tour Detail -->
            <div>
              <h4
                class="font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider"
              >
                Booked Journey
              </h4>
              <div
                class="bg-surface-container-low border-outline-variant/10 rounded-xl border p-4"
              >
                <p class="font-body-md text-on-surface font-semibold">
                  {{ selectedBooking.tourName }}
                </p>
                <div
                  class="text-on-surface-variant font-body-sm mt-2 flex items-center gap-4"
                >
                  <span class="flex items-center gap-1">
                    <LucideCalendar class="h-4 w-4" />
                    {{ selectedBooking.dates }}
                  </span>
                  <span class="flex items-center gap-1">
                    <LucideUsers class="h-4 w-4" />
                    {{ selectedBooking.guests }} Guests
                  </span>
                </div>
              </div>
            </div>

            <!-- Special Requirements -->
            <div>
              <h4
                class="font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider"
              >
                Guest Notes &amp; Requirements
              </h4>
              <div
                class="border-outline-variant/20 space-y-3 rounded-xl border p-4"
              >
                <div class="flex gap-3">
                  <LucideUtensils class="h-4 w-4 text-tertiary" />
                  <div>
                    <p class="font-body-sm text-on-surface font-semibold">
                      Dietary
                    </p>
                    <p class="font-body-sm text-on-surface-variant">
                      {{ selectedBooking.notes.dietary }}
                    </p>
                  </div>
                </div>
                <div class="bg-outline-variant/10 h-[1px] w-full"></div>
                <div class="flex gap-3">
                  <LucideHeart class="h-4 w-4 text-primary" />
                  <div>
                    <p class="font-body-sm text-on-surface font-semibold">
                      Medical
                    </p>
                    <p class="font-body-sm text-on-surface-variant">
                      {{ selectedBooking.notes.medical }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment Status -->
            <div>
              <h4
                class="font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider"
              >
                Payment Overview
              </h4>
              <div class="bg-[#F3F0E9] rounded-xl p-4">
                <div class="mb-2 flex items-center justify-between">
                  <span class="font-body-sm text-on-surface-variant"
                    >Total Cost</span
                  >
                  <span class="font-body-md text-on-surface font-semibold">
                    {{ formatCurrency(selectedBooking.amount) }}
                  </span>
                </div>
                <div class="mb-4 flex items-center justify-between">
                  <span class="font-body-sm text-on-surface-variant"
                    >Amount Paid</span
                  >
                  <span class="font-body-md text-secondary font-semibold">
                    {{ formatCurrency(selectedBooking.paidAmount) }}
                  </span>
                </div>
                <div class="bg-outline-variant/30 h-2 w-full rounded-full">
                  <div
                    class="bg-secondary h-2 rounded-full transition-all duration-300"
                    :style="{
                      width: `${(selectedBooking.paidAmount / selectedBooking.amount) * 100}%`,
                    }"
                  ></div>
                </div>
                <p
                  class="font-label-md text-on-surface-variant mt-2 text-right text-[10px]"
                >
                  {{ selectedBooking.settlementNote }}
                </p>
              </div>
            </div>

            <!-- Actions -->
            <div class="border-outline-variant/20 flex gap-3 border-t pt-4">
              <button
                type="button"
                class="bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint flex-1 rounded-lg py-3 font-bold text-center shadow-sm transition-colors"
                @click="confirmBooking(selectedBooking.id)"
              >
                Confirm Booking
              </button>
              <button
                type="button"
                class="border-outline/30 text-on-surface-variant hover:border-outline hover:text-on-surface flex items-center justify-center rounded-lg border-2 px-4 transition-colors"
              >
                <span class="material-symbols-outlined">edit</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </main>
</template>

<script setup lang="ts">
import {
  LucideCalendar,
  LucideHeart,
  LucideMail,
  LucideMoreVertical,
  LucideSearch,
  LucideSearchX,
  LucideUsers,
  LucideUtensils,
  LucideX,
} from "lucide-vue-next";
import { ref, computed } from "vue";

type BookingStatus = "Pending" | "Confirmed" | "Cancelled" | "Completed";

interface GuestNotes {
  dietary: string;
  medical: string;
}

interface Booking {
  id: number;
  bookingId: string;
  customerName: string;
  email: string;
  avatar?: string;
  initials?: string;
  tourName: string;
  dates: string;
  amount: number;
  paidAmount: number;
  paymentStatus: "Fully Paid" | "Deposit Only" | "Unpaid";
  status: BookingStatus;
  isVip: boolean;
  guests: number;
  coverImage: string;
  notes: GuestNotes;
  settlementNote: string;
}

// Reactive Filters and Search
const selectedFilter = ref<string>("All Bookings");
const searchQuery = ref<string>("");

const filterOptions = [
  "All Bookings",
  "Pending",
  "Confirmed",
  "Cancelled",
  "Completed",
];

// Sample Reactive Data
const bookings = ref<Booking[]>([
  {
    id: 1,
    bookingId: "#BK-7892",
    customerName: "Elias Thorne",
    email: "elias.thorne@example.com",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbO8knY3sKqvmwntUwjpn9b94U8tqdnG2Mt11f91MNUcoXConXIFNuTGnC7oXGZSYQZeu3JMooGQ56lHHkX_s9qBrUeiqKEtVUPtMtd02QUzKfLyFhNcq6-r9OI5SJS6j7aEXwk41tP5mQ_ouGjYT0zHaLWU9d3KgvU-Sh4ywvtEDJNP1CMLE70Cyr7WIRqPw6ngfpgGWl7yUbbTmeTAny2Ud705xGBmUwkNPbHsr__8DNSkfKdPNa",
    tourName: "Andean Peaks Trek",
    dates: "Oct 12 - 24, 2024",
    amount: 3450,
    paidAmount: 3450,
    paymentStatus: "Fully Paid",
    status: "Pending",
    isVip: true,
    guests: 2,
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBStNN-I8vycvRv7ogRA-Iq_Tzs9LlM2L-o5rGQe2IdqBhpvhWPAN-p2nJtwcqpRH-gONQBOEEB2PYDqLj-vGZ0VSn9CKpHLyIy4L73Eswf_SRD2viBMSFGfsv3_VtHP_UaHMm9nN1N-pvGddV8SVuaW-GIa_7Utvj3jas4yyfGgeTulRzHsE5Xb-ouITkk2LOZqhLVZfrIx2NT5AX_8kwPDLOTtJQ_kNm0dfdu_-u6hmZqNWT6MJqw",
    notes: {
      dietary: "Strict Vegetarian. No dairy preferred.",
      medical: "Mild asthma, carrying inhaler. Has experience at altitude.",
    },
    settlementNote: "Fully Settled on Aug 14",
  },
  {
    id: 2,
    bookingId: "#BK-7891",
    customerName: "Sarah Lin",
    email: "sarah.lin@example.com",
    initials: "SL",
    tourName: "Coastal Redwood Retreat",
    dates: "Nov 05 - 10, 2024",
    amount: 1200,
    paidAmount: 400,
    paymentStatus: "Deposit Only",
    status: "Confirmed",
    isVip: false,
    guests: 1,
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUQDUByjy1sNstBmtAvMPb0den9VtVjruA6qX8Pbh6RZq6Q3goJMjXbR87j4NK3lxpD26kt9aX2sBqnNUgm0b8c2gBhuSS0SlvN3y5Eov4m-0zBb-iCBahWog4RcAiA69TIItcO6osUrFN4R-FWPmKD2SYgZDjLTtv2d73XOSf79C6vCj111w3m2X9Qq6fxgD396kPUzk8zLOkZfZ34m2QhySqtKY4ZRSvHy2MjX77F_Z8xth7V-2G",
    notes: {
      dietary: "Gluten-free.",
      medical: "None reported.",
    },
    settlementNote: "Remaining balance due Oct 01",
  },
]);

// Currently Selected Booking for Details Panel
const selectedBooking = ref<Booking | null>(bookings.value[0]);

// Computed Search and Filter logic
const filteredBookings = computed(() => {
  return bookings.value.filter((booking) => {
    // Status Filter
    const matchesFilter =
      selectedFilter.value === "All Bookings" ||
      booking.status === selectedFilter.value;

    // Search Query
    const query = searchQuery.value.toLowerCase().trim();
    const matchesSearch =
      !query ||
      booking.customerName.toLowerCase().includes(query) ||
      booking.tourName.toLowerCase().includes(query) ||
      booking.bookingId.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });
});

// Event Handlers
function selectBooking(booking: Booking) {
  selectedBooking.value = booking;
}

function confirmBooking(id: number) {
  const target = bookings.value.find((b) => b.id === id);
  if (target) {
    target.status = "Confirmed";
  }
}

// Helper Formatters
function formatCurrency(val: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(val);
}

function getStatusBadgeClasses(status: BookingStatus) {
  switch (status) {
    case "Confirmed":
      return "bg-secondary-container/50 text-secondary border border-secondary/20";
    case "Pending":
      return "bg-surface-container-low text-on-surface-variant border border-outline-variant/30";
    case "Cancelled":
      return "bg-error-container/40 text-error border border-error/20";
    case "Completed":
      return "bg-surface-container-high text-on-surface border border-outline/20";
  }
}

function getStatusDotClasses(status: BookingStatus) {
  switch (status) {
    case "Confirmed":
      return "bg-secondary";
    case "Pending":
      return "bg-[#EAB308]";
    case "Cancelled":
      return "bg-error";
    case "Completed":
      return "bg-on-surface-variant";
  }
}
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(138, 114, 106, 0.15);
  box-shadow: 0 4px 12px rgba(26, 26, 26, 0.05);
}
.row-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(26, 26, 26, 0.08);
  background-color: white;
  z-index: 10;
}
</style>
