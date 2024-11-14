<template>
  <the-spinner v-if="isLoading"></the-spinner>
  <header
    class="w-full h-auto px-2 py-6 bg-primary text-white fixed top-0 left-0 z-50"
  >
    <section class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <router-link to="/">
          <div class="h-auto w-[40px] rounded-full">
            <img
              class="h-auto w-auto rounded-full"
              src="../img-asset/logo.jpg"
              alt="Logo"
            />
          </div>
        </router-link>
        <h1 class="text-lg font-medium">{{ title }}</h1>
      </div>
      <button class="w-[40px] h-[40px]" @click="toggleDropBar">
        <i class="fa fa-bars text-white text-2xl" aria-hidden="true"></i>
      </button>
    </section>
    <nav
      class="bg-primary fixed inset-0 transform -translate-x-full transition-transform duration-300 ease-in-out h-screen w-[80%] md:w-[40%] lg:w-[20%] flex flex-col gap-5 py-6"
      :class="{ 'translate-x-0': dropBarVisible }"
    >
      <div class="flex flex-col mb-3 items-center gap-3">
        <div class="h-auto w-[40px] rounded-full">
          <img
            class="h-auto w-auto rounded-full"
            src="../img-asset/logo.jpg"
            alt="Logo"
          />
        </div>
        <h1 class="text-lg">anon360</h1>
      </div>
      <ul class="flex flex-col gap-3 border-b border-b-primaryLight pb-4 pl-7">
        <div><h1 class="text-primaryLight text-sm">Accounts</h1></div>
        <router-link to="/accounts/login/">
          <li v-if="!user" class="flex items-center">
            <i class="fa fa-sign-out mr-1" aria-hidden="true"></i>Login
          </li>
        </router-link>
        <router-link to="/accounts/register/">
          <li v-if="!user" class="flex items-center">
            <i class="fa fa-sign-in mr-1" aria-hidden="true"></i>Register
          </li>
        </router-link>
        <transition name="fade" mode="out-in">
          <router-link to="/dashboard">
            <li v-if="user" class="flex items-center">
              <i class="fa-solid fa-gauge mr-1"></i>Dashboard
            </li>
          </router-link>
        </transition>
        <li @click="logout" v-if="user" class="flex items-center">
          <i class="fa fa-sign-out mr-1" aria-hidden="true"></i>Logout
        </li>
      </ul>
      <ul class="flex flex-col gap-7 border-b border-b-primaryLight pb-4 pl-7">
        <div><h1 class="text-primaryLight text-sm">Earn/Finance</h1></div>
        <router-link to="/wallet/withdraw"
          ><li class="flex items-center">
            <i class="fa fa-rocket mr-1" aria-hidden="true"></i>Withdraw
          </li></router-link
        >

        <router-link to="/pricing">
          <li class="flex items-center">
            <i class="fa fa-usd mr-1" aria-hidden="true"></i>Pricing
          </li>
        </router-link>
      </ul>
      <ul class="flex flex-col gap-7 border-b border-b-primaryLight pb-4 pl-7">
        <div><h1 class="text-primaryLight text-sm">Company</h1></div>

        <li class="flex items-center" @click="scrollToFaq('faq')">
          <i class="fa fa-question-circle-o mr-1" aria-hidden="true"></i>FAQs
        </li>
        <li class="flex items-center" @click="scrollToFaq('support')">
          <i class="fa fa-comments mr-1" aria-hidden="true"></i>Support
        </li>
        <li class="flex items-center" @click="scrollToFaq('about')">
          <i class="fa fa-info-circle mr-1" aria-hidden="true"></i>About Us
        </li>
      </ul>
      <ul class="flex flex-col gap-7 border-b border-b-primaryLight pb-4 pl-7">
        <li class="flex items-center">
          <i class="fa-solid fa-globe mr-1"></i>English
        </li>
      </ul>
      <button
        class="w-[22px] h-[22px] rounded-full bg-white absolute top-3 right-2"
        @click="toggleDropBar"
      >
        <i class="fa fa-times text-black" aria-hidden="true"></i>
      </button>
    </nav>
  </header>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["title"],
  data() {
    return {
      dropBarVisible: false,
      isLoading: false,
      theme: "light",
    };
  },
  methods: {
    toggleDropBar() {
      this.dropBarVisible = !this.dropBarVisible;
    },
    ...mapActions(["fetchUser"]),
    async logout() {
      await this.$store.dispatch("logoutUser");
      this.$router.push("/");
    },
    setTheme(theme) {
      if (theme === "light") {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      } else if (theme === "dark") {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
      }
    },
    scrollToFaq(location) {
      this.dropBarVisible = !this.dropBarVisible;
      const faqSection = document.getElementById(location);
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  computed: { ...mapState(["user"]) },
};
</script>

<style>
.slideIn {
  transform: translateX(0);
}

.ease {
  transition: transform 0.5s ease-in;
}
:root {
  --primary: #151515;
  --secondary: #dc143c;
}
[data-theme="light"] {
  --primary: #ffffff;
  --secondary: #000000;
}
body {
  background-color: var(--primary);
  color: var(--secondary);
}
.dark body {
  background-color: #151515;
  color: #ffffff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
