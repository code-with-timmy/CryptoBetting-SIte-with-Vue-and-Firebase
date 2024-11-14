import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import RegisterPage from "./components/pages/RegisterPage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import DashboardPage from "./components/pages/DashboardPage.vue";
import DepositPage from "./components/pages/DepositPage.vue";
import WithdrawPage from "./components/pages/WithdrawPage.vue";
import { auth } from "./firebase";
import DepositDetail from "./components/pages/DepositDetail.vue";
import PricingPage from "./components/pages/PricingPage.vue";
import WithdrawBalance from "./components/pages/WithdrawBalance.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/accounts/register/",
      component: RegisterPage,
      meta: { requiresAuth: false },
    },
    {
      path: "/accounts/Login/",
      component: LoginPage,
      meta: { requiresAuth: false },
    },
    { path: "/", component: HomePage, meta: { requiresAuth: false } },
    {
      path: "/dashboard",
      component: DashboardPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/wallet/deposit",
      component: DepositPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/wallet/withdraw",
      component: WithdrawBalance,
      meta: { requiresAuth: true },
    },
    {
      path: "/pricing",
      component: PricingPage,
      meta: { requiresAuth: false },
    },

    {
      path: "/wallet/deposit/:depositId",
      name: "DepositDetail",
      component: DepositDetail,
      props: true,
    },
    {
      path: "/wallet/withdraw",
      component: WithdrawPage,
      meta: { requiresAuth: true },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash, behavior: "smooth" };
    }
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !auth.currentUser) {
    return {
      path: "/accounts/Login/",

      query: { redirect: to.fullPath },
    };
  }
});

export default router;
