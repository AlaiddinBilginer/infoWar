<template>
  <section>
    <div class="section-title"><h2>Savaşlar</h2></div>
    <div class="line"></div>
    <ul>
      <war-item
        v-for="war in wars"
        :key="war.id"
        :id="war.id"
        :name="war.name"
        :starting_date="war.starting_date"
        :is_it_over="war.is_it_over"
        :img="war.img"
      ></war-item>
    </ul>
  </section>
</template>

<script>
import WarItem from "../../components/wars/WarItem.vue";

export default {
  components: {
    WarItem,
  },
  computed: {
    wars() {
      return this.$store.getters["wars/wars"];
    },
  },
};
</script>

<style scoped>
ul {
  padding: 2rem 4rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

@media screen and (max-width: 420px) {
  ul {
    display: block;
  }
}
</style>