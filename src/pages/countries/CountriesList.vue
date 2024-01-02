<template>
  <section>
    <div class="section-title"><h2>Ülkeler</h2></div>
    <div class="line"></div>
    <div class="input-control">
      <input type="text" placeholder="Ülke Ara" v-model="search" />
    </div>
    <ul>
      <country-item
        v-for="country in filteredCountries"
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
  data() {
    return {
      search: "",
    };
  },
  computed: {
    countries() {
      return this.$store.getters["countries/countries"];
    },
    filteredCountries() {
      return this.countries.filter((country) => {
        return country.name.includes(this.search);
      });
    },
  },
};
</script>

<style scoped>
ul {
  display: grid;
  padding: 2rem 4rem;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 0.25fr));
}

.input-control {
  display: flex;
  align-items: center;
  padding: 1rem 4rem 0;
}

input {
  height: 2rem;
  width: 19rem;
  background-color: transparent;
  background: url("../../../img/icon/search.svg") no-repeat;
  background-position: 10px 10px;
  padding: 1rem 1rem 1rem 40px;
  font-size: 1.2rem;
  color: #fff;
  border: none;
  border: 1px solid yellow;
}

input:focus {
  outline: none;
}

@media screen and (max-width: 600px) {
  ul {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>