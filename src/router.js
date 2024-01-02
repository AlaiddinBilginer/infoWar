import { createRouter, createWebHistory } from 'vue-router';

import CountriesList from './pages/countries/CountriesList.vue';
import CountryDetails from './pages/countries/CountryDetails.vue';
import WarDetails from './pages/wars/WarDetails.vue';
import WarsList from './pages/wars/WarsList.vue';
import HomePage from './pages/HomePage.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/ana-sayfa' },
    { path: '/ana-sayfa', component: HomePage },
    { path: '/savaslar', component: WarsList },
    { path: '/savaslar/:id', component: WarDetails, props: true },
    { path: '/ulkeler', component: CountriesList },
    { path: '/ulkeler/:id', component: CountryDetails, props: true },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
