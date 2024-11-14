<template>
  <the-header title="DEPOSIT"></the-header>
  <section class="w-screen h-screen bg-primary py-24 text-white">
    <div class="flex gap-2 md:gap-8 px-4">
      <button @click="$router.go(-1)">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <h1 class="font-bold text-lg md:text-2xl">DEPOSIT</h1>
    </div>
    <div
      class="flex flex-col md:flex-row justify-between px-4 md:px-14 mt-4 border-b border-b-gray-600"
    >
      <button
        @click="toggleTabs('fund-account')"
        :class="activeTabStyle1"
        class="font-bold text-sm md:text-base text-gray-400 py-3 md:py-4"
      >
        Fund Account
      </button>
      <button
        class="font-bold py-3 md:py-4 text-sm md:text-base text-gray-400"
        @click="toggleTabs('pending-orders')"
        :class="activeTabStyle2"
      >
        Pending Orders
      </button>
    </div>
    <keep-alive>
      <component :is="activeTab"></component>
    </keep-alive>
  </section>
</template>

<script>
import TheHeader from "../layouts/TheHeader.vue";
import FundAccount from "../FundAccount.vue";
import PendingOrders from "../PendingOrders.vue";

export default {
  components: {
    TheHeader,
    FundAccount,
    PendingOrders,
  },
  data() {
    return {
      activeTab: "fund-account",
    };
  },
  computed: {
    activeTabStyle1() {
      return this.activeTab == "fund-account" ? "flat" : null;
    },
    activeTabStyle2() {
      return this.activeTab == "pending-orders" ? "flat" : null;
    },
  },
  methods: {
    toggleTabs(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.flat {
  color: white;
  border-bottom: 2px solid red;
}
</style>
