<template>
  <div>
    <header>
      <div>
        <nav>
          <router-link to="/">
            <img src="/public/zub.png" alt="Logo" class="logo" />
          </router-link>
          <router-link to="/about" class="nav-link">O nás</router-link>
          <div class="sss">
            <router-link to="/order" class="nav-link">Objednať sa</router-link>
            <p class="sh">{{ lenn }}</p>
          </div>
        </nav>
      </div>
    </header>

    <router-view />

    <footer>
      <MyFooter />
    </footer>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import { useReservationStore } from './stores/counter';
import MyFooter from '@/components/MyFooter.vue';

export default {
  components: {
    MyFooter,
  },
  computed: {
    lenn() {
      return useReservationStore().reservations.length;
    },
  },
};
</script>

















<style scoped>

.sss {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align to the right */
}

.sh {
  margin-left: auto; /* Push to the right side */
  font-size: 0.8em; /* Adjust the font size as needed */
}
</style>
