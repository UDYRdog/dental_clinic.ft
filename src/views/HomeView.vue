<!-- HomeView.vue -->

<template>
  <div class="center-container">
    <h1>Dental clinic Nitra</h1>
    <h2>Naši zubári</h2>
    <div class="dentist-list">
      <RouterLink v-for="dentist in dentists" :key="dentist.name"   style="text-decoration: none;"  :to="{ name: 'home-dentist', params: { name: dentist.name } }">
        <div class="dentist-item">
          <img :src="dentist.image" :alt="dentist.name" class="dentist-image" />
          <div class="dentist-name">{{ dentist.name }}</div>
          <div class="specialization">{{ dentist.specialization }}</div>
        </div>
      </RouterLink>
    </div>
    <RouterView class="lower"/>
  </div>
</template>



<script>
import { RouterLink, RouterView } from 'vue-router';
import dataDentist from '@/data.json';

export default {
  data() {
    return {
      dentists: dataDentist,
    };
  },
};
</script>

<style scoped>
.lower{

  margin-top: 2cm;
}
</style>
