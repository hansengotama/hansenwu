import { routeName } from "/src/types/enums/routeNameEnum";
import { ref } from "vue";

export default ref({
  home: {
    redirect: {
      name: routeName.HOME,
    },
    url: "/",
  },
  skill: {
    redirect: {
      name: routeName.HOME,
      hash: "#skill",
    },
    url: "/#skill",
  },
  project: {
    redirect: {
      name: routeName.PROJECT,
    },
    url: "/my-project",
  },
  experience: {
    redirect: {
      name: routeName.EXPERIENCE,
    },
    url: "/my-experience",
  },
  contact: {
    redirect: {
      name: routeName.HOME,
      hash: "#contact-me",
    },
    url: "/#contact-me",
  },
});
