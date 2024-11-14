<template>
  <section class="px-5 py-10 md:px-10 md:py-20">
    <div class="bg-gray-800 rounded-sm p-5 flex flex-col gap-1 md:gap-3">
      <p class="text-sm md:text-base">Total Value</p>
      <h1 class="font-bold text-xl md:text-2xl">
        $<span>{{ formatNumber(userData.accountBalance) }}</span>
      </h1>
      <div
        class="flex flex-col md:flex-row justify-between mt-5 text-primary font-medium gap-3 md:gap-5"
      >
        <router-link to="/wallet/deposit">
          <button class="bg-secondary px-7 rounded-sm py-1 md:py-2">
            Deposit
            <span><i class="fa-solid fa-arrow-down text-[0.7rem]"></i></span>
          </button>
        </router-link>
        <router-link to="/wallet/withdraw">
          <button class="bg-white px-7 rounded-sm py-1 md:py-2 w-full">
            Withdraw
            <span><i class="fa-solid fa-arrow-up text-[0.7rem]"></i></span>
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.state.user;
    },
  },
  methods: {
    formatNumber(value) {
      return new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    },
  },
};
</script>
