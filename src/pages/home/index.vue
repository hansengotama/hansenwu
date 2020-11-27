<template>
    <div id="home">
        <AboutMe />
        <Skill />
        <ContactMe />
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import AboutMe from "/src/components/about-me/index.vue";
import Skill from "/src/components/skill/index.vue";
import ContactMe from "/src/components/contact-me/index.vue";

export default defineComponent({
    name: "Home",
    components: {
        AboutMe,
        Skill,
        ContactMe,
    },
});
</script>

<style lang="scss" scoped>
@import "./src/scss/index.scss";
</style>
    