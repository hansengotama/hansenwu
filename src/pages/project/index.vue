<template>
    <div id="project">
        <div class="title">
            My Projects
        </div>
        <div class="container">
            <div class="project-container" v-for="(data, index) in portofolioData" :key="index">
                <div class="image">
                    <img :src="data.src" >
                </div>
                <div class="text-container">
                    <div class="title">
                        {{ data.name }}
                    </div>
                    <div class="description">
                        <span v-html="data?.description"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import portofolioStaticData from "/src/static/portofolio-data.ts";

export const portofolioData = portofolioStaticData;
export default defineComponent({
    name: "Project",
});
</script>

<style lang="scss" scoped>
@import "./src/scss/index.scss";

#project {
    @include text-cannot-edit;
    padding: 20px;
    padding-bottom: 70px;
    background: $darkNavy;
    font-family: "Roboto";  

    .title {
        color: $white;
    }

    .container {
        margin: 0 10px;
        margin-top: 30px;
        display: grid;
        grid-gap: 1em;
        grid-template-columns: repeat(4, 1fr);

        .project-container {
            background: $navy;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            .image {
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                }
            }

            .text-container {
                padding: 15px;

                .title {
                    margin-bottom: 10px;
                    font-weight: 600;
                    color: $orange;
                    text-transform: uppercase;
                }

                .description {
                    color: $white;
                }
            }
        }
    }

    @media (max-width: 1200px) {
        .container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 800px) {
        .container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 500px) {
        .container {
            grid-template-columns: 1fr;
        }
    }
}
</style>