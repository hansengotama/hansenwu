<template>
    <div>
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "App",
});
</script>