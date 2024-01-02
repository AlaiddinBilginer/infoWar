import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      statistics: [
        {
          id: '1',
          warId: '1',
          countryId: '1',
          child_death: 100,
          adult_death: 1500,
          soldier_death: 4500,
        },
        {
          id: '2',
          warId: '1',
          countryId: '2',
          child_death: 250,
          adult_death: 3000,
          soldier_death: 8000,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
