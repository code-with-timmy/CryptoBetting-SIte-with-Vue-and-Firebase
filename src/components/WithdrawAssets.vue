<template>
  <the-spinner v-if="isLoading"></the-spinner>
  <section class="p-5">
    <div>
      <p>Select Withdrawal Method</p>
    </div>
    <div class="grid grid-cols-2 bg-gray-800 gap-4 p-3 rounded-sm mt-4">
      <div
        class="h-[40px] w-[120px] border-2 border-gray-600 rounded-sm"
        @click="switchTab('Bitcoin (BTC)')"
        :class="activeTabStyle1"
      >
        <p class="text-[0.8rem] font-medium flex gap-2 p-2 px-2 text-center">
          <span
            ><svg
              class="h-[15px] w[15px]"
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              width="100%"
              height="100%"
              version="1.1"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 4091.27 4091.73"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
            >
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <g id="_1421344023328">
                  <path
                    fill="#F7931A"
                    fill-rule="nonzero"
                    d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"
                  />
                  <path
                    fill="white"
                    fill-rule="nonzero"
                    d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"
                  />
                </g>
              </g></svg></span
          >BTC
        </p>
      </div>
      <div
        class="h-[40px] w-[120px] border-2 border-gray-600 rounded-sm"
        @click="switchTab('Ethereum (ETH)')"
        :class="activeTabStyle2"
      >
        <p class="text-[0.8rem] font-medium flex gap-2 p-2 px-2 text-center">
          <span
            ><svg
              class="h-[15px] w[15px]"
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              width="100%"
              height="100%"
              version="1.1"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 784.37 1277.39"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
            >
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <g id="_1421394342400">
                  <g>
                    <polygon
                      fill="#343434"
                      fill-rule="nonzero"
                      points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
                    />
                    <polygon
                      fill="#8C8C8C"
                      fill-rule="nonzero"
                      points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
                    />
                    <polygon
                      fill="#3C3C3B"
                      fill-rule="nonzero"
                      points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
                    />
                    <polygon
                      fill="#8C8C8C"
                      fill-rule="nonzero"
                      points="392.07,1277.38 392.07,956.52 -0,724.89 "
                    />
                    <polygon
                      fill="#141414"
                      fill-rule="nonzero"
                      points="392.07,882.29 784.13,650.54 392.07,472.33 "
                    />
                    <polygon
                      fill="#393939"
                      fill-rule="nonzero"
                      points="0,650.54 392.07,882.29 392.07,472.33 "
                    />
                  </g>
                </g>
              </g></svg></span
          >ETH
        </p>
      </div>
      <div
        class="h-[40px] w-[120px] border-2 border-gray-600 rounded-sm"
        @click="switchTab('Tether (USDT)')"
        :class="activeTabStyle3"
      >
        <p class="text-[0.8rem] font-medium flex gap-2 p-2 px-2 text-center">
          <span
            ><svg
              class="h-[15px] w[15px]"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 339.43 295.27"
            >
              <title>tether-usdt-logo</title>
              <path
                d="M62.15,1.45l-61.89,130a2.52,2.52,0,0,0,.54,2.94L167.95,294.56a2.55,2.55,0,0,0,3.53,0L338.63,134.4a2.52,2.52,0,0,0,.54-2.94l-61.89-130A2.5,2.5,0,0,0,275,0H64.45a2.5,2.5,0,0,0-2.3,1.45h0Z"
                style="fill: #50af95; fill-rule: evenodd"
              />
              <path
                d="M191.19,144.8v0c-1.2.09-7.4,0.46-21.23,0.46-11,0-18.81-.33-21.55-0.46v0c-42.51-1.87-74.24-9.27-74.24-18.13s31.73-16.25,74.24-18.15v28.91c2.78,0.2,10.74.67,21.74,0.67,13.2,0,19.81-.55,21-0.66v-28.9c42.42,1.89,74.08,9.29,74.08,18.13s-31.65,16.24-74.08,18.12h0Zm0-39.25V79.68h59.2V40.23H89.21V79.68H148.4v25.86c-48.11,2.21-84.29,11.74-84.29,23.16s36.18,20.94,84.29,23.16v82.9h42.78V151.83c48-2.21,84.12-11.73,84.12-23.14s-36.09-20.93-84.12-23.15h0Zm0,0h0Z"
                style="fill: #fff; fill-rule: evenodd"
              /></svg></span
          >USDT
        </p>
      </div>
      <div
        class="h-[40px] w-[120px] border-2 border-gray-600 rounded-sm"
        @click="switchTab('Binance (BNB)')"
        :class="activeTabStyle4"
      >
        <p class="text-[0.8rem] font-medium flex gap-2 p-2 px-2 text-center">
          <span
            ><svg
              class="h-[15px] w[15px]"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 2496 2496"
              style="enable-background: new 0 0 2496 2496"
              xml:space="preserve"
            >
              <g>
                <path
                  style="fill-rule: evenodd; clip-rule: evenodd; fill: #f0b90b"
                  d="M1248,0c689.3,0,1248,558.7,1248,1248s-558.7,1248-1248,1248
          S0,1937.3,0,1248S558.7,0,1248,0L1248,0z"
                />
                <path
                  style="fill: #ffffff"
                  d="M685.9,1248l0.9,330l280.4,165v193.2l-444.5-260.7v-524L685.9,1248L685.9,1248z M685.9,918v192.3
          l-163.3-96.6V821.4l163.3-96.6l164.1,96.6L685.9,918L685.9,918z M1084.3,821.4l163.3-96.6l164.1,96.6L1247.6,918L1084.3,821.4
          L1084.3,821.4z"
                />
                <path
                  style="fill: #ffffff"
                  d="M803.9,1509.6v-193.2l163.3,96.6v192.3L803.9,1509.6L803.9,1509.6z M1084.3,1812.2l163.3,96.6
          l164.1-96.6v192.3l-164.1,96.6l-163.3-96.6V1812.2L1084.3,1812.2z M1645.9,821.4l163.3-96.6l164.1,96.6v192.3l-164.1,96.6V918
          L1645.9,821.4L1645.9,821.4L1645.9,821.4z M1809.2,1578l0.9-330l163.3-96.6v524l-444.5,260.7v-193.2L1809.2,1578L1809.2,1578
          L1809.2,1578z"
                />
                <polygon
                  style="fill: #ffffff"
                  points="1692.1,1509.6 1528.8,1605.3 1528.8,1413 1692.1,1316.4 1692.1,1509.6 	"
                />
                <path
                  style="fill: #ffffff"
                  d="M1692.1,986.4l0.9,193.2l-281.2,165v330.8l-163.3,95.7l-163.3-95.7v-330.8l-281.2-165V986.4
          L968,889.8l279.5,165.8l281.2-165.8l164.1,96.6H1692.1L1692.1,986.4z M803.9,656.5l443.7-261.6l444.5,261.6l-163.3,96.6
          l-281.2-165.8L967.2,753.1L803.9,656.5L803.9,656.5z"
                />
              </g>
            </svg> </span
          >BNB
        </p>
      </div>
    </div>
    <div class="bg-gray-800 p-4 mt-10">
      <p class="text-secondary text-sm">Withdrawal method</p>
      <div class="bg-primary w-fit px-5 py-1 rounded-sm">
        <p class="text-sm font-medium py-1">{{ activeTab }}</p>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <p class="text-sm">($) Amount</p>
        <form class="w-[100%]" @submit.prevent="submitWithdrawal">
          <input
            v-model.number="amount"
            type="number"
            name="amount"
            id="amount"
            class="bg-gray-800 w-full border-2 border-gray-600 rounded-sm p-1 px-2"
            placeholder="0.00"
          />
          <p class="text-sm">Address</p>
          <input
            v-model="address"
            type="text"
            name="text"
            id="text"
            class="bg-gray-800 w-full border-2 border-gray-600 rounded-sm p-1 px-2"
            placeholder="0xxxxx"
          />
          <p v-if="checkAmount" class="text-sm text-secondary">
            *Mininim withdrawal is {{ miniWithdraw }}
          </p>
          <button
            type="submit"
            class="bg-secondary text-primary font-medium mt-3 w-[50%] px-5 py-1"
          >
            Withdraw <i class="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
    <dialog-model2
      :show="showDialog"
      :message="dialogMessage"
      @close="showDialog = false"
    ></dialog-model2>
  </section>
