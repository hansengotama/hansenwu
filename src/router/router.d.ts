import {
  createRouter,
  createWebHistory,
  RouterScrollBehavior,
} from "vue-router";
import { routes } from "./routes.d";
import { SmoothScrollBehavior } from "/src/types/type/smoothScrollBehavior.ts";

const history = createWebHistory();
const scrollBehavior: RouterScrollBehavior = function scrollBehavior(to, from) {
  if (from.name == to.name || to.hash) {
    let smoothScrollBehavior: SmoothScrollBehavior = {
      behavior: "smooth",
      top: 0,
    };

    if (to.hash) smoothScrollBehavior.el = to.hash;

    return smoothScrollBehavior;
  }

  return { top: 0 };
};
const router = createRouter({
  history,
  routes,
  scrollBehavior,
});

router.beforeEach((to, _, next) => {
  if (to.meta.hash && !to.meta.hash.includes(to.hash))
    return next({ path: "404" });

  document.title = to.name ? to.name.toString() + " --- Hansen" : "Hansen";

  next();
});

export default router;
