<template>
    <div class="coming-soon">
        Coming soon
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Experience",
});
</script>

<style lang="scss" scoped>
@import "./src/scss/index.scss";

.coming-soon {
    @include text-cannot-edit;
    text-align: center;
    color: $white;
    font-family: "Futura";
    text-transform: uppercase;
    letter-spacing: 10px;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>