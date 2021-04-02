<template>
    <div class="footer">
        <div>© 2021 | Hansen</div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
});
</script>

<style lang="scss" scoped>
    @import "./src/scss/index.scss";
    .footer {
        @include text-cannot-edit;
        background: $navy;
        font-family: "Futura";
        text-align: center;
        color: $white;
        padding: 20px 0;
    }
</style>