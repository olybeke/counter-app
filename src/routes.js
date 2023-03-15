import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '@/components/NotFound';
import Counter from '@/components/CounterApp.vue';

const routes = [
  {
    path: '/',
    redirect: '/counter'
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
