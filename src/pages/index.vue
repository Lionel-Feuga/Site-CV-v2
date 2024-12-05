<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import TopBackground from "@/components/TopBackground.vue";

</script>

<template>
  <div class="top-background"> <TopBackground /> </div>
  <v-app class="full-container">
  <HeaderComponent style="position: fixed; width: 100vw; z-index: 1" />

  <v-row class="ma-auto top-container">
    <v-col
      class="d-flex left-col v-col-md-6 ps-md-15 flex-column align-center justify-center"
    >
      <p class="hello  outlined-text text-center">Hello !<br />Moi c'est</p>
      <div class="names d-flex ga-2 pe-1">
        <h1 class="firstName outlined-text" style="color: #17b9f9;  text-decoration: underline;">Lionel</h1>
        <h1 class="lastName outlined-text" style="color: #fe6e1f; text-decoration: underline;">Feuga</h1>
      </div>
        <p class="text-center outlined-text" style="font-size: 2rem;">𝑫é𝒗𝒆𝒍𝒐𝒑𝒑𝒆𝒖𝒓 𝒘𝒆𝒃  <br> 𝑭𝒖𝒍𝒍-𝑺𝒕𝒂𝒄𝒌</p>
    </v-col>
    <v-col class="d-flex align-center justify-center hide-on-small">
      <v-img
        src="../assets/codingMan.png"
        height= "400px"
        min-width="300px"
      ></v-img>
    </v-col>
  </v-row>
  </v-app>

  <div
    class="bla"
    style="width: 100vw; background-color: black; height: 150px"
  ></div>
</template>

<style scoped>
* {
  color: white;
}

.full-container {
  width: 100vw;
  /* background-image: url("../assets/topBackground.svg");
  background-size: cover; */
}

.top-container {
  min-height: 102vh;
  width: 80%;
  background-color: #ffffff;
  background: none;
}

.hello {
  letter-spacing: -3px;
  font-size: 2.5rem;
}

.names {
  letter-spacing: -01px;
  font-size: 2.8rem;
  font-family: "Bebas Neue", serif;
}

@media (max-width: 500px) {
  .hide-on-small {
    display: none !important;
  }
}
</style>
