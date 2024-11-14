<template>
  <the-header title="DASHBOARD"></the-header>
  <section class="bg-primary text-white w-screen h-screen py-24">
    <div
      class="flex flex-col justify-center items-center text-center gap-6 p-4 md:flex-row md:justify-between md:p-8"
    >
      <div class="flex flex-col gap-2 md:items-start md:text-left">
        <p class="text-sm">Current Balance</p>
        <h1 class="text-3xl font-bold">
          <span>$</span>{{ userData.accountBalance }}
        </h1>
        <p class="text-sm">
          <i class="fa-solid fa-right-left text-[0.7rem] mr-1"></i>0.0000
          <span>BTC</span>
        </p>
      </div>
      <div class="flex flex-col gap-5 md:flex-row md:gap-8">
        <transition name="fade" mode="out-in">
          <router-link to="/wallet/deposit">
            <p
              class="bg-secondary font-bold text-primary py-2 px-10 rounded-md"
            >
              Deposit
            </p>
          </router-link>
        </transition>
        <router-link to="/wallet/withdraw">
          <p class="bg-gray-800 font-bold text-white py-2 px-10 rounded-md">
            Wallet
          </p>
        </router-link>
      </div>
    </div>
    <div class="mt-10">
      <div class="flex justify-between w-full px-4 md:px-10 mt-10">
        <p>Top Coins</p>
        <p>View Market</p>
      </div>
      <div class="flex gap-2 overflow-x-auto no-scrollbar px-4 md:px-10 mt-4">
        <div class="flex gap-4">
          <div v-for="coin in coins" :key="coin.symbol">
            <div
              class="h-[75px] bg-gray-800 p-2 w-[120px] rounded-lg border-gray-600 border flex flex-col text-white items-left justify-left"
            >
              <p class="text-[0.8rem] font-medium flex gap-2 items-center">
                <span
                  ><img
                    :src="getCoinLogo(coin.symbol)"
                    alt="Coin Logo"
                    class="h-4 w-4" /></span
                >{{ coin.symbol }}/USD
              </p>
              <p class="text-[0.6rem] mt-2">
                {{ getCoinName(coin.symbol) }} Price
              </p>
              <p class="text-[0.85rem] font-medium">
                {{ coin.price ? `$${coin.price}` : "----" }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 px-4 md:px-10">
      <div class="text-center md:text-left">
        <p class="text-sm">ANON360</p>
        <p class="text-[0.7rem] text-gray-400">Winning Experts</p>
      </div>
      <div class="mt-3" v-if="recentDeposits.length > 0">
        <p class="bg-gray-800 w-full py-3 text-center">Recent Transaction</p>
        <div
          class="grid grid-cols-1 gap-5 mt-6 px-4 md:grid-cols-3 md:px-10 mx-auto"
        >
          <div
            class="flex justify-between items-center gap-3 p-2 bg-gray-700 rounded-md"
            v-for="deposit in recentDeposits"
            :key="deposit.id"
          >
            <div class="flex gap-3 items-center">
              <div class="text-white text-sm px-2 py-1 rounded-sm bg-green-500">
                <i class="fa-solid fa-arrow-down"></i>
              </div>
              <p class="font-medium">Deposit</p>
            </div>
            <p>{{ formatDate(deposit.date) }}</p>
            <p class="font-medium"><span>$</span>{{ deposit.amount }}</p>
          </div>
        </div>
      </div>
      <router-link to="/wallet/withdraw"
        ><div
          class="bg-gray-800 w-full md:w-[50%] mx-auto mt-5 flex gap-4 justify-center items-center py-2"
        >
          <p>All activities</p>
          <i class="fa-solid fa-arrow-right"></i></div
      ></router-link>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

import TheHeader from "../layouts/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  computed: {
    userData() {
      return this.$store.state.user;
    },

    ...mapState({
      coins: (state) => state.topCoins,
      loading: (state) => state.loading,
    }),
    recentDeposits() {
      return [...this.$store.state.pendingDeposits]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
    },
  },
  created() {
    this.$store.dispatch("fetchUser");
    this.fetchTopCoins();
  },
  methods: {
    formatDate(dateString) {
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      return new Date(dateString).toLocaleDateString("en-GB", options);
    },
    ...mapActions(["fetchTopCoins"]),
    getCoinLogo(symbol) {
      const logos = {
        BTC: require("@/components/img-asset/bitcoin-btc-logo.svg"),
        ETH: require("@/components/img-asset/ethereum-eth-logo.svg"),
        USDT: require("@/components/img-asset/tether-usdt-logo.svg"),
        BNB: require("@/components/img-asset/bnb-bnb-logo.svg"),
      };
      return logos[symbol] || "default-logo.svg";
    },
    getCoinName(symbol) {
      const names = {
        BTC: "Bitcoin",
        ETH: "Ethereum",
        USDT: "Tether",
        BNB: "Binance Coin",
      };
      return names[symbol] || "Unknown";
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
