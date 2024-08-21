export default [
  {
    name: "auth",
    path: "/auth",
    component: () => import("./pages/index.vue"),

    redirect: { name: "auth" },
    children: [
      {
        path: "sign-in",
        component: () => import("./pages/signIn.vue"),
        name: "signIn",
      },
      {
        path: "register",
        component: () => import("./pages/register.vue"),
        name: "register",
      },
    ],
  },
];
