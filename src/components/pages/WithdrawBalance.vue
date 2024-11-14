<template>
  <the-header title="WITHDRAW"></the-header>
  <section class="w-screen h-screen bg-primary py-24 text-white">
    <div class="flex gap-2 md:gap-8 px-4">
      <button @click="$router.go(-1)">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <h1 class="font-bold text-lg md:text-2xl">WITHDRAW</h1>
    </div>
    <div
      class="flex flex-col md:flex-row justify-between px-4 md:px-14 mt-4 border-b border-b-gray-600"
    >
      <button
        @click="toggleTabs('withdraw-assets')"
        :class="activeTabStyle1"
        class="font-bold text-sm md:text-base text-gray-400 py-3 md:py-4"
      >
        Withdraw Assets
      </button>
      <button
        class="font-bold py-3 md:py-4 text-sm md:text-base text-gray-400"
        @click="toggleTabs('pending-withdrawals')"
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
import PendingWithdrawals from "../PendingWithdrawals.vue";
import WithdrawAssets from "../WithdrawAssets.vue";
export default {
  components: {
    TheHeader,
    PendingWithdrawals,
    WithdrawAssets,
  },
  data() {
    return {
      activeTab: "withdraw-assets",
    };
  },
  computed: {
    activeTabStyle1() {
      return this.activeTab == "withdraw-assets" ? "flat" : null;
    },
    activeTabStyle2() {
      return this.activeTab == "pending-withdrawals" ? "flat" : null;
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
