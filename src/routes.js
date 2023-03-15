import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '@/components/NotFound';
import Counter from '@/components/CounterApp.vue';
import HomeApp from '@/components/HomeApp.vue';

const routes = [
  {
    path: '/',
    // redirect: '/counter'
    name: 'HomeApp',
    component: HomeApp,
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
