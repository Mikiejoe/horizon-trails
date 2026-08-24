import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { AuthResponse, IUser, UserRole } from '../types';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();

  // State
  const user = ref<IUser | null>(null);
  const token = ref<string | null>(localStorage.getItem('auth_token') || null);
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // Getters
  const isAuthenticated = computed<boolean>(() => !!token.value);
  const userRole = computed<UserRole>(() => user.value?.role || 'user');
  const isAdmin = computed<boolean>(() => user.value?.role === 'admin');

  // Helpers to persist token in localStorage
  const setToken = (newToken: string | null) => {
    token.value = newToken;
    if (newToken) {
      localStorage.setItem('auth_token', newToken);
    } else {
      localStorage.removeItem('auth_token');
    }
  };

  // Actions

  /**
   * Log in user and persist token to localStorage
   */
  async function login(credentials: { email: string; password: string }): Promise<AuthResponse> {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Login failed.');
      }

      setToken(resData.token);
      user.value = resData.data.user;

      return resData;
    } catch (err: any) {
      error.value = err.message || 'Login failed. Please check your credentials.';
      throw error.value;
    } finally {
      isLoading.value = false;
    }
  }

  /**
   * Register a new user account
   */
  async function register(userData: { name: string; email: string; password: string; phone?: string }): Promise<AuthResponse> {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Registration failed.');
      }

      setToken(resData.token);
      user.value = resData.data.user;

      return resData;
    } catch (err: any) {
      error.value = err.message || 'Registration failed. Please try again.';
      throw error.value;
    } finally {
      isLoading.value = false;
    }
  }

  /**
   * Fetch current authenticated user's profile on page reload
   */
  async function fetchCurrentUser(): Promise<void> {
    if (!token.value) return;

    isLoading.value = true;
    try {
      const response = await fetch('/api/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Session expired.');
      }

      user.value = resData.data.user;
    } catch (err) {
      // Clear invalid token state
      logout();
    } finally {
      isLoading.value = false;
    }
  }

  /**
   * Clear session state and navigate to login
   */
  function logout(): void {
    setToken(null);
    user.value = null;
    error.value = null;

    router.push({ name: 'login' });
  }

  return {
    user,
    token,
    isLoading,
    error,
    isAuthenticated,
    userRole,
    isAdmin,
    login,
    register,
    fetchCurrentUser,
    logout,
  };
});