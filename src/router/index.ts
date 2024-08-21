import { createRouter, createWebHistory } from "vue-router";
import wrapperLayout from "@/layouts/dashboard/Index.vue";
import homeRoutes from "@/modules/home/home.routes";
import authLayout from "@/layouts/AuthLayout.vue";
import authRoutes from "@/modules/auth/auth.routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/chat",
      component: wrapperLayout,
      children: [...homeRoutes],
    },
    {
      path: "/auth",
      component: authLayout,
      children: [...authRoutes],
    },
    {
      path: "/",
      redirect: "/auth/sign-in",
    },
  ],
});

export default router;
