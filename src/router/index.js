import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DentistInfo from '../components/DentistInfo.vue';
import OrderView from '../views/OrderView.vue'; 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: ':name', 
          name: 'home-dentist',
          component: DentistInfo,
          props:true,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView, 
    },
  ],
});

export default router;
