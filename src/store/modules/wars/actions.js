export default {
  async loadWars(context) {
    const response = await fetch('http://localhost:3000/wars');

    const responseData = await response.json();

    const wars = [];

    for (const key in responseData) {
      const war = {
        id: responseData[key].war_id,
        name: responseData[key].war_name,
        starting_date: responseData[key].starting_date,
        is_it_over: responseData[key].is_it_over,
        info: responseData[key].war_info,
        img: responseData[key].war_image,
      };
      wars.push(war);
    }
    context.commit('setWars', wars);
  },
};