</template>

<script>
import TheSpinner from "./UI/TheSpinner.vue";
import { db } from "@/firebase";
import { ref, push, update } from "firebase/database";
import { mapGetters } from "vuex";
import DialogModel2 from "./UI/DialogModel2.vue";
export default {
  components: {
    TheSpinner,
    DialogModel2,
  },
  data() {
    return {
      activeTab: "Bitcoin (BTC)",
      amount: null,
      address: "",
      isLoading: false,
      miniWithdraw: 300000,
      checkAmount: false,
      showDialog: false,
      dialogMessage: "",
    };
  },

  computed: {
    activeTabStyle1() {
      return this.activeTab == "Bitcoin (BTC)" ? "active" : null;
    },
    activeTabStyle2() {
      return this.activeTab == "Ethereum (ETH)" ? "active" : null;
    },
    activeTabStyle3() {
      return this.activeTab == "Tether (USDT)" ? "active" : null;
    },
    activeTabStyle4() {
      return this.activeTab == "Binance (BNB)" ? "active" : null;
    },
    ...mapGetters(["user"]),
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
    },
    async submitWithdrawal() {
      if (this.amount <= this.miniWithdraw) {
        this.checkAmount = true;
        return;
      }
      if (this.user.currentBalance < this.amount) {
        this.showDialogMessage("Insufficient balance for this withdrawal.");
        return;
      }
      try {
        const newWithdrawal = {
          amount: this.amount,
          type: this.activeTab,
          address: this.address,
          status: "pending",
          timestamp: new Date().toISOString(),
        };
        const userRef = ref(db, `users/${this.user.uid}`);
        const withdrawalRef = ref(
          db,
          `users/${this.user.uid}/pendingWithdrawals`
        );
        await push(withdrawalRef, newWithdrawal);
        const amount = Number(this.amount);
        const currentAmount = Number(this.user.accountBalance);
        const newBalance = currentAmount - amount;
        await update(userRef, { accountBalance: Number(newBalance) });
        this.showDialogMessage("Withdrawal Successful");
        this.amount = null;
        this.activeTab = "";
        this.address = "";
        this.checkAmount = false;
      } catch (error) {
        console.error("Error creating withdrawal request:", error);
        this.showDialogMessage(
          "There was an error processing your request. Please try again."
        );
      }
    },
    showDialogMessage(message) {
      this.dialogMessage = message;
      this.showDialog = true;
    },
  },
};
</script>

<style scoped>
.active {
  border-color: red;
}
</style>
