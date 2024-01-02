<template>
  <li>
    <router-link :to="countryDetailsLink">
      <img :src="flag" alt="Flag" />
      <div class="content">
        <h3>{{ name }}</h3>
        <p>
          Nüfus: <span class="population">{{ population }}</span>
        </p>
        <p class="establishment">Kuruluş Yılı: {{ establishment }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "population", "establishment", "flag"],
  computed: {
    countryDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
li {
  padding: 0.3rem;
  background-color: var(--primary-color);
  transition: transform 0.3s ease-out;
}

li img {
  width: 100%;
}

li:hover {
  transform: scale(1.02);
}

.content {
  margin-top: 0.5rem;
}

h3 {
  margin-bottom: 0.6rem;
}

.population {
  padding: 0.3rem 0.5rem;
  border-radius: 10px;
  background-color: var(--secondary-color);
}

.establishment {
  font-style: italic;
  margin-top: 0.8rem;
}
</style>