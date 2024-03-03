import { createRouter, createWebHistory } from "vue-router";

const appRoutes = [
  {
    path: "/PaperSite/",
    component: () => import("../components/Pages/MainPage.vue"),
  },
  {
    path: "/seanses",
    component: () => import("../components/Pages/seansesPage.vue"),
  },
];

const appRouter = createRouter({
  history: createWebHistory(),
  routes: appRoutes,
});

export default appRouter;
