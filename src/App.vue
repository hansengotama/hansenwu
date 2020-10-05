<template>
    <router-link :to="redirect.toHome">Home</router-link>
    <router-link :to="redirect.toProject">Project</router-link>
    <router-link :to="redirect.toExperience">Experience</router-link>
    <router-view />
</template>

<script setup lang="ts">
import { ref, defineComponent } from "vue";
import { routeName } from "./types/enums/routeNameEnum";

export const redirect = ref({
    toHome: { name: routeName.HOME },
    toProject: { name: routeName.PROJECT },
    toExperience: { name: routeName.EXPERIENCE },
});

export default defineComponent({
    name: "App",
});
</script>