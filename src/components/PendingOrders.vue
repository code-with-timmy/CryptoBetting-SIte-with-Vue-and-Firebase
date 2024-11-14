<template>
  <section class="text-center w-full h-100% text-white px-5">
    <div class="mt-6 text-sm border-b border-gray-500 pb-7">
      <h1 class="font-bold">Pending Deposit Orders</h1>
      <p class="text-gray-400 mt-3">Tap to open</p>
      <div
        class="flex justify-between mt-6 text-sm gap-2"
        v-for="deposit in pendingDeposits"
        :key="deposit.id"
        @click="showDepositLog(deposit.id)"
      >
        <div>
          <p>
            Order ID: <span>{{ deposit.id }}</span>
          </p>
          <p class="text-gray-400">Novemeber 4th 2024</p>
        </div>
        <div>
          <p>
            $<span>{{ deposit.amount }}</span>
          </p>
          <p class="text-gray-400">{{ checkStatus }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["pendingDeposits"]),
    checkStatus() {
      return this.pendingDeposits.status ? "approved" : "waiting...";
    },
  },
  methods: {
    showDepositLog(id) {
      this.$router.push(`/wallet/deposit/${id}`);
    },
  },
};
</script>

<style></style>
