import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import PublicLayout from '../layouts/PublicLayout.vue';
import AdminLayout from '../layouts/AdminLayout.vue';
import { useAuthStore } from '../stores/authStore';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/public/HomeView.vue'),
      },
      {
        path: 'tours',
        name: 'tours',
        component: () => import('../views/public/ToursView.vue'),
      },
      {
        path: 'destinations',
        name: 'destinations',
        component: () => import('../views/public/DestinationsView.vue'),
      },
      {
        path: 'tours/:slug',
        name: 'tour-detail',
        component: () => import('../views/public/TourDetailView.vue'),
        props: true,
      },
      {
        path: 'tours/:slug/checkout',
        name: 'tour-checkout',
        component: () => import('../views/public/CheckoutView.vue'),
        props: true,
      },
      {
        path: 'tours/:slug/checkout/summary',
        name: 'tour-checkout-summary',
        component: () => import('../views/public/BookingSummaryView.vue'),
        props: true,
      },
      {
        path: 'tours/:slug/checkout/payment',
        name: 'tour-checkout-payment',
        component: () => import('../views/public/PaymentView.vue'),
        props: true,
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/public/AboutView.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/public/ContactView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'admin-dashboard',
        component: () => import('../views/admin/DashboardView.vue'),
      },
      {
        path: 'tours',
        name: 'admin-tours',
        component: () => import('../views/admin/AdminToursView.vue'),
      },
      {
        path: 'tours/create',
        name: 'admin-tour-create',
        component: () => import('../views/admin/AdminCreateTourView.vue'),
      },
      {
        path: 'destinations',
        name: 'admin-destinations',
        component: () => import('../views/admin/AdminDestinationView.vue'),
      },
      {
        path: 'bookings',
        name: 'admin-bookings',
        component: () => import('../views/admin/AdminBookingsView.vue'),
      },
      {
        path: 'financials',
        name: 'admin-finance',
        component: () => import('../views/admin/AdminFinanceView.vue'),
      },
    ],
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('../views/admin/LoginView.vue'),
    meta: { guestOnly: true },
  },
  {
    path: '/:pathMatch(.*)*',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'not-found',
        component: () => import('../views/404.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0, left: 0, behavior: 'smooth' };
  },
});

// Global Navigation Guard
router.beforeEach(async (to, _from, next) => {
  // Instantiate Pinia store inside guard to ensure Pinia is mounted
  const authStore = useAuthStore();

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isGuestOnly = to.matched.some((record) => record.meta.guestOnly);

  if (requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'admin-login', query: { redirect: to.fullPath } });
  } else if (isGuestOnly && authStore.isAuthenticated) {
    next({ name: 'admin-dashboard' });
  } else {
    next();
  }
});

export default router;