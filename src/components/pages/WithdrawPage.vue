<template>
  <the-header title="WALLET"></the-header>
  <section class="w-screen h-screen bg-primary py-24 text-white">
    <div class="flex gap-8 px-4">
      <button @click="$router.go(-1)">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <h1 class="font-bold">Account Assets</h1>
    </div>
    <div class="flex justify-between px-14 mt-4 border-b border-b-gray-600">
      <button
        @click="toggleTabs('spot-balance')"
        :class="activeTabStyle1"
        class="font-bold text-sm text-gray-400 py-3"
      >
        Spot Balance
      </button>
      <button
        class="font-bold py-3 text-sm text-gray-400"
        @click="toggleTabs('all-assets')"
        :class="activeTabStyle2"
      >
        All Assets
      </button>
    </div>
    <keep-alive>
      <component :is="activeTab"></component>
    </keep-alive>
  </section>
</template>

<script>
import TheHeader from "../layouts/TheHeader.vue";
import SpotBalance from "../SpotBalance.vue";
import AllAssets from "../AllAssets.vue";

export default {
  components: {
    TheHeader,
    SpotBalance,
    AllAssets,
  },
  data() {
    return {
      activeTab: "spot-balance",
    };
  },
  computed: {
    activeTabStyle1() {
      return this.activeTab == "spot-balance" ? "flat" : null;
    },
    activeTabStyle2() {
      return this.activeTab == "all-assets" ? "flat" : null;
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
