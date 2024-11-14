import { createStore } from "vuex";
import { db } from "./firebase";
import { ref, onValue, set, push } from "firebase/database";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import axios from "axios";

export default createStore({
  state() {
    return {
      user: null,
      userData: {},
      pendingDeposits: [],
      topCoins: [],
      loading: true,
      recentTransactions: [],
    };
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setRecentTransactions(state, transactions) {
      state.recentTransactions = transactions;
    },
    setUserData(state, userData) {
      state.user = { ...state.user, ...userData };
    },
    setPendingDeposits(state, deposits) {
      state.pendingDeposits = deposits;
    },
    addPendingDeposit(state, deposit) {
      state.pendingDeposits.push(deposit);
    },
    setTopCoins(state, coins) {
      state.topCoins = coins;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async logoutUser({ commit }) {
      await signOut(auth);
      commit("setUser", null);
    },

    setUser({ commit, dispatch }, user) {
      commit("setUser", user);
      dispatch("fetchUser");
    },
    setUserData({ commit }, userData) {
      commit("setUserData", userData);
    },
    setRecentTransactions({ commit }, userId) {
      const transactionsRef = ref(db, `users/${userId}/pendingWithdrawals`);
      onValue(transactionsRef, (snapshot) => {
        const transactions = [];
        snapshot.forEach((childSnapshot) => {
          const transaction = childSnapshot.val();
          transaction.id = childSnapshot.key;
          transactions.push(transaction);
        });
        commit("setRecentTransactions", transactions);
      });
    },
    subscribeToBalanceChanges({ commit }, userId) {
      const balanceRef = ref(db, `users/${userId}/accountBalance`);
      onValue(balanceRef, (snapshot) => {
        const balance = snapshot.val();

        commit("setUserData", { accountBalance: balance });
      });
    },
    fetchUser({ commit, state }) {
      const user = state.user;
      if (user) {
        const userRef = ref(db, `users/${user.uid}`);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();

          commit("setUserData", userData);
        });
        const depositsRef = ref(db, `users/${user.uid}/pendingDeposits`);
        onValue(depositsRef, (snapshot) => {
          const deposits = [];
          snapshot.forEach((childSnapshot) => {
            const deposit = childSnapshot.val();
            deposits.push({ ...deposit, id: childSnapshot.key });
          });
          commit("setPendingDeposits", deposits);
        });
      } else {
        commit("setUserData", {});
        commit("setPendingDeposits", []);
      }
    },
    async addDeposit({ commit, state }, { amount, depositType }) {
      const user = state.user;
      if (user) {
        const newDepositRef = push(
          ref(db, `users/${user.uid}/pendingDeposits`)
        );
        const depositId = newDepositRef.key;
        await set(newDepositRef, {
          amount,
          type: depositType,
          date: new Date().toISOString(),
          status: false,
        });
        commit("addPendingDeposit", {
          id: depositId,
          amount,
          type: depositType,
          date: new Date().toISOString(),
          status: false,
        });
        return depositId;
      }
      return null;
    },
    async fetchTopCoins({ commit }) {
      commit("setLoading", true);
      try {
        const coinData = [
          {
            name: "Bitcoin",
            symbol: "BTC",
            address: "0x0000000000000000000000000000000000000000",
          },
          {
            name: "Ethereum",
            symbol: "ETH",
            address: "0x0000000000000000000000000000000000000000",
          },
          {
            name: "Ripple",
            symbol: "USDT",
            address: "0x0000000000000000000000000000000000000000",
          },
          {
            name: "BinanceSmartChain",
            symbol: "BNB",
            address: "0x0000000000000000000000000000000000000000",
          },
        ];
        const requests = coinData.map((coin) =>
          axios.get(
            `https://api.diadata.org/v1/assetQuotation/${coin.name}/${coin.address}`
          )
        );
        const responses = await Promise.all(requests);
        const coins = responses.map((response, index) => ({
          symbol: coinData[index].symbol,
          price: Math.round(response.data.Price),
        }));
        commit("setTopCoins", coins);
        commit("setLoading", false);
      } catch (error) {
        console.error("Error fetching top coins:", error);
        commit("setLoading", false);
      }
    },
  },
  getters: {
    user: (state) => state.user,
    recentTransactions: (state) => state.recentTransactions,
  },
});
