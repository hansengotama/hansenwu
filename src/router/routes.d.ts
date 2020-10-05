import { routeName } from "./../types/enums/routeNameEnum"

export const routes = [
    {
        path: "/",
        name: routeName.HOME,
        component: () => import("./../pages/home/index.vue"),
    },
    {
        path: "/project",
        name: routeName.PROJECT,
        component: () => import("./../pages/project/index.vue"),
    },
    {
        path: "/experience",
        name: routeName.EXPERIENCE,
        component: () => import("./../pages/experience/index.vue"),
    }
]
