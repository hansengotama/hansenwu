<template>
    <div id="experience">
        <h1 class="title">
            My Experience
        </h1>
        <div class="container">
            <div class="work-container">
                <div class="work-title">
                    Work Experience
                </div>
                <div class="work-content">
                    <div v-for="(data, index) in experienceData.works" :key="index" class="work">
                        <div class="work-logo">
                            <img :src="data.src" />
                        </div>
                        <div class="work-data">
                            <div class="work-name">
                                {{ data.name }}
                            </div>
                            <div class="work-roles" v-for="(role, index) in data.roles" :key="index">
                                <div class="work-role">
                                    {{ role.text }}
                                </div>
                                <div class="work-time">
                                    {{ role.time }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="organization-container">
                <div class="organization-title">
                    Organization Experience
                </div>
                <div class="organization-content">
                    <div v-for="(data, index) in experienceData.organizations" :key="index" class="organization">
                        <div class="organization-logo">
                            <img :src="data.src" />
                        </div>
                        <div class="organization-data">
                            <div class="organization-name">
                                {{ data.name }}
                            </div>
                            <div class="organization-roles" v-for="(role, index) in data.roles" :key="index">
                                <div class="organization-role">
                                    {{ role.text }}
                                </div>
                                <div class="organization-time">
                                    {{ role.time }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="event-container">
                <div class="event-title">
                    Event Experience
                </div>
                <div class="event-content">
                    <div v-for="(data, index) in experienceData.events" :key="index" class="event">
                        <div class="event-logo">
                            <img :src="data.src" />
                        </div>
                        <div class="event-data">
                            <div class="event-name">
                                {{ data.name }}
                            </div>
                            <div class="event-roles" v-for="(role, index) in data.roles" :key="index">
                                <div class="event-role">
                                    {{ role.text }}
                                </div>
                                <div class="event-time">
                                    {{ role.time }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import experienceStaticData from "/src/static/experience-data.ts";

export const experienceData = experienceStaticData;
export default defineComponent({
    name: "Experience",
});
</script>

<style lang="scss" scoped>
@import "./src/scss/index.scss";

hr {
    border-color: $orange;
}

#experience {
    @include text-cannot-edit;
    padding: 20px;
    padding-bottom: 70px;
    background: $darkNavy;
    font-family: "Roboto";  

    .title {
        font-family: "Futura", sans-serif;
        color: $white;
        font-size: 16px;
    }

    .container {
        margin: 30px 10px 0px;

        .work-container {
            .work-title {
                color: $white;
                font-size: 22px;
                font-weight: 500;
            }

            .work-content {
                padding: 15px;

                .work {
                    margin-bottom: 20px;
                    display: flex;

                    .work-logo {
                        margin-right: 25px;

                        img {
                            height: 56px;
                            width: 56px;
                        }
                    }

                    .work-data {
                        .work-name {
                            color: $white;
                            font-weight: 500;
                            font-size: 18px;
                        }

                        .work-roles {
                            padding: 10px;
                            .work-role {
                                color: $white;
                            }

                            .work-time {
                                color: $white;
                                padding-top: 5px;
                                font-size: 13px;
                            }
                        }
                    }
                }
                
            }
        }

        .organization-container {
            .organization-title {
                color: $white;
                font-size: 22px;
                font-weight: 500;
            }

            .organization-content {
                padding: 15px;

                .organization {
                    margin-bottom: 20px;
                    display: flex;

                    .organization-logo {
                        margin-right: 25px;

                        img {
                            height: 56px;
                            width: 56px;
                        }
                    }

                    .organization-data {
                        .organization-name {
                            color: $white;
                            font-weight: 500;
                            font-size: 18px;
                        }

                        .organization-roles {
                            padding: 10px;
                            .organization-role {
                                color: $white;
                            }

                            .organization-time {
                                color: $white;
                                padding-top: 5px;
                                font-size: 13px;
                            }
                        }
                    }
                }
                
            }
        }

        .event-container {
            .event-title {
                color: $white;
                font-size: 22px;
                font-weight: 500;
            }

            .event-content {
                padding: 15px;

                .event {
                    margin-bottom: 20px;
                    display: flex;

                    .event-logo {
                        margin-right: 25px;

                        img {
                            height: 56px;
                            width: 56px;
                        }
                    }

                    .event-data {
                        .event-name {
                            color: $white;
                            font-weight: 500;
                            font-size: 18px;
                        }

                        .event-roles {
                            padding: 10px;
                            .event-role {
                                color: $white;
                            }

                            .event-time {
                                color: $white;
                                padding-top: 5px;
                                font-size: 13px;
                            }
                        }
                    }
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