<template>
  <section class="px-5 py-10">
    <div class="rounded-sm p-5 flex flex-col gap-1">
      <p>Total Value</p>
      <h1 class="font-bold text-xl">
        $<span>{{ formatNumber(userData.accountBalance) }}</span
        >***
      </h1>
      <div
        class="flex flex-col rounded-sm bg-gray-800 text-white justify-between mt-5 font-medium"
      >
        <p class="w-full bg-secondary p-5">Wallet Info</p>
        <div class="p-5 flex justify-between">
          <p>Spot Balance</p>
          <p>
            $ <span>{{ formatNumber(userData.accountBalance) }}</span>
          </p>
        </div>
        <p class="p-5 text-sm text-justify">
          All winnings and withdrawals are made from the
          <span class="font-bold">SPOT BALANCE.</span>won funds can be moved to
          your spot wallet if the redemption date is fulfilled
        </p>
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

<style></style>
