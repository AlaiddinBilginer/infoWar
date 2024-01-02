<template>
  <section>
    <div class="section-title"><h2>Ülkeler</h2></div>
    <div class="line"></div>
    <ul>
      <country-item
        v-for="country in countries"
        :key="country.id"
        :id="country.id"
        :name="country.name"
        :flag="country.flag"
        :population="country.population"
        :establishment="country.establishment"
      ></country-item>
    </ul>
  </section>
</template>

<script>
import CountryItem from "../../components/countries/CountryItem.vue";

export default {
  components: {
    CountryItem,
  },
  computed: {
    countries() {
      return this.$store.getters["countries/countries"];
    },
  },
};
</script>

<style scoped>
ul {
  display: grid;
  padding: 2rem 4rem;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>