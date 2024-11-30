<script setup>
import { ref } from "vue";

const menuItems = ref([
  "Accueil",
  "À propos",
  "Compétences",
  "Portfolio",
  "Contactez-moi",
]);

const navigate = (item) => {
  console.log(`Navigation vers : ${item}`);
};
</script>

<template>
  <v-row align="center" justify="space-between" class="header">
    <v-col cols="4">
      <img
        src="../assets/lfLogo.png"
        class="logo mt-5 ms-5"
        alt="Logo Lionel Feuga"
      />
    </v-col>
    <v-col cols="4" class="d-flex ga-5">
      <v-menu offset-y>
        <template #activator="{ props }">
          <v-btn v-bind="props" color="primary" dark>
            Menu
          </v-btn>
        </template>

        <v-list class="d-flex ga-5">
          <v-list-item v-for="(item, index) in menuItems" :key="index" @click="navigate(item)">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>

<style scoped>
.logo {
  height: 6.25rem;
  border-radius: 999px;
}
</style>
