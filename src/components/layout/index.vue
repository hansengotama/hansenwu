<template>
    <LoadingPage v-show="isLoading" />
    <div v-show="!isLoading">
        <div v-if="showMenu">
            <OpenMenu @closeMenu="closeMenu" :route="route" />
        </div>
        <div v-else>
            <transition name="slide-up">
                <Menu v-if="showNavbar" @openMenu="openMenu" :route="route" />
            </transition>
            <div class="parent-container">
                <router-view />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineComponent, onMounted, onUnmounted } from "vue";
import Menu from "./menu/index.vue";
import Footer from "./footer/index.vue";
import LoadingPage from "./loading-page/index.vue";
import OpenMenu from "./open-menu/index.vue";
import routeStaticData from "/src/static/route-data.ts";

export let isLoading = ref(true);
export let showMenu = ref(false);
export let showNavbar = ref(true);
export let lastScrollPosition = ref(0);

onMounted(() => {
    onReadyStateChange();
    window.addEventListener("scroll", onWindowScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", onWindowScroll);
});

const onWindowScroll = () => {
    const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition < 0) {
        return;
    }

    if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
        return;
    }

    showNavbar.value = currentScrollPosition < lastScrollPosition.value;
    lastScrollPosition.value = currentScrollPosition;
};

const loadingTimeOut = () => {
    if (localStorage.isLoading) {
        isLoading.value = false;
        return;
    }

    const loadingTimeMs = 1600;

    setTimeout(() => {
        isLoading.value = false;
        localStorage.isLoading = true;
    }, loadingTimeMs);
};

const onReadyStateChange = () => {
    if (document.readyState == "complete") loadingTimeOut();
    else {
        document.onreadystatechange = () => {
            if (document.readyState == "complete") {
                loadingTimeOut();
            }
        };
    }
};

export const openMenu = () => (showMenu.value = true);
export const closeMenu = () => (showMenu.value = false);

export const route = routeStaticData;

export default defineComponent({
    name: "Layout",
    components: {
        Menu,
        Footer,
        LoadingPage,
        OpenMenu,
    },
});
</script>

<style lang="scss" scoped>
@import "./src/scss/index.scss";

.parent-container {
    padding-top: $menuHeight;
    background: $navy;
}

.slide-up-enter-active {
    transition: all 0.5s ease-out;
}

.slide-up-leave-active {
    transition: all 0.5s ease-in;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translate3d(0, -100%, 0);
}
</style>