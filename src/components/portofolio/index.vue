<template>
    <div id="portofolio">
      <div class="container">
        <div class="portofolio-title">
          Portofolio
        </div>
        
        <div class="portofolio-container">
          <div class="images">
            <div class="image" v-for="(data, index) in limitPortofolio(portofolioData)" :key="index"> 
              <img :src="data.src" />
            </div>

            <div class="portofolio-description">
              <div class="title">
                My Projects
              </div>
              <div class="description">
                The portfolio have been made by the mid year of 2018. I enjoy making helpful application for people.
              </div>
              <div class="button">
                <router-link :to="redirectToProject"><button>View</button></router-link>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
  import { defineComponent, ref } from "vue";
  import { routeName } from "/src/types/enums/routeNameEnum";
  import portofolioStaticData from "/src/static/portofolio-data.ts";

  export const portofolioData = portofolioStaticData;
  export const redirectToProject = ref({
    name: routeName.PROJECT
  });
  
  export const limitPortofolio = (data) => {
    const returnData = data.filter((datum) => {
      return datum.showInHomePage;
    });

    return returnData
  }

  export default defineComponent({
      name: "Portofolio",
  });

</script>

<style lang="scss" scoped>
@import "./src/scss/index.scss";

#portofolio {
  @include text-cannot-edit;
  
  background: $darkNavy;
  padding-bottom: 50px;

  .container {
    padding: 40px 80px;

    .portofolio-title {
      font-family: "Futura";
      color: $white;
      margin-bottom: 20px;
    }

    .portofolio-container {
      margin: 0px 10px;

      .images {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1em;
        position: relative;

        .image {
          img {
            width: 100%;
            height: 100%;
            opacity: 0.5;
            filter: blur(1px);
            object-fit: cover;
          }
        }

        .portofolio-description {
          position: absolute;
          left: 10%;
          top: 35%;

          .title {
            color: $white;
            font-family: "Futura";
            font-size: 22px;
            text-transform: uppercase;
            font-weight: 500;
          }

          .description {
            color: $white;
            text-shadow: 2px 2px $navy;
            font-family: "Roboto";
            width: 250px;
            font-weight: 500;
            display: none;
          }

          .button {
            margin-top: 25px;

            button {
              background: $orange;
              color: $navy;
              font-family: "Roboto";
              padding: 10px 22px;
              font-weight: 500;
              border: none;
              cursor: pointer;
              box-shadow: 2px 2px $navy;
            }
          }
        }
      }

      @media (max-width: 1000px) and (min-width: 720px) {
        .images {
          .portofolio-description {
            top: 30%;

            .button {
              margin-top: 5px;

              button {
                padding: 4px 22px;
              }
            }
          }
        }
      }

      @media (max-width: 720px) and (min-width: 450px) {
       .images {
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 5px;

          .portofolio-description {
            top: 42%;
          }

          .title {
            margin-bottom: 30px;
            font-size: 22px;
          }

          .button {
            button {
              padding: 10px 22px;
            }
          }
        }
      }

      @media (max-width: 450px) {
       .images {
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 5px;

         .portofolio-description {
            top: 40%;
          }

          .title {
            margin-bottom: 0;
          }
        }
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