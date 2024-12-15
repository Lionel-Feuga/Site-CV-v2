<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['toggle']);
const isChecked = ref(false);

const handleChange = () => {
  emit('toggle', isChecked.value); // Émet l'état de la checkbox
};
</script>

<template>
  <div class="stop-motion-container">
    <input
      type="checkbox"
      id="stop-motion"
      v-model="isChecked"
      @change="handleChange"
    />
    <label for="stop-motion">Stop motion</label>
  </div>
</template>

<style scoped>
.stop-motion-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

label {
  font-size: 1rem;
  color: #000;
}
</style>
