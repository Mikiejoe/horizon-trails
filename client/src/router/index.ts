import { createRouter, createWebHistory } from 'vue-router';
import PublicLayout from '../layouts/PublicLayout.vue';
import AdminLayout from '../layouts/AdminLayout.vue';
// import { useAuthStore } from '../stores/authStore';

const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      { path: '', name: 'home', component: () => import('../views/public/HomeView.vue') },
      { path: 'tours', name: 'tours', component: () => import('../views/public/ToursView.vue') },
      { path: 'destinations', name: 'destinations', component: () => import('../views/public/DestinationsView.vue') },
      { path: 'tours/:slug', name: 'tour-detail', component: () => import('../views/public/TourDetailView.vue') },
      { path: 'about', name: 'about', component: () => import('../views/public/AboutView.vue') },
      { path: 'contact', name: 'contact', component: () => import('../views/public/ContactView.vue') },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'admin-dashboard', component: () => import('../views/admin/DashboardView.vue') },
      { path: 'tours', name: 'admin-tours', component: () => import('../views/admin/AdminToursView.vue') },
      { path: 'destinations', name: 'admin-destinations', component: () => import('../views/admin/AdminDestinationView.vue') },
      { path: 'bookings', name: 'admin-bookings', component: () => import('../views/admin/AdminBookingsView.vue') },
    ],
  },
  { path: '/admin/login', name: 'admin-login', component: () => import('../views/admin/LoginView.vue') },
  // { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/404.vue') },
  {
    path: '/:pathMatch(.*)*',
    component: PublicLayout,
    children: [
      { path: '', name: 'not-found', component: () => import('../views/404.vue') }
    ]},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   if (to.meta.requiresAuth && !authStore.isAuthenticated) {
//     next({ name: 'admin-login' });
//   } else {
//     next();
//   }
// });

export default router;