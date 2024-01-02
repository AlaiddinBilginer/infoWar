<template>
  <section>
    <div class="section-title"><h2>Savaşlar</h2></div>
    <div class="line"></div>
    <div class="input-control">
      <input type="text" placeholder="Savaş Ara" v-model="search" />
    </div>
    <ul>
      <war-item
        v-for="war in filteredWars"
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
  data() {
    return {
      search: "",
    };
  },
  computed: {
    wars() {
      return this.$store.getters["wars/wars"];
    },
    filteredWars() {
      return this.wars.filter((war) => {
        return war.name.includes(this.search);
      });
    },
  },
  created() {
    this.loadWars();
  },
  methods: {
    async loadWars() {
      await this.$store.dispatch("wars/loadWars");
    },
  },
};
</script>

<style scoped>
ul {
  padding: 1rem 4rem 4rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 0.3fr));
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

@media screen and (max-width: 420px) {
  ul {
    display: block;
  }
}
</style>