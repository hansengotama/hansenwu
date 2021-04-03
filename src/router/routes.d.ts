import { routeName } from "/src/types/enums/routeNameEnum";
import component from "../shims-vue-d";

const homeHash = ["", "#skill", "#contact-me"];

export const routes = [
  {
    path: "/",
    component: () => import("/src/components/layout/index.vue"),
    children: [
      {
        path: "/",
        name: routeName.HOME,
        component: () => import("/src/pages/home/index.vue"),
        meta: {
          hash: homeHash,
        },
      },
      {
        path: "/my-project",
        name: routeName.PROJECT,
        component: () => import("/src/pages/project/index.vue"),
      },
      {
        path: "/my-experience",
        name: routeName.EXPERIENCE,
        component: () => import("/src/pages/experience/index.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("/src/pages/not-found/index.vue"),
  },
];
