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
};
