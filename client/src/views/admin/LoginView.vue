<template>
  <div
    class="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container antialiased"
  >
    <div class="auth-container flex w-full">
      <!-- Left Panel: Brand Imagery -->
      <div
        class="bg-surface-container-high relative hidden overflow-hidden lg:flex lg:w-1/2"
      >
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="
            background-image: url('/public/images/bannerbg.jpg');
          "
        >
          <div
            class="from-on-background/60 absolute inset-0 bg-gradient-to-t to-transparent"
          ></div>
        </div>
        <div
          class="p-margin-desktop relative z-10 flex h-full w-full flex-col justify-end"
        >
          <h1 class="font-display-lg text-display-lg text-surface mb-stack-md">
            Discover the Untamed.
          </h1>
          <p class="font-body-lg text-body-lg text-surface-variant max-w-md">
            Join Horizon Trails to access exclusive eco-conscious journeys,
            curated for the modern adventurer who values sustainability and
            luxury.
          </p>
        </div>
        <div
          class="top-margin-desktop left-margin-desktop absolute z-10 flex items-center gap-2"
        >
          <LucideCompass class="h-6 w-6 text-surface" />
          <span
            class="font-headline-lg text-headline-lg text-surface tracking-tight"
            >Horizon Trails</span
          >
        </div>
      </div>

      <!-- Right Panel: Auth Forms -->
      <div
        class="p-margin-mobile md:p-margin-desktop bg-surface relative flex w-full items-center justify-center lg:w-1/2"
      >
        <div
          class="top-margin-mobile left-margin-mobile absolute flex items-center gap-2 lg:hidden"
        >
          <span
            class="material-symbols-outlined text-primary text-2xl"
            style='font-variation-settings: "FILL" 1'
            >landscape</span
          >
          <span
            class="font-headline-md text-headline-md text-primary tracking-tight"
            >Horizon Trails</span
          >
        </div>

        <div class="relative h-[550px] w-full max-w-[420px]">
          <!-- Login Form -->
          <div
            class="form-switch w-full flex-col pt-12 lg:pt-0"
            :class="
              currentForm === 'login'
                ? 'active-state flex'
                : 'hidden-state hidden'
            "
          >
            <h2
              class="font-headline-xl text-headline-xl text-on-surface mb-stack-sm"
            >
              Welcome Back
            </h2>
            <p
              class="font-body-md text-body-md text-on-surface-variant mb-stack-lg"
            >
              Log in to continue your journey.
            </p>
            <form
              class="gap-stack-md flex flex-col"
              @submit.prevent="handleLogin"
            >
              <div>
                <label
                  class="font-label-md text-label-md text-on-surface mb-unit block"
                  >Email Address</label
                >
                <input
                  v-model="loginEmail"
                  class="border-outline bg-surface-container-low text-on-surface font-body-md focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-3 outline-none transition-colors focus:ring-1"
                  placeholder="adventurer@example.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <div class="mb-unit flex items-center justify-between">
                  <label
                    class="font-label-md text-label-md text-on-surface block"
                    >Password</label
                  >
                  <a
                    class="font-label-md text-label-md text-primary hover:underline"
                    href="#"
                    >Forgot password?</a
                  >
                </div>
                <input
                  v-model="loginPassword"
                  class="border-outline bg-surface-container-low text-on-surface font-body-md focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-3 outline-none transition-colors focus:ring-1"
                  placeholder="••••••••"
                  required
                  type="password"
                />
              </div>
              <button
                class="bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container mt-stack-sm flex w-full items-center justify-center gap-2 rounded-lg py-3 px-6 uppercase tracking-wider shadow-sm transition-colors hover:shadow-md"
                type="submit"
              >
                Sign In
                <LucideArrowRight class="h-5 w-5" />
              </button>
            </form>

            

            <p
              class="font-body-sm text-body-sm text-on-surface-variant text-center"
            >
              Don't have an account?
              <button
                class="text-primary font-bold hover:underline focus:outline-none"
                type="button"
                @click="currentForm = 'signup'"
              >
                Sign up
              </button>
            </p>
          </div>

          <!-- Signup Form -->
          <div
            class="form-switch w-full flex-col pt-12 lg:pt-0"
            :class="
              currentForm === 'signup'
                ? 'active-state flex'
                : 'hidden-state hidden'
            "
          >
            <h2
              class="font-headline-xl text-headline-xl text-on-surface mb-stack-sm"
            >
              Start Exploring
            </h2>
            <p
              class="font-body-md text-body-md text-on-surface-variant mb-stack-lg"
            >
              Create an account to book sustainable tours.
            </p>
            <form
              class="gap-stack-md flex flex-col"
              @submit.prevent="handleSignup"
            >
              <div class="gap-stack-md grid grid-cols-2">
                <div>
                  <label
                    class="font-label-md text-label-md text-on-surface mb-unit block"
                    >First Name</label
                  >
                  <input
                    v-model="signupFirstName"
                    class="border-outline bg-surface-container-low text-on-surface font-body-md focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-3 outline-none transition-colors focus:ring-1"
                    placeholder="Jane"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label
                    class="font-label-md text-label-md text-on-surface mb-unit block"
                    >Last Name</label
                  >
                  <input
                    v-model="signupLastName"
                    class="border-outline bg-surface-container-low text-on-surface font-body-md focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-3 outline-none transition-colors focus:ring-1"
                    placeholder="Doe"
                    required
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label
                  class="font-label-md text-label-md text-on-surface mb-unit block"
                  >Email Address</label
                >
                <input
                  v-model="signupEmail"
                  class="border-outline bg-surface-container-low text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary w-full rounded-lg border px-4 py-3 outline-none transition-colors focus:ring-1"
                  placeholder="adventurer@example.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <label
                  class="font-label-md text-label-md text-on-surface mb-unit block"
                  >Password</label
                >
                <input
                  v-model="signupPassword"
                  class="border-outline bg-surface-container-low text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary w-full rounded-lg border px-4 py-3 outline-none transition-colors focus:ring-1"
                  placeholder="Create a strong password"
                  required
                  type="password"
                />
              </div>
              <button
                class="bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container mt-stack-sm flex w-full items-center justify-center gap-2 rounded-lg py-3 px-6 uppercase tracking-wider shadow-sm transition-colors hover:shadow-md"
                type="submit"
              >
                Create Account
                <LucideUserPlus2 class="h-5 w-5" />
              </button>
            </form>
            <p
              class="font-body-sm text-body-sm text-on-surface-variant mt-stack-lg text-center"
            >
              Already a member?
              <button
                class="text-primary font-bold hover:underline focus:outline-none"
                type="button"
                @click="currentForm = 'login'"
              >
                Log in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LucideArrowRight, LucideCompass, LucideUserPlus2 } from 'lucide-vue-next';
import { ref } from 'vue';

// State management
const currentForm = ref<'login' | 'signup'>('login');

// Form inputs
const loginEmail = ref('');
const loginPassword = ref('');

const signupFirstName = ref('');
const signupLastName = ref('');
const signupEmail = ref('');
const signupPassword = ref('');

// Handlers
function handleLogin() {
  console.log('Logging in:', { email: loginEmail.value, password: loginPassword.value });
}

function handleSignup() {
  console.log('Signing up:', {
    firstName: signupFirstName.value,
    lastName: signupLastName.value,
    email: signupEmail.value,
    password: signupPassword.value,
  });
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
}
.form-switch {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.hidden-state {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transform: translateX(20px);
}
.active-state {
  opacity: 1;
  pointer-events: auto;
  position: relative;
  transform: translateX(0);
}
</style>