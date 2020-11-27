<template>
    <WebsiteMenu v-if="isWebView" :route="route" />
    <MobileMenu v-else @openMenu="openMenu" />
</template>

<script setup="props, { emit }" lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import WebsiteMenu from "./website.vue";
import MobileMenu from "./mobile.vue";

declare const props: {
    route: {
        type: Object;
        required: true;
    };
};

export const openMenu = () => emit("openMenu");

onMounted(() => {
    validateWindowSize(window.innerWidth);
    window.addEventListener("resize", onWindowResize);
});

onUnmounted(() => {
    window.removeEventListener("resize", onWindowResize);
});

export let isWebView = ref(false);

const onWindowResize = (event: any): void => {
    validateWindowSize(event?.target?.innerWidth);
};

const validateWindowSize = (innerWidth: number): void => {
    const maxWebsiteWidth = 550;

    if (innerWidth && innerWidth < maxWebsiteWidth) {
        isWebView.value = false;
        return;
    }

    isWebView.value = true;
};

export default defineComponent({
    components: {
        WebsiteMenu,
        MobileMenu,
    },
    emits: ["openMenu"],
});
</script>

<style lang="scss" scoped>
@import "./src/scss/index.scss";
</style>