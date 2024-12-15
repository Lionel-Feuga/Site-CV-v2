<script setup>
import AccueilComponent from "@/components/AccueilComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import SkillsComponent from "@/components/SkillsComponent.vue";
import TopBackground from "@/components/TopBackground.vue";
</script>

<template>
  <div>
    <TopBackground />
    <v-app class="full-container">
      <HeaderComponent style="position: fixed; width: 100vw; z-index: 1; " />
      <AccueilComponent />
      <SkillsComponent />
    </v-app>
  </div> 
</template>

<style scoped>
</style>
