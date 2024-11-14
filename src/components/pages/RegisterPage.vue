<template>
  <dialog-model
    :message="alert.message"
    :showAlert="alert.message"
    :type="alert.type"
  ></dialog-model>
  <the-spinner v-if="isLoading"></the-spinner>
  <section
    class="flex text-white flex-col justify-center px-4 items-center bg-primary w-screen h-screen"
  >
    <router-link to="/">
      <div class="flex justify-items-center items-center gap-3 mb-5">
        <div class="h-auto w-[40px] rounded-full">
          <img
            class="h-auto w-auto rounded-full"
            src="../img-asset/logo.jpg"
            alt=""
          />
        </div>
        <h1 class="text-2xl font-bold">anon360</h1>
      </div>
    </router-link>
    <div
      class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
        >
          Create an account
        </h1>
        <form class="space-y-4 md:space-y-6" @submit.prevent="register">
          <div>
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Username</label
            >
            <input
              type="text"
              name="name"
              v-model="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Email address</label
            >
            <input
              type="email"
              name="email"
              v-model="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
              placeholder=""
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-secondary focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary"
          >
            Create an account
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?
            <router-link to="/accounts/login" class="text-secondary font-medium"
              >Sign in here</router-link
            >
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from "@/firebase";
import { db } from "@/firebase";
import { createUser } from "@/firebase";
import { ref, set } from "firebase/database";
import DialogModel from "../UI/DialogModel.vue";
export default {
  components: {
    DialogModel,
  },
  data() {
    return {
      name: null,
      email: null,
      password: "",
      isLoading: false,
      alert: {
        type: "",
        message: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        this.isLoading = true;
        const userCredentials = await createUser(
          auth,
          this.email,
          this.password
        );
        const user = userCredentials.user;
        await set(ref(db, "users/" + user.uid), {
          email: user.email,
          accountBalance: 0,
          deposit: 0,
          withdrawal: 0,
          createdAt: new Date().toISOString(),
        });

        // Signed up
        this.$store.dispatch("login");
        this.showAlert("success", "Account created successfully!");

        setTimeout(() => {
          this.$router.replace("/dashboard");
        }, 2000);
      } catch (error) {
        console.error("Error registering user:", error);
        if (this.password.length < 6) {
          this.showAlert("error", "Password should be at least 6 characters");
        } else if (error.code === "auth/email-already-in-use") {
          this.showAlert("error", "Email is already in use");
        } else if (error.code === "auth/invalid-email") {
          this.showAlert("error", "Invalid email address");
        } else if (error.code === "auth/weak-password") {
          this.showAlert("error", "Weak password");
        } else {
          this.showAlert("error", "Registration failed. Please try again.");
        }
      } finally {
        this.isLoading = false;
      }
    },
    showAlert(type, message) {
      this.isLoading = false;
      this.alert.type = type;
      this.alert.message = message;
      setTimeout(() => {
        this.alert.message = "";
      }, 3000);
    },
  },
};
</script>

<style></style>
