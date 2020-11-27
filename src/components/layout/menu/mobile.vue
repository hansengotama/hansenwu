<template>
    <div id="menu">
        <fa icon="equals" type="fas" @click="openMenu()"></fa>
    </div>
</template>

<script setup="_, { emit }" lang="ts">
import { defineComponent } from "vue";

export const openMenu = () => emit("openMenu");

export default defineComponent({
    emits: ["openMenu"],
});
</script>

<style lang="scss" scoped>
@import "./src/scss/index.scss";

#menu {
    width: 100vw;
    height: $menuHeight;
    position: fixed;
    top: 0;
    background: $navy;
    display: flex;
    justify-content: flex-end;
    font-family: "Roboto";
    z-index: 2;

    svg {
        width: 25px;
        margin-right: 15px;
        color: $orange;
    }
}
</style>