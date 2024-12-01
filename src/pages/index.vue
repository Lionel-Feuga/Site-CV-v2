<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";

//
</script>

<template>
  <HeaderComponent style="position: fixed; width: 100vw" />

  <v-row class="ma-auto " style="height: 102vh">
    <v-col class="d-flex left-col v-col-md-6 flex-column align-center justify-center">
      <h2>Hello !</h2>
      <p>Moi c'est</p>
      <div class="names d-flex ga-5">
        <div class="firstName" style="color: #17b9f9">Lionel</div>
        <div class="lastName" style="color: #fe6e1f">Feuga</div>
      </div>
    </v-col>
    <v-col class="d-flex align-center justify-center ">
      <img
        src="../assets/codingMan.png"
        style="border-radius: 999px; height: 400px"
        alt="la"
      />
    </v-col>
  </v-row>

  <div
    class="bla"
    style="width: 100vw; background-color: black; height: 150px"
  ></div>
</template>

<style scoped>
.left-col {
  font-size: 5rem;
  font-family: "Bebas Neue", serif;
}
</style>
