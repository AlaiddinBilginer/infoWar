export default {
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
