<template>
    <div class="taggbox-container" style="width:100%;height:100%;overflow: auto;">
        <div class="taggbox-socialwall" data-wall-id="54298" view-url="https://widget.taggbox.com/54298"></div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted } from "vue";

onMounted(() => {
    // https://taggbox.com/
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://widget.taggbox.com/embed.min.js')
    document.head.appendChild(recaptchaScript)
});

export default defineComponent({
    name: "Experience",
});
</script>

<style lang="scss" scoped>
@import "./src/scss/index.scss";

</style>