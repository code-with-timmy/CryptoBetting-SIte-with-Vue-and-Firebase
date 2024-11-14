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
    <router-link to="/"
      ><div class="flex justify-items-center items-center gap-3 mb-5">
        <div class="h-auto w-[40px] rounded-full">
          <img
            class="h-auto w-auto rounded-full"
            src="../img-asset/logo.jpg"
            alt=""
          />
        </div>

        <h1 class="text-2xl font-bold">anon360</h1>
      </div></router-link
    >
    <div
      class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
        >
          Log into your account
        </h1>
        <form class="space-y-4 md:space-y-6" @submit.prevent="login">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-secondary focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary"
          >
            Login
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account?
            <router-link
              to="/accounts/register"
              class="text-secondary font-medium"
              >Sign up</router-link
            >
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from "@/firebase";
import { signInUser } from "@/firebase";
import DialogModel from "../UI/DialogModel.vue";
export default {
  components: {
    DialogModel,
  },
  data() {
    return {
      email: null,
      password: null,
      isLoading: false,
      alert: {
        type: "",
        message: "",
      },
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      signInUser(auth, this.email, this.password)
        .then((user) => {
          // Signed up
          console.log(user);
          this.$store.dispatch("login");

          this.showAlert("success", "success");

          setTimeout(() => {
            this.$router.replace("/");
          }, 2000);

          // ...
        })
        .catch((error) => {
          console.log(error.message);
          this.showAlert("error", "Invalid email/password");
          // ..
        });
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
