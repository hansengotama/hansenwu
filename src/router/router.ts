import { createRouter, createWebHistory } from "vue-router"
import { routes } from "./routes.d"

const history = createWebHistory();
const router = createRouter({
  history,
  routes,
})

router.beforeEach((to, _, next) => {
  document.title = to.name ? to.name.toString() + " --- Hansen" : "Hansen";

  next();
});

export default router