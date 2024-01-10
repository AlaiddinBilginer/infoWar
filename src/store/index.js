import { createStore } from 'vuex';

import warsModule from './modules/wars/index.js';
import countriesModule from './modules/countries/index.js';
import statisticsModule from './modules/statistics/index.js';
import presidentsModule from './modules/presidents/index.js';

const store = createStore({
  modules: {
    wars: warsModule,
    countries: countriesModule,
    statistics: statisticsModule,
    presidents: presidentsModule,
  },
});

export default store;
