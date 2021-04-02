<template>
    <div id="skill" class="test">
      <div class="container">
        <div class="title">
          Skills
        </div>
        <div class="skill-types">
          <div class="type" 
            @click="changeType('language')" 
            :class="type == 'language' ? 'active' : ''">
            Language
          </div>
          <div class="type" 
            @click="changeType('framework')"
            :class="type == 'framework' ? 'active' : ''">
            Framework
          </div>
          <div class="type" 
            @click="changeType('others')"
            :class="type == 'others' ? 'active' : ''">
            Others
          </div>
        </div>

        <div class="skill-type-container">
          <div v-for="skill in skills[type]" class="skills">
            <img :src="skill.url" :alt="skill.name">
            <div class="skill-name">
              {{ skill.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup="props" lang="ts">
  import { ref } from "vue";
  import skillStaticData from "/src/static/skill-data.ts";

  export const skills = skillStaticData;
  export var type = ref("language");

  export const changeType = (changedType) => {
    type.value = changedType
    console.log(type)
  };
</script>

<style lang="scss" scoped>
@import "./src/scss/index.scss";

.test {
  @include text-cannot-edit;
  
  background: $darkNavy;

  .container {
    padding: 40px 80px;

    .title {
      font-family: "Futura";
      color: $white;
      margin-bottom: 20px;
    }

    .skill-types {
      font-family: "Futura";
      font-size: 22px;
      display: flex;
      color: $navy;

      @media (max-width: 500px) {
        font-size: 18px;
      }

      .type {
        margin: 0 10px;
        cursor: pointer;
      }

      .type.active {
        color: white;
      }
    }

    .skill-type-container {
      margin: 0 10px;
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 1em;

      .skills {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: $navy;

        img {
          margin: 20px 0 10px;
          width: 40px;
        }

        .skill-name {
          font-family: "Futura";
          color: $white;
          margin-bottom: 20px;
        }
      }
    }

    @media (max-width: 775px) {
      .skill-type-container {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    @media (max-width: 620px) {
      .skill-type-container {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 450px) {
      .skill-type-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media (max-width: 1200px) {
    .container {
      padding: 40px 40px;
    }
  }

  @media (max-width: 500px) {
    .container {
      padding: 40px 20px;
    }
  }
}
</style>