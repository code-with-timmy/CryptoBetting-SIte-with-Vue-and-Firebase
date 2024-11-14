<template>
  <section class="text-center w-full h-100% text-white px-5">
    <div class="mt-6 text-sm border-b border-gray-500 pb-7">
      <h1 class="font-bold">withdrawal history</h1>
      <p class="text-gray-400 mt-3">Tap to open</p>
      <div
        class="flex justify-between mt-6 text-sm gap-2"
        v-for="transaction in recentTransactions"
        :key="transaction.id"
      >
        <div>
          <p>
            Order ID: <span>{{ transaction.id }}</span>
          </p>
          <p class="text-gray-400">{{ formatDate(transaction.timestamp) }}</p>
        </div>
        <div>
          <p>
            $<span>{{ transaction.amount }}</span>
          </p>
          <p class="text-gray-400">Successful</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: { ...mapGetters(["recentTransactions", "user"]) },
  methods: {
    ...mapActions(["setRecentTransactions"]),
    formatDate(timestamp) {
      const date = new Date(timestamp);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    },
  },
  created() {
    if (this.user) {
      this.setRecentTransactions(this.user.uid);
    }
  },
};
</script>

<style></style>
