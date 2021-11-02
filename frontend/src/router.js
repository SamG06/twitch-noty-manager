import { createWebHistory, createRouter } from "vue-router";

import InitialSetup from "./views/InitialSetup.vue";

import PageNotFound from "./views/PageNotFound.vue";

const routes = [
  {
    path: "/:pathMatch(.*)",
    name: "404",
    component: PageNotFound,
  },
  {
    path: "/",
    name: "Setup Key",
    component: InitialSetup,
  },
  {
    path: "/setup",
    name: "Setup Key",
    component: InitialSetup,
  },
  {
    path: "/setup/user",
    name: "User Setup",
    component: InitialSetup,
  },
];

const firstTime = true;

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/" && firstTime) next({ path: "/setup" });
  else next();
});

export default router;
