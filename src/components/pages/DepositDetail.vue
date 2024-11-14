<template>
  <dialog-model
    :message="alert.message"
    :showAlert="alert.message"
    :type="alert.type"
  ></dialog-model>

  <the-header title="DEPOSIT"></the-header>
  <section class="bg-primary text-white py-24 h-full px-7 text-2xl">
    <div>
      <h1 class="font-bold">Deposit</h1>
      <div class="flex justify-between mt-7 mb-7">
        <div class="flex flex-col gap-1">
          <p class="text-[1rem] text-gray-400">Total Amount</p>
          <p class="font-medium text-[1.3rem]">
            <span>$</span>{{ deposit.amount }}<span>.00</span>
          </p>
        </div>
        <div class="flex flex-col gap-1 border-l-2 border-l-gray-400 px-4">
          <p class="text-[1rem] text-gray-400">Pay with</p>
          <p class="font-medium text-[1rem]">{{ deposit.type }}</p>
        </div>
      </div>
    </div>
    <div class="text-center text-xl bg-gray-800 py-10 rounded-lg my-10">
      <div class="h-auto w-[200px] mx-auto rounded-lg">
        <img class="h-auto w-auto rounded-lg" :src="qrCodeSrc" alt="qrcode" />
      </div>
      <div class="flex flex-col gap-3 mt-10 px-5">
        <p
          @click="copyAddress"
          class="bg-primary w-fit px-8 rounded-lg py-2 mx-auto text-[1.3rem]"
        >
          Copy Address
        </p>
        <p class="text-[1.1rem]">
          Send only <span class="font-bold">{{ deposit.type }}</span> to this
          address. Sending any other coins may result in permanent loss.
        </p>
      </div>
    </div>
    <div class="text-justify bg-gray-800 py-10 px-4 rounded-lg my-10">
      <p class="text-[1.1rem]">
        if you have successfully transfered
        <span class="font-bold">${{ deposit.amount }}.00 </span> to the provided
        address, procees to <span class="font-bold">verify</span> the payments
        OR click <span class="font-bold">Edit</span> to change deposit options.
      </p>
    </div>
    <div class="w-full gap-5 text-[1.1rem]">
      <p class="text-secondary">Wait for @Admin to confirm Deposit</p>
    </div>
  </section>
</template>

<script>
import TheHeader from "../layouts/TheHeader.vue";
import { ref, get } from "firebase/database";

import { db } from "@/firebase";
import DialogModel from "../UI/DialogModel.vue";
export default {
  props: ["depositId"],
  components: {
    TheHeader,
    DialogModel,
  },
  data() {
    return {
      alert: {
        type: "",
        message: "",
      },
      deposit: {},
      depositTypes: [
        {
          name: "Bitcoin (BTC)",
          img: "Bitcoin(BTC)",
          address:
            "bc1p95flksd62jy4gjuwgwwlm6kp93cxed7e3dfxvgp4eve0qzzvl0tsh8pgyq",
        },
        {
          name: "Ethereum (ETH)",
          img: "Ethereum(ETH)",
          address: "0x4245b4e547485e9eb99a0fe102ba819b70055418",
        },
        {
          name: "Tether (USDT)",
          img: "Tether(USDT)",
          address: "TTgSXP74ZbPy8ymPDUt5voTGg3QQgMLs9o",
        },
        {
          name: "Binance (BNB)",
          img: "Binance(BNB)",
          address: "0x4245b4e547485e9eb99a0fe102ba819b70055418",
        },
      ],
    };
  },
  computed: {
    depositAddress() {
      const depositType = this.depositTypes.find(
        (type) => type.name === this.deposit.type
      );
      return depositType ? depositType.address : "";
    },
    qrCodeSrc() {
      const depositType = this.depositTypes.find(
        (type) => type.name === this.deposit.type
      );
      const path = depositType
        ? require(`@/components/img-asset/${depositType.img}.jpg`)
        : "";
      console.log("QR Code Source:", path);
      return path;
    },
  },
  methods: {
    copyAddress() {
      const depositAddress = this.depositAddress;
      const textArea = document.createElement("textarea");
      textArea.value = depositAddress;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        const successful = document.execCommand("copy");
        console.log(
          "Address copied to clipboard:",
          successful ? depositAddress : "Copy failed"
        );
        this.showAlert("success", "copied!");
      } catch (err) {
        console.error("Failed to copy address:", err);
      }
      document.body.removeChild(textArea);
    },
    showAlert(type, message) {
      this.alert.type = type;
      this.alert.message = message;
      setTimeout(() => {
        this.alert.message = "";
      }, 3000);
    },
  },
  async created() {
    const user = this.$store.state.user;
    if (user) {
      const depositRef = ref(
        db,
        `users/${user.uid}/pendingDeposits/${this.depositId}`
      );
      const snapshot = await get(depositRef);
      console.log("User ID:", user.uid);
      console.log("Deposit ID from URL:", this.depositId);
      console.log(
        "Path in Firebase:",
        `users/${user.uid}/pendingDeposits/${this.depositId}`
      );
      if (snapshot.exists()) {
        this.deposit = snapshot.val();

        console.log("Deposit data:", this.deposit);
      } else {
        console.error("Deposit not found");
      }
    } else {
      console.error("User not authenticated");
    }
  },
};
</script>
<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>
