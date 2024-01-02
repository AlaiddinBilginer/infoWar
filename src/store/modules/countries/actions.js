export default {
  async loadCountries(context) {
    const response = await fetch('http://localhost:3000/countries');

    const responseData = await response.json();

    const countries = [];

    for (const key in responseData) {
      const country = {
        id: responseData[key].country_id,
        name: responseData[key].country_name,
        info: responseData[key].country_info,
        establishment: responseData[key].establishment,
        population: responseData[key].population,
        region: responseData[key].region,
        flag: responseData[key].country_image,
        presidentId: responseData[key].country_president_Id,
      };
      countries.push(country);
    }
    context.commit('setCountries', countries);
  },
  async loadPresidents(context) {
    const response = await fetch('http://localhost:3000/presidents');

    const responseData = await response.json();

    const presidents = [];

    for (const key in responseData) {
      const president = {
        id: responseData[key].president_id,
        first_name: responseData[key].first_name,
        last_name: responseData[key].last_name,
        age: responseData[key].age,
        info: responseData[key].president_info,
        image: responseData[key].president_image,
      };
      presidents.push(president);
    }
    context.commit('setPresidents', presidents);
  },
};
