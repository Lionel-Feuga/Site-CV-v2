<script setup>
import { onMounted, ref } from "vue";
import { useStopMotion } from "../composables/useStopMotion";
import StopMotionToggle from "./StopMotionToggle.vue";

const logos = ref([]);
const { initializeMatter, startLogoMovement, toggleStopMotion } = useStopMotion();

const handleToggle = (isStopped) => {
  toggleStopMotion(isStopped, logos.value);
};

onMounted(() => {
  const logoElements = Array.from(document.querySelectorAll(".logo-box"));
  logos.value = logoElements;

  initializeMatter(logos.value);
  startLogoMovement(logos.value);
});
</script>



<template>
  <div class="skills-big-container">
    <v-row class="row">
      <v-col class="d-flex justify-center align-center">
        <h1>Mes compétences</h1>
      </v-col>
    </v-row>
    <StopMotionToggle @toggle="handleToggle"/>
    <v-row class="row">
      <v-col class="d-flex justify-center align-center">
        <div class="basket">
          <div class="logo-container">
            <div class="logo-box">
              <img src="../assets/logos/html-logo.svg" alt="HTML Logo" />
            </div>
            <div class="logo-box">
              <img src="../assets/logos/css-logo.svg" alt="CSS Logo" />
            </div>
            <div class="logo-box">
              <img
                src="../assets/logos/javascript-logo.svg"
                alt="JavaScript Logo"
                style="height: 2.73rem;"
              />
            </div>
            <div class="logo-box">
              <img
                src="../assets/logos/typescript-logo.svg"
                alt="TypeScript Logo"
                style="height: 2.73rem;"
              />
            </div>
            <div class="logo-box">
              <img
                src="../assets/logos/php-logo.svg"
                alt="PHP Logo"
                style="height: 4rem; padding-bottom: 2.67px"
              />
            </div>
            <div class="logo-box">
              <img
                src="../assets/logos/vuejs-logo.svg"
                alt="Vue.js Logo"
                style="height: 3.67rem; padding-top: 12px"
              />
            </div>
            <div class="logo-box">
              <img
                src="../assets/logos/nodejs-logo.svg"
                alt="Node.js Logo"
                style="height: 3.33rem"
              />
            </div>
            <div class="logo-box">
              <img
                src="../assets/logos/vuetify-logo.svg"
                alt="Vuetify Logo"
                style="height: 3.33rem"
              />
            </div>
            <div class="logo-box">
              <img
                src="../assets/logos/nuxtjs-logo.svg"
                alt="Nuxt.js Logo"
                style="height: 3.67rem; padding-bottom: 6.67px"
              />
            </div>
            <div class="logo-box">
              <img
                src="../assets/logos/nestjs-logo.svg"
                alt="Nest.js Logo"
                style="height: 3.33rem"
              />
            </div>
            <div class="logo-box">
              <img
                src="../assets/logos/bootstrap-logo.svg"
                alt="Bootstrap Logo"
                style="height: 3.47rem; padding-left: 0.67px"
              />
            </div>
            <div class="logo-box">
              <img
                src="../assets/logos/react-logo.svg"
                alt="React Logo"
                style="height: 3.47rem; padding-left: 0.67px"
              />
            </div>
            <div class="logo-box">
              <img
                src="../assets/logos/symfony-logo.svg"
                alt="Symfony Logo"
                style="height: 3.47rem; padding-left: 0.67px"
              />
            </div>
            <div class="logo-box">
              <img
                src="../assets/logos/expressjs-logo.svg"
                alt="Express.js Logo"
                style="height: 3.47rem; padding-left: 0.67px"
              />
            </div>
            <div class="logo-box">
              <img
                src="../assets/logos/gsap-logo.svg"
                alt="GSAP Logo"
                style="height: 3.47rem; padding-right: 10px"
              />
            </div>
            <div class="logo-box">
              <img
                src="../assets/logos/sequelize-logo.svg"
                alt="Sequelize Logo"
                style="height: 3.47rem; padding-left: 0.67px"
              />
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.skills-big-container {
  height: 100vh;
}

.row:first-child {
  height: 30%;
}
.row:last-child {
  height: 70%;
}

.basket {
  margin: 0 auto;
  margin-top: 1rem;
  height: 50vh;
  max-height: 30rem;
  min-height: 15rem;
  width: 80vw;
  max-width: 1400px;
  border: 2px solid #000000;
  background-color: #000;
  position: relative;
  overflow: hidden;
  box-shadow: inset rgba(60, 70, 85, 0.5) 0px 0px 40px 0px, inset rgba(60, 70, 85, 0.5) 0px 0px 40px 0px, inset rgba(0, 0, 0, 1) 0px 0px 36px -24px;
}

.logo-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.logo-box {
  position: absolute;
  height: 4.17rem;
  width: 4.17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background-color: white;
}

img {
  height: 64%;
}
</style>
