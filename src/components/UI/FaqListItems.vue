<template>
  <section
    class="mx-auto px-5 py-10 md:px-20 bg-primary text-white border-none"
  >
    <h1 class="text-left text-3xl md:text-5xl lg:text-7xl md:mb-20 mt-6 mb-10">
      Frequently asked questions
    </h1>
    <the-faq-section
      v-for="(faq, index) in faqContext"
      :key="index"
      :heading="faq.title"
      :sub-heading="faq.subtitle"
    ></the-faq-section>
  </section>
</template>

<script>
import TheFaqSection from "../TheFaqSection.vue";
export default {
  components: {
    TheFaqSection,
  },
  data() {
    return {
      faqContext: [
        {
          title: "HOW CAN I PLACE BETS?    ",
          subtitle: `We provide a very efficient and robust solution for our clients to easily place bets, securely, easy, and fast. You can start betting in a few minutes.
            1. Once you are logged in, you will be redirected to your user Dashboard. Click on the Bet Now link and choose your desired event or game.
            2. Deposit the amount you wish to bet to your betting wallet.
            3. Return to the betting view and select your bets.
            NOTE: Make your bets only through the 365PUNT platform.`,
        },
        {
          title: "HOW DOES THE BETTING SYSTEM WORK?    ",
          subtitle: `We use advanced systems to monitor and manage the bets of our clients. Depending on your betting plan, you should expect varying returns on your bets. You can easily manage your bets; you can top up to increase your potential returns or switch to higher stakes once you have an active bet running. You can also cash out your bets once the event is completed for potential profits.`,
        },
        {
          title: "HOW TO PLACE A BETTING?    ",
          subtitle: `Placing a bet with 365PUNT is simple and straightforward. To participate in betting, your account must be verified.

Once you've created an account, log in to your dashboard, navigate to account verification, and follow the instructions to verify your account.

To place a bet, you will need to deposit funds into your betting wallet. All bets can be placed on various events or games available on the platform.

Bet winnings can be withdrawn or reinvested for further betting opportunities. Terms and conditions apply.`,
        },
      ],
    };
  },
};
</script>
