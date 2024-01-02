export default {
  async loadStatistics(context) {
    const response = await fetch('http://localhost:3000/statistics');

    const responseData = await response.json();

    const statistics = [];

    for (const key in responseData) {
      const statistic = {
        id: responseData[key].id,
        warId: responseData[key].statistics_war_id,
        countryId: responseData[key].statistics_country_id,
        child_death: responseData[key].child_death,
        adult_death: responseData[key].adult_death,
        soldier_death: responseData[key].soldier_death,
      };
      statistics.push(statistic);
    }
    context.commit('setStatistics', statistics);
  },
};
