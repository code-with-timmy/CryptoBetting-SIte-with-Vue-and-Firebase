<template>
  <section class="w-screen h-screen px-4 py-10 bg-primary text-white">
    <h1 class="text-center mb-6 text-xl">Mini Ticket Activation Plans</h1>
    <ul>
      <li
        class="bg-gray-800 px-5 py-6 rounded-lg mb-5"
        v-for="m in mini"
        :key="m.duration"
      >
        <div class="flex flex-col gap-3">
          <h2 class="font-bold">
            <span>{{ m.plan }}</span> PLAN
          </h2>
          <div class="grid grid-cols-2 gap-2 justify-center items-center">
            <p>Activation Fee</p>

            <p class="bg-primary px-5 py-2 w-fit rounded-lg">
              $<span>{{ m.amount }}</span>
            </p>
          </div>
          <router-link to="/wallet/deposit">
            <div class="p-4 rounded-lg bg-green-800 text-center mt-5">
              Activate Now
            </div>
          </router-link>
        </div>
      </li>
    </ul>
    <h1 class="text-center mb-6 text-xl mt-7">Full Ticket Activation Plans</h1>
    <ul>
      <li
        class="bg-gray-800 px-5 py-6 rounded-lg mb-5"
        v-for="m in full"
        :key="m.plan"
      >
        <div class="flex flex-col gap-3">
          <h2 class="font-bold">
            <span>{{ m.plan }}</span> PLAN
          </h2>
          <div class="grid grid-cols-2 gap-2 justify-center items-center">
            <p>Activation Fee</p>

            <p class="bg-primary px-5 py-2 w-fit rounded-lg">
              $<span>{{ m.amount }}</span>
            </p>
          </div>
          <router-link to="/wallet/deposit">
            <div class="p-4 rounded-lg bg-green-800 text-center mt-5">
              Activate Now
            </div>
          </router-link>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mini: [
        { plan: "BASIC", amount: "3000" },
        { plan: "MINI", amount: "1000" },
      ],
      full: [
        { plan: "BASIC", amount: "5000" },
        { plan: "MINI", amount: "10,000" },
      ],
    };
  },
};
</script>

<style></style>
